import Header from '../components/Header';
import Footer from '../components/Footer';
import './css/Register.css';

import LoginHeader from '../components/LoginHeader';
function Register(){
    return(
        <div>
            <Header/> 
            <div className='login-container'>
                <LoginHeader />
                <form className='register-form'>
                    <input placeholder='Phone number' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='login-form-input-style phone-number'/>
                    <input placeholder='Password' type="password" id="pass" name="password" minlength="8" required className=' login-form-input-style password'/> 
                    <a href='' className='hint-text'>Forgot Password</a>
                    <button className='login-button '>Register</button>
                </form>
                <div className='or-section'>
                    <hr></hr>
                    <span>OR</span>
                    <hr></hr>
                </div>
                <a href=''className='login-button '>Login</a>
                <p className='hint-text align-center'>Don't have an account? </p>
            </div>
            
            
            <Footer />
        </div>
    )
}

export default Register;