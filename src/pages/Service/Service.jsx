import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import img3 from "../../assets/img3.jpg";
import software from "../../assets/software.jpg";
import cloud from "../../assets/cloud.jpg";
import cyber from "../../assets/cyber.jpg";
import aiML from "../../assets/aiML.png";
import serviceImg from '../../assets/services.jpg'
const ServiceItem = ({ image, title, description, reverse = false }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center py-16 px-4 sm:px-6 lg:px-1 ${
        reverse ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 w-full sm:w-auto">
        <img
          src={image}
          alt={title}
          className="w-full max-h-60 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 mt-8 sm:mt-0 sm:ml-8 flex flex-col justify-center items-center text-center sm:text-left">
        <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Service = () => {
  const services = [
    {
      image: img3,
      title: "IT Consulting",
      description:
        "Our IT consulting services are designed to empower organizations by aligning their technology strategies with their business goals. We partner with clients to assess their current IT infrastructure, identify opportunities for improvement, and develop tailored strategies that drive digital transformation. Modernizing legacy systems, implementing new technologies, enhancing cybersecurity, or improving operational efficiency, our consultants bring deep industry expertise and a hands-on approach. We guide businesses through change, helping them make informed technology decisions, optimize their processes, and gain a competitive edge in an ever-evolving digital landscape.",
    },
    {
      image: software,
      title: "Software Development",
      description:
        "We specialize in delivering tailor-made software solutions designed to meet the specific needs and goals of your business. Our custom software development services cover the entire development lifecycle — from concept and design to deployment and ongoing support. Whether you require robust enterprise-grade applications, intuitive web platforms, or high-performing mobile apps, we build scalable, secure, and future-ready solutions that integrate seamlessly with your operations. Our team works closely with clients to understand their workflows, challenges, and long-term vision, ensuring the final product not only meets expectations but also drives innovation and growth. With a focus on modern technologies, agile development practices, and user-centric design, we help businesses gain a competitive edge through custom-built software that evolves with their needs.",
    },
    {
      image: cloud,
      title: "Cloud Solutions",
      description:
        "Our comprehensive cloud services are designed to help businesses harness the full potential of cloud technology. We provide end-to-end support — from strategy and migration to infrastructure management and cloud-native application development. Whether you're moving from on-premise systems to the cloud or optimizing an existing cloud environment, our experts ensure a smooth, secure, and efficient transition. We specialize in: Cloud Migration, Cloud Infrastructure Management and Cloud-Native Development.",
    },
    {
      image: cyber,
      title: "Cybersecurity",
      description:
        "In today’s digital landscape, protecting your business from cyber threats is more critical than ever. Our cybersecurity solutions are designed to safeguard your data, systems, and operations from evolving risks — whether internal or external, known or unknown.We take a proactive approach by assessing vulnerabilities, identifying security gaps, and implementing best-in-class defense strategies tailored to your environment. Our services include: Risk Assessment & Threat Modeling, Network & Endpoint Security, Compliance & Data Protection, Security Monitoring & Incident Response and Security Awareness Training.",
    },
    {
      image: aiML,
      title: "AI & Machine Learning",
      description:
        "We harness the power of Artificial Intelligence and Machine Learning to help businesses unlock deeper insights, automate processes, and drive smarter decision-making. Our solutions range from predictive analytics and natural language processing to intelligent automation and custom AI models. By integrating AI into your operations, we enable greater efficiency, agility, and innovation across your organization.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8">
      <section className="relative bg-cover bg-center h-150" style={{ backgroundImage: `url(${serviceImg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl sm:text-5xl font-semibold">
          <h1>Our Services</h1>
          <p className="mt-4 text-lg">We offer a wide range of IT consultancy services tailored to meet your business needs. Here are some of our core offerings.</p>
        </div>
      </section>

        {services.map((service, index) => (
          <ServiceItem
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            reverse={index % 2 !== 0} // Alternate the layout based on the index
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Service;
