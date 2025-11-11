import Footer from "../components/Footer";
import Header from "../components/Header";
import './css/Product.css'
function Product() {


  return (
    <div className="product-page">
        <Header />
            <div className="single-product">
                <div className="single-product-cover" >
                    <img src="https://www.shutterstock.com/image-photo/double-bed-bedroom-fluffy-down-600w-2592514295.jpg" />
                </div>
                <div className="single-product-info"> 
                    <h3 className="single-product-name">Eve Chinoiserie Duvet Cover </h3>
                    <p>This sets include :Single: 1 x Duvet Cover, 1 x Pillowcase, Double, Kingsize, Super Kingsize: 1 x Duvet Cover, 2 x Pillowcases </p>
                    <p>Size</p>
                    <select className="product-size">
                        <option> Queen</option>
                        <option>Double</option>
                    </select>
                    <p> Price: $120</p>
                    <button className="add-to-card">Add to card </button>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default Product;