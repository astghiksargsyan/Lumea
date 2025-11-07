import Header from '../components/Header';
import Footer from '../components/Footer';
import './css/Login.css';
function Login(){
    return(
        <div>
            <Header/> 
            <div className='login-container'>
                <div className='login-hheader'>
                    <h2>Log in or register</h2>
                    <p>Access your account to manage your <br/> preferences and manage your orders</p>
                </div>
                <form className='login-form'>
                    <input className='login-form-input-style' type='email' name='email' placeholder='Enter your email' />
                    <input className='login-form-input-style' type='password' name='password' placeholder='Enter your password' />
                    <a href='' className='hint-text'>Forgot Password</a>
                    <button className='login-button '>Login</button>
                </form>
                <div className='or-section'>
                    <hr></hr>
                    <span>OR</span>
                    <hr></hr>
                </div>
                <a href=''className='login-button '>Register</a>
                <p className='hint-text align-center'>Don't have an account? </p>
            </div>
            <Footer />
        </div>
    )
}

export default Login;