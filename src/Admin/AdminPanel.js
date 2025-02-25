import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy authentication logic (replace with your actual logic)
        if (username === 'NaGpUrDiAl' && password === '!@#$%^') {
            alert(`Welcome, ${username}!`);
            navigate('/adminuse'); // Redirect to admin use page
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <main className="col-md-6 col-lg-4">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h1 className="h4 text-center"><strong>Login To Admin Panel</strong></h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Log In</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
