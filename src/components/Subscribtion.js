import './css/Subscribtion.css'

function Subscribtion(){
    return(
        <div className="subscribtion-section"> 
            <div>
                <h4>Join the Lumea circle</h4>
                <p>Be the first to see new collections and get 10% off your first order.</p>
            </div>
            <form >
                <input type="email" name="email" placeholder="Your email" className="input-style" />
                <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
        </div>
    );
}
export default Subscribtion;