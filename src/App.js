import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import VaccineCampaign from "./pages/VaccineCampaign";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<Error/>} />
        <Route exact path='/vaccine-campaign' element={<VaccineCampaign/>} />
        <Route exact path='/blog' element={<Error/>} />
        <Route exact path='*' element={<Error/>} />


      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
