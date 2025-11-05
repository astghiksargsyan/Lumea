import './css/Footer.css';
import Subscribtion from './Subscribtion';

function Footer (){
    return(
        <div className='footer'>
            <Subscribtion />
            <div className='foother-content'>
                <div> <a href="#"> &copy;  Lumea · Handmade bed linen</a> </div>
                <ul className='footer-page-list'>
                    <li><a href="#">Privacy </a></li>
                    <li><a href="#">Terms  </a></li>
                    <li><a href="#">Contacts </a></li>
                </ul>
            </div>
        </div>
    );
}
export default Footer; 