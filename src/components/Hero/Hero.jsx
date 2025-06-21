import React, { useState, useEffect } from 'react';
import HeroImg from '../../assets/Hero2.jpg'

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <main className='flex items-center justify-center min-h-screen mt-0 selection:bg-cyan-200 selection:text-black'>
        <div className='container flex flex-col sm:flex-row items-center justify-center gap-10 text-center sm:text-left'>
          {/* Image Section */}
          <div data-aos="zoom-in" className='sm:w-1/2'>
            <img src={HeroImg} alt='Hero' className='w-[500px] sm:w-[600px] lg:w-[600px] h-auto mx-auto sm:mx-10 rounded-xl shadow-lg' />
          </div>
          
          {/* Text Section */}
          <div className='sm:w-1/2 space-y-5'>
            <h1 data-aos='fade-up' className='text-4xl sm:text-5xl font-semibold'>
              Empowering Digital Transformation with <span className='text-cyan-600 whitespace-nowrap'>SP Infotech PTE LTD</span>
            </h1>
            <p data-aos='fade-up' data-aos-delay='300' className='text-lg text-gray-600'>
              Designing cutting-edge digital solutions that future-proof global organizations and propel them ahead of the competition.
            </p>
            <a href="#services">
              <button data-aos='fade-up' data-aos-delay='500' className='btn-prmary'>
                      Get Started
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero