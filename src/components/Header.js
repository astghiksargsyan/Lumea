import './css/Header.css';
import logo from '../logo.png';
import Navigation from './Navigation';


function Header(){
    return(
        <div className='header'>
            <div className="logo">
                <a href=''><img src={logo} alt="Lumea logo" /></a>
            </div>
            <div className='header-info'>
                <h1>Lumea</h1>
                <p>Comfort & peaceful sleep</p>
            </div>  
            <div>
                <Navigation />
            </div> 
      
        </div>
    );
}
export default Header;