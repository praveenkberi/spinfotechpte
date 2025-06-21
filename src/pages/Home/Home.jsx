import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Casestudy from '../../components/Casestudy/Casestudy'
import Footer from '../../components/Footer/Footer'
// import ContactForm from './components/ContactForm/ContactForm'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
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
        <div className='overflow-x-hidden duration-300'>
            <Navbar />
            <Hero />
            <Services />
            <Testimonials />
            <Casestudy />
               {/* <ContactForm /> */}
            <Footer />
        </div>
      )
}

export default Home