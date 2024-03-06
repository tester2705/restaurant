/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import img1 from "../../images/c1.png";
import img2 from "../../images/c2.png";
import img3 from "../../images/c3.png";
import "./details.css";

function Details({ sr }) {
  useEffect(() => {
    sr.reveal(".container", { delay: 400 });
  }, [sr]);

  return (
    <section className="container">
      <div className="container-box">
        <img src={img1} alt="timings" />
        <h3>11:00 AM - 8:00 PM</h3>
        <a href="#">Working Hours</a>
      </div>

      <div className="container-box">
        <img src={img2} alt="timings" />
        <h3>Restaurant 555</h3>
        <a href="#">Get Directions</a>
      </div>

      <div className="container-box">
        <img src={img3} alt="timings" />
        <h3>(123) - 456 789</h3>
        <a href="#">Call Us Now</a>
      </div>
    </section>
  );
}

export default Details;
