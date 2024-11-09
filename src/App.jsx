import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/contactUs"} element={<Contactus />} />
        <Route path={"/aboutUs"} element={<Aboutus />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
