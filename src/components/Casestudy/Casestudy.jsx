import React from 'react'
import img3 from "../../assets/img3.jpg"
import CasestudyCard from './CasestudyCard'


const CasestudyDate = [
    {
        id: 1,
        image: img3,
        title: "Project Management",
        description: "With extensive experience in leading projects from inception to completion, I excel at defining project scope, objectives, and key deliverables while effectively managing resources, schedules, and budgets. My strong risk management skills ensure project success in dynamic environments, and I leverage project management tools to enhance collaboration and streamline progress tracking.",
        aosDelay: "0",
    },
    {
        id: 2,
        image: img3,
        title: "Business Analysis",
        description: "With extensive experience in analyzing business processes and identifying improvement opportunities, I excel at gathering and documenting requirements to align with organizational goals. Skilled in conducting stakeholder interviews, I ensure a deep understanding of needs and expectations while creating comprehensive business analysis documentation, including use cases and process flows. My expertise lies in translating business needs into actionable solutions that drive efficiency and success.",
        aosDelay: "300",
    },
    {
        id: 3,
        image: img3,
        title: "Data-Driven Decision-Making",
        description: "I leverage data analysis techniques to extract meaningful insights that drive informed decision-making and strategic business choices. By implementing data-driven strategies, I enhance operational efficiency, optimize processes, and foster continuous improvement. Collaborating cross-functionally, I identify opportunities for innovation while maintaining robust analytics frameworks that ensure data accuracy, reliability, and security.",
        aosDelay: "500",
    },
]

const Casestudy = () => {
  return (
  <>
    <div className='bg-gray-100 py-10 pb-14 flex flex-col items-center'>
        <div className='container '>
            <h1 data-aos='fade-up' className='my-8 border-l-8 border-cyan-300 py-2 pl-2 text-3xl font-semibold inline-block'>Case Studies</h1>
            {/* Blog Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
                {
                    CasestudyDate.map((blog) => (
                        <CasestudyCard key={blog.id} {...blog} />
                    ))
                
                }
            </div>
            <div className='text-center'>
                <button className='btn-prmary'>View All</button>
            </div>
        </div>
        
    </div>
  </>
  )
}

export default Casestudy