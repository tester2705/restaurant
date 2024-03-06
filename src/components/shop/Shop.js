/* eslint-disable jsx-a11y/anchor-is-valid */
import img1 from "../../images/p1.png";
import img2 from "../../images/p2.png";
import img3 from "../../images/p3.png";
import img4 from "../../images/p4.png";
import ProductCard from "./ProductCard.js";
import "./shop.css";

function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="middle-text">
        <h4>Our Shop</h4>
        <h2>Let's Check Popular Products</h2>
      </div>

      <div className="shop-content">
        <ProductCard img={img1} />
        <ProductCard img={img2} />
        <ProductCard img={img3} />
        <ProductCard img={img4} />
      </div>

      <div className="row-btn">
        <a href="#" className="btn">
          All Products<i className="bx bxs-right-arrow"></i>
        </a>
      </div>
    </section>
  );
}

export default Shop;
