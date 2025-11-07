import Header from '../components/Header';
import './css/AboutUs.css';
import Footer from '../components/Footer';
function AboutUs(){
    return(
        <div>
            <Header />
            <div className='about-us-header set-width'>
                <h2 className='about-page-h2-style'>Crafting Comfort <br/> with Care</h2>
                <p className='about-page-p-style'>Discover the heart of Lumea and the values that define <br/> our passion for luxurious, sustainable bed linen.</p>
                <div className='image-wrap'>
                    <img className="about-us-cover" src='https://naturalmat.co.uk/cdn/shop/files/PDP-bed-linen-gallery-images_2000x1340_6da38b5d-f7d0-452c-abf0-be5cc7b17916.jpg?v=1709829965&width=1946' alt='Cover image'/>
                </div>
            </div>
            <div className='our-story set-width'>
                <h3 className='about-page-h3-style'>Our Story</h3>
                <p className='about-page-p-style'>Lumea was born from a simple idea — that everyone deserves to wrap themselves in the beauty of luxurious, eco-friendly bed linen.</p>
            </div>
            <div className='principles set-width'>
                <h3 className='about-page-h3-style'>Our Principles</h3>
                <ul className='principles-wrap'>
                        <li>
                            <div className='icon-wrap'><img className="icon-styles" src="https://cdn-icons-png.flaticon.com/512/48/48787.png"/></div>
                            <h4>Timeless Craftsmanship</h4>
                            <p>Each piece is handcrafted with meticulous attention to detail ensuring enduring quality.</p>
                        </li>
                        <li>
                            <div className='icon-wrap'><img className="icon-styles" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQQrXii1MBLguEczVudcp0LHs24ISAbS8VA&s"/></div>
                            <h4>Natural Elegance</h4>
                            <p>We use sustainably sourced materials to create that honors the beauty of the natural world.</p>
                        </li>
                        <li>
                            <div className='icon-wrap'><img className="icon-styles" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLebquZM0p40T427VCftQuQ8bElWxaE_0r5Q&s"/></div>
                            <h4>Mindful Luxury</h4>
                            <p>True luxury is in peaceful sleep and sustainable choices.
                                We weave these values in every thread.</p>
                        </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}
export default AboutUs;