/* eslint-disable jsx-a11y/anchor-is-valid */
import "boxicons";
import ScrollReveal from "scrollreveal";
import About from "../about/About";
import Details from "../details/Details";
import Header from "../header/Header";
import Scroll from "../scroll/Scroll";
import Shop from "../shop/Shop";

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
});

function Home() {
  return (
    <>
      <Header sr={sr} />
      <Details sr={sr} />
      <About sr={sr} />
      <Shop sr={sr} />

      <Scroll />
    </>
  );
}

export default Home;
