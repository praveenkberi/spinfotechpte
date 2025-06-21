import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppShortcut } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { SiMarketo } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";

const skillsData = [
    {
        name:"App Development",
        icon:<MdOutlineAppShortcut  className='text-4xl text-cyan-800' />,
        link: "#",
        description: "Develop and craft cutting-edge, scalable, and feature-packed custom mobile apps with a top-rated, Apple App Store award-winning development company. We specialize in Android, iOS, React Native, Flutter, Ionic, and more.",
        aosDelay:"0",
    },
    {
        name:"Web Designing",
        icon:<CgWebsite  className='text-4xl text-cyan-800' />,
        link: "#",
        description: "Create custom web apps that stand the test of time and captivate your audience. Strengthen your brand identity with scalable, secure, user-friendly, and bespoke applications. Reach out to our custom web application development company today!",
        aosDelay:"300",
    },
    {
        name:"Digital Transformation",
        icon:<LiaDigitalTachographSolid className='text-4xl text-cyan-800' />,
        link: "#",
        description: "Modules such as team augmentation and smooth offshore development drive effective online transformation by incorporating the latest trends.",
        aosDelay:"500",
    },
    {
        name:"Digital Marketing Solutions",
        icon:<SiMarketo className='text-4xl text-cyan-800' />,
        link: "#",
        description: "Develop and craft cutting-edge, scalable, and feature-packed custom mobile apps with a top-rated, Apple App Store award-winning development company. We specialize in Android, iOS, React Native, Flutter, Ionic, and more.",
        aosDelay:"700",
    },
    {
        name:"Virtual assistance services",
        icon:<RiCustomerService2Line className='text-4xl text-cyan-800' />,
        link: "#",
        description: "Round-the-clock, seamless VA support providing expert assistance at every stage of your digital project",
        aosDelay:"900",
    },
]


const Services = () => {
  return (
    <>
        <div id="services" className='bg-cyan-200 py-20 sm:grid sm:place-items-center selection:bg-cyan-200 selection:text-black'>
            <div className='container'>
                {/* Header Section*/}
                <div className='pb-3 text-center space-y-3'>
                    <h1 data-aos='fade-up' className='text-3xl font-semibold'>Explore Our Services</h1>
                </div>
                <p data-aos='fade-up' className='text-center'>
                    At SP Infotech, we’re on a mission to reshape businesses through groundbreaking digital transformation. Dive into our tailored services that will elevate your company’s success to new heights.
                </p>
                
                {/* Card Section*/}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {skillsData.map((skill) => (
                        <div data-aos='fade-up' data-aos-delay={skill.aosDelay} key={skill.name} className='card space-y-3 sm:space-y-4 p-4'>
                            <div>{skill.icon}</div>
                            <h1 className='text-lg font-semibold'>{skill.name}</h1>
                            <p className='text-gray-600'>{skill.description}</p>
                        </div>
                    ))

                    }
                </div>
                {/* Button Section*/}
                <div data-aos='fade-up' data-aos-delay='900' data-aos-offset='0' className='text-center mt-4 sm:mt-8'>
                    <button className='btn-prmary'>
                        Learn More
                    </button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Services