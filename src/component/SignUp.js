import React, { useState } from 'react';
import './header';

function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        const confirmPassword = e.target["confirm-password"].value;
    
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Sign up successful!");
        }
    };

    return (
        <>
            <body className="sign">
                <div className="sign-in-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <input type="password" id="confirm-password" name="confirm-password" required />
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                </div>
            </body>
        </>
    );
}

export default Signup;