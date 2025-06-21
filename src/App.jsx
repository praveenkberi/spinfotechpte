import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './pages/About/About'
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import ContactUs from "./pages/Contact/ContactUs";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; 

const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  },[])
  return (
    <Router>
      <ScrollToTop />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App