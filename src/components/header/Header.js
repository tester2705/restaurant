/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import hero from "../../images/hero.png";
import "./header.css";

function Header({ sr }) {
  useEffect(() => {
    sr.reveal(".home-text", { delay: 300 });
    sr.reveal(".home-img", { delay: 400 });
  }, [sr]);

  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>
          Meet, <span>Eat &</span> <p> Enjoy The True </p> Taste
        </h1>
        <a href="#shop" className="btn">
          Explore Menu<i className="bx bxs-right-arrow"></i>
        </a>
        <Link to={`/book-a-table`} className="btn2">
          Book a Table
        </Link>
      </div>

      <div className="home-img">
        <img src={hero} alt="home-img" />
      </div>
    </section>
  );
}

export default Header;
