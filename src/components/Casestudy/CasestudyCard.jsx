import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const CasestudyCard = ({image, title, description, aosDelay}) => {
  return (
    <>
        <div data-aos='fade-up' data-aos-delay={aosDelay} className='group cursor-pointer'>
            <div>
                <img src={image} alt=''  className='mx-auto h-[-420px] w-full object-cover group-hover:scale-105 duration-300'/>
                <div className='space-y-2 p-4 ml-6 bg-white -translate-y-16'>
                    <h1 className='line-clamp-1 text-2xl font-semibold selection:bg-cyan-200 selection:text-black'>{title}</h1>
                    <h1 className='line-clamp-4 text-gray-500 text-sm selection:bg-cyan-200 selection:text-black'>{description}</h1>
                    <div className='flex justify-end pr-4 text-gray-500'>
                       <FaArrowRight className='group-hover:text-primary group-hover:translate-x-2 duration-300' /> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CasestudyCard