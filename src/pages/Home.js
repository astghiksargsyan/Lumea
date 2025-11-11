import Header from "../components/Header";
import './css/Home.css' ;
import { Sets } from "../bedSets";
import Footer from "../components/Footer";

function Home (){
    return(
        <div>
            <Header />
            <div className="home-header set-width"> 
                <h2 className="home-h2"> Sleep reimagined <br /> in Elegance </h2>
                <p className="p-style"> Discover luxurious bed linen that elevates your <br /> sleep experience. </p>
                <a className="home-shop-btn" href="">Shop now </a>
            </div>
            <div className="featured-sets-section set-width">
                <h3 className="featured-collection h3-style">Featured Collections</h3>
                <ul className="featured-list">
                    {Sets.map((set, index)=>
                        <li className="featured-item" key={index}><a href="#"><img src={set.img} alt={set.name} /> <span className="collection-name p-style">{set.name}</span></a></li>
                    )}
                </ul>
            </div>
            <div className="about-lumea set-width">
                <div>
                    <h3 className="about-lumea h3-style">About Lumea</h3>
                    <p className="p-style">At Lumea, we believe in the < br />
                    transformative power of soft luxurious < br /> 
                    bed linen.Each piece in our collection  < br /> 
                    is crafted with meticulous attention to  < br /> 
                    detail ensuring a serene and elegant < br /> 
                    sleep experience.</p>
                    <a href="" className="read-more p-style">Read more</a>
                </div>
                <div className="about-cover-img">
                    <img src="https://www.shutterstock.com/image-photo/cotton-ivory-sheet-set-bed-260nw-2599521141.jpg" alt="about me img" />
                </div>
            </div>
            <div className="testimonials set-width">
                <h3 className="h3-style">What Our Customers Say</h3>
                <ul className="testimonials-list">
                    <li>
                        <a hre="#">
                            <p className="testimonial-content">“The quality of the linen is exceptional. I feel like I'm sleeping in a five-star hotel every night.”</p>
                            <p className="testimonial-author">— Emily R.</p>
                        </a>
                    </li>
                    <li>
                        <a hre="#">
                            <p className="testimonial-content">“I love the timeless design and the soft, breathable fabric. It makes such a difference.”</p>
                            <p className="testimonial-author">— Sarah K.</p>
                        </a>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}
export default Home; 