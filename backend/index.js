const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const Location = require("./models/Locations");
const Category = require("./models/Category");
var jwt = require("jsonwebtoken");
const jwt_key = "gayatrimam@123";

const app = express();

// Ensure the uploads directory exists
const fs = require("fs");
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const buildpath = path.join(__dirname, "../build");
app.use(express.static(buildpath));

// Middleware
app.use(
  cors({
    origin: "*", // Allow all origins
  })
);
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/NagpurDial1", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Schema and model for file uploads
const uploadSchema = new mongoose.Schema({
  files: [
    {
      filename: String,
      path: String,
      contentType: String,
    },
  ],
  firstname: String,
  middlename: String,
  lastname: String,
  email: String,
  number: String,
  businessname: String,
  description: String,
  location: String,
  pincode: String,
});
const Upload = mongoose.model("Upload", uploadSchema);

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Routes for search by locations
app.post("/api/search", async (req, res) => {
  const { locationsName } = req.body;
  try {
    const locations = await Locations.find({
      name: { $regex: locationsName, $options: "i" }, // Case-insensitive search by component name
    });
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Routes for search by business name and address as well
app.get("/api/locations/search", async (req, res) => {
  const { locationsName } = req.query; // Using query parameters instead of the body

  // Validate the input to ensure it's a non-empty string
  if (typeof locationsName !== "string" || locationsName.trim() === "") {
    return res.status(400).json({ message: "Invalid input" });
  }

  try {
    // Perform search using $or to match either the name or location field
    const locations = await Location.find({
      $or: [
        { name: { $regex: locationsName, $options: "i" } }, // Search in the name field
        { location: { $regex: locationsName, $options: "i" } }, // Search in the location field
      ],
    });

    // If no matching locations were found, send a 404 response
    if (locations.length === 0) {
      return res.status(404).json({ message: "No matching locations found." });
    }

    // Return the matching locations
    res.status(200).json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to handle file upload
app.post("/freelisting", upload.array("files"), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send("Please upload one or more files");
    }

    const filesArray = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      contentType: file.mimetype,
    }));

    const newUpload = new Upload({
      files: filesArray,
      businessname: req.body.name,
      description: req.body.description,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      email: req.body.email,
      number: req.body.number,
      location: req.body.location,
      pincode: req.body.pincode,
    });
    await newUpload.save();
    res.send("Files uploaded successfully");
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).send("Failed to upload files");
  }
});

// Schema for login
app.use(bodyParser.json());
const userSchema = new mongoose.Schema({
  email: String,
  number: String,
});
const User = mongoose.model("User", userSchema);

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, number } = req.body;
    if (!email || !number) {
      return res.status(400).send("Email and number are required");
    }
    const user = await User.findOne({ email, number });
    if (!user) {
      return res.status(401).send("Invalid email or number");
    }
    res.status(200).send("Login successful");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
});

// api for category
// app.get('/api/:categoryName', async (req, res) => {
//   const { categoryName } = req.params; // Get the category name from the URL path

//   if (!categoryName || categoryName.trim() === "") {
//     return res.status(400).json({ message: "Category name is required" });
//   }

//   try {
//     // Fetch data from the database where category matches
//     const categories = await Category.find({
//       categories: { $regex: categoryName, $options: "i" }, // Case-insensitive match
//     });

//     // Check if no data is found
//     if (categories.length === 0) {
//       return res.status(404).json({ message: `No data found for category: ${categoryName}` });
//     }

//     // Return matched data
//     res.json(categories);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

app.post("/api/category", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    // Search for matching categories
    const categories = await Category.find({
      categories: { $regex: name, $options: "i" }, // Search by categories field using case-insensitive regex
    });

    if (!categories.length) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error during request:", err);
  res.status(500).send("Something's broken. Please refresh the page!");
});

const PORT = process.env.PORT || 30000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
