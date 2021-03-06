import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='your password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter your password' />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <div>or</div>
                <button className="btn-regular">Google sign in</button>
            </div>
        </div>
    );
};

export default Register;