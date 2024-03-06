/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import about from "../../images/about.png";
import "./about.css";

function About({ sr }) {
  useEffect(() => {
    sr.reveal(".about-img", {});
    sr.reveal('.about-text', {delay: 300});
  }, [sr]);

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={about} alt="about" />
      </div>

      <div className="about-text">
        <h2>
          Living well begins <br></br> with eating well.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus
          maximus, ornare erat non, vestibulum purus. Donec mollis laoreet
          venenatis. Etiam elementum libero et sem ornare, id cursus ex
          tincidunt. Sed semper elit et libero accumsan, eget sodales justo
          feugiat. Curabitur rhoncus consequat dignissim. Donec dictum, est vel
          blandit.
        </p>
        <a href="#" className="btn">
          Explore Story<i className="bx bxs-right-arrow"></i>
        </a>
      </div>
    </section>
  );
}

export default About;
