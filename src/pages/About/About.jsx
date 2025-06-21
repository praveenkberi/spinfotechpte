import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import aboutImg from '../../assets/about.jpg'
import personImage from '../../assets/client.png'

const About = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-150" style={{ backgroundImage:  `url(${aboutImg})`}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl sm:text-5xl font-semibold">
          <h1>About Us</h1>
          <p className="mt-4 text-lg">Discover more about our journey, values, and team.</p>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 selection:bg-cyan-200 selection:text-black">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600 selection:bg-cyan-200 selection:text-black">
            At [Company Name], we are committed to delivering high-quality services and products that meet the needs of our clients. Our team is passionate about helping businesses grow and succeed in an ever-changing marketplace.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 selection:bg-cyan-200 selection:text-black">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 selection:bg-cyan-200 selection:text-black">Integrity</h3>
              <p className="mt-2 text-gray-600 selection:bg-cyan-200 selection:text-black">
                We believe in doing the right thing, even when no one is watching.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 selection:bg-cyan-200 selection:text-black">Innovation</h3>
              <p className="mt-2 text-gray-600 selection:bg-cyan-200 selection:text-black">
                We strive to bring fresh ideas and innovative solutions to every challenge.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 selection:bg-cyan-200 selection:text-black">Excellence</h3>
              <p className="mt-2 text-gray-600 selection:bg-cyan-200 selection:text-black">
                We are committed to providing top-notch service and exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 selection:bg-cyan-200 selection:text-black">Meet Our Team</h2>
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
              <img src={personImage} alt="Team Member" className="w-32 h-32 mx-auto rounded-full object-cover" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 selection:bg-cyan-200 selection:text-black">Devanand</h3>
              <p className="text-gray-600 selection:bg-cyan-200 selection:text-black">CEO</p>
              <p className="mt-2 text-gray-600 selection:bg-cyan-200 selection:text-black">
              Devanand is passionate about leading the company towards growth while maintaining strong relationships with clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-lg">Have questions or want to work with us? We’d love to hear from you.</p>
          <a href="mailto:contact@company.com" className="mt-8 inline-block bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-200">
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
