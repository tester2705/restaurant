import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/styles/styles.css";
import Form from "./components/form/Form";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/book-a-table" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
