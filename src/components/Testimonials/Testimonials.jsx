import React from 'react'
import Slider from "react-slick";
import clientImg from '../../assets/client.png'

const testimonialsData = [
    {
        id: 1,
        name: "David, Singapore",
        text: "Your ability to understand our business needs, offer innovative recommendations, and ensure smooth execution has significantly improved our processes. The professionalism and dedication demonstrated by your team have made a real impact, and we truly value this partnership.",
        img: clientImg,
    },
    {
        id: 2,
        name: "Kishore, Singapore",
        text: "“Their support staff is outstanding — always available and communicates clearly. They helped us implement new software seamlessly and provided training to ensure our staff was confident using it.",
        img: clientImg,
    },
    {
        id: 3,
        name: "John , Singapore",
        text: "The tailored IT solutions they provided perfectly matched our unique business needs. Their expertise helped us improve workflow and security substantially",
        img: clientImg,
    }
]


const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };

  return (
    
    <>
        <div className='py-10 bg-white'>
            <div data-aos="fade-up" className='container mx-auto'>
                {/*Testimonial Section */}
                <div className='max-w-screen-md mx-auto'>
                    <Slider {...settings}>
                        {
                            testimonialsData.map(({id, name, text, img}) => (
                                <div key={id} className='my-6'>
                                    <div className='flex flex-col items-center text-center bg-cyan-100 shadow-lg p-6 rounded-xl'>
                                        <img src={img} alt='' className='h-24 w-24 rounded-full object-cover mb-4'/>
                                        <div className='space-y-4'>
                                            <p className='text-gray-600 italic'>
                                                {text}
                                            </p>
                                            <h1 className='text-lg font-semibold mt-4'>
                                                {name}
                                            </h1>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials