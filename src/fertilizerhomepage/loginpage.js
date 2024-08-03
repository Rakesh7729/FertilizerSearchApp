import React, { useState } from 'react';
import './loginpage.css';
// import fertilizerbackground from './fertilizerbackground.jpg'
import Acemain from './Acemain.webp';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
        } else {
            setMessage('Signup successful!');
        }
    };

    return (
        <>
            <div className="signup-container">
                <form onSubmit={handleSignup} className="signup-form">
                    <h2>Sign Up Page</h2>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Sign Up</button>
                    {message && <p>{message}</p>}
                </form>
                <div>
                    <form className=''>
                       {/* <img src= {fertilizerbackground} alt='fertilizerbackground'/> */}
                       <img src= {Acemain} alt='AcemainPhoto'/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
