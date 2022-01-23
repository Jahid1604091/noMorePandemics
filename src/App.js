import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<Error/>} />
        <Route exact path='/contact' element={<Error/>} />
        <Route exact path='/blog' element={<Error/>} />
        <Route exact path='*' element={<Error/>} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
