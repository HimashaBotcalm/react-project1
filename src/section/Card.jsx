import React from "react";
import { motion } from "motion/react"
import bell from '../assets/Bell.png'

const Card = () => {
    return (
        <section id="about" className="flex lg:flex-row flex-col justify-center items-center gap-16 p-4 md:p-10 overflow-x-hidden px-6 sm:px-8">
            { /* gray card */}
            <div className="max-w-sm bg-gray-100 rounded-2xl p-8 text-center shadow">
                <h3 className="text-xl font-semibold mb-4">Lorem Ipsum is simply <br /> dummy text.</h3>
                <p className="text-gray-600 mb-6 text-sm">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                <button className="bg-[#1090CB] hover:bg-sky-600 text-white px-5 py-2 rounded-md">View More</button>
            </div>


            { /* Blue card */ }
            <div className="relative max-w-sm bg-[#1090CB] text-white rounded-2xl p-8 text-center shadow">

                {/* gradient */}
                <div className="absolute -top-0.2 -right-26 w-[280px] h-[280px] rounded-full bg-[#FFD9EB] blur-3xl opacity-800 -z-80"></div>

                { /* Bell Icon */}
                <motion.img src={bell} alt="bell icon" className="absolute -top-10 -right-0 w-20 h-20 rotate-4" animate={{ y: [0, -20, 0] }}
  transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}/>

                <h3 className="text-xl text-[#FFFFFF] font-semibold mb-4">Lorem Ipsum is simply <br /> dummy text.</h3>
                    <p className="mb-6 text-sm">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                <button className="bg-white text-sky-500 hover:bg-gray-100 px-5 py-2 rounded-md">View More</button>
            
                


            </div>
        </section>
    )
}


export default Card;