import Bedlinen from './BedLinen'
import './css/BedLinenList.css';
import Footer from './Footer';
import Header from './Header';

function BedLinenList(){
    return(
        <div>
            <Header />
            <div className='bed-linen-list'>
                <Bedlinen />
                <Bedlinen />
                <Bedlinen />
                <Bedlinen />
           </div>
           <Footer />
        </div>
        
    );
}
export default BedLinenList;