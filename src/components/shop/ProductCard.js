/* eslint-disable jsx-a11y/anchor-is-valid */
function ProductCard({ img }) {
  return (
    <div className="row">
      <img src={img} alt="product" />
      <h3>Blueberry Honey</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="in-text">
        <div className="price">
          <h6>$21.00</h6>
        </div>
        <div className="s-btn">
          <a href="#">Order Now</a>
        </div>
      </div>

      <div className="top-icon">
        <a href="#">
          <i className="bx bx-heart"></i>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
