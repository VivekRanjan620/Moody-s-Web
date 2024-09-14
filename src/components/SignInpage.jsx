import React from 'react';
import './SignInPage.css'; 

const SignInPage = () => {
    return (
        <div className="signin-container">
            <h1>Sign in or Register</h1>
            
            <div className="signin-box">
                <h2>Sign in</h2>
                
                <form className="signin-form">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    
                    <button type="submit">Continue</button>
                </form>
                
                <div className="or-divider">
                    <span>OR</span>
                </div>
                
                <p className="register-prompt">
                    Not registered yet? <a href="#register">Register</a> to gain exclusive access.
                </p>
            </div>
            
            <p className="subscribe-prompt">
                Subscribe to get full access to Moody’s CreditView.
            </p>
        </div>
    );
}

export default SignInPage;
