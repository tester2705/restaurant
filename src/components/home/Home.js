/* eslint-disable jsx-a11y/anchor-is-valid */
import "boxicons";
import Details from "../details/Details";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Shop from "../shop/Shop";
import Scroll from "../scroll/Scroll";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Details />
      <About />
      <Shop />

      <Scroll />
    </>
  );
}

export default Home;
