import React from "react";
import { motion } from "motion/react"
import HeroImg from '../assets/Hero.png'
import Service1 from '../assets/Service1.svg'
import Service2 from '../assets/Service2.svg'
import Service3 from '../assets/Service3.svg'
import Service4 from '../assets/Service4.svg'
import Frame21 from '../assets/Frame 21.svg'
import Frame20 from '../assets/Frame 20.svg'

export default function Hero() {
    return(
    <section id="home" className="w-full bg-[#1090CB1A] border-b border-[#C7C7C7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 xl:px-20 py-20 flex flex-col-reverse md:flex-row items-center justify-between overflow-x-hidden">
        
        {/* svg */}
        <img src={Frame21} alt="shape 1" className="max-w-full absolute top-1/2 right-0 w-10 md:w-10  hidden md:block"/>
        <img src={Frame20} alt="shape 2" className="max-w-full absolute top-[370px] left-0 w-14 md:w-14 hidden md:block"/>

        

        
            { /* Left Content */ }
            <div className="max-w-2xl md:order-1">
                <h1 className="text-2xl sm:text-4xl font-semibold leading-snug">Experienced <span className="text-[#1090CB]">mobile and web </span> 
            applications and website <br /> builders measuring.</h1>

            
            
             
            <div className="absolute w-[50%] sm:w-[300px] md:w-[400px] aspect-square sm:top-[15%] sm:left-[35%] md:top-[8%] md:left-[48%] lg:top-[15%] lg:left-[55%] xl:top-[15%] xl:left-[65%] 2xl:top-[15%] 2xl:left-[65%] top-[10%] left-[25%] rounded-full -z-10 blur-[25px] bg-[radial-gradient(circle_at_center,#F3FFD9_0%,rgba(255,255,255,0)_100%)]"></div>
           
            <div className="absolute w-[50%] sm:w-[300px] md:w-[400px] aspect-square sm:top-[60%] sm:left-[15%] md:top-[30%] md:left-[2%] lg:top-[35%] lg:left-[1%] xl:top-[15%] xl:left-[0%] 2xl:top-[15%] 2xl:left-[10%] top-[60%] left-[10%] rounded-full -z-10 blur-[40px] bg-[radial-gradient(circle_at_center,#DED9FF_30%,rgba(222,217,255,0)_100%)]"></div>
           


     

            <p className="text-gray-600 mt-6 text-sm sm:text-base">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web<br />applications and website builders measuring dozens of completed projects.<br /> We build and develop mobile applications for several top platforms, <br /> including Android  & IOS. 
            </p>

            { /*Buttons */ }
             
             <div className="mt-8 flex space-x-4">
                <button className="bg-[#1090CB] text-white px-12 py-3 rounded-md hover:bg-blue-700 transition whitespace-nowrap">Contact us</button>
                <button className="border border-[#1090CB] text-[#1090CB] px-12 py-3 rounded-md hover:bg-[#1090CB] hover:text-white transition whitespace-nowrap">View more</button>
                 
            </div>
          
            
             </div>

        {/*Hero.png */}
        <div className="flex justify-center md:justify-end mb-10 md:mb-0 md:order-2 w-full">
            <motion.img src={HeroImg} alt="Hero Illustraction" className="w-full max-w-sm sm:max-w-md md:max-w-lg" animate={{ scale: [1, 1.03, 1] }}
            transition={ {duration: 2, repeat: Infinity, repeatType: "loop"}} />
            

         
      
            
        </div>
        </div>
        
        

       
     

      { /* Services */}
      <section id="services">
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-0 py-16">
            {/* Service 1 */}
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-purple-100 p-4 rounded-xl">
                    <motion.img src={Service1} alt="service 1" className="max-w-full w-10 h-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}/>
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg">Web Application</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>

            {/* Service 2 */}
           
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-green-100 p-4 rounded-xl">
                    <motion.img src={Service2} alt="service 2" className="max-w-full w-10 h-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}/>
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg">SEO</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>

            {/* Service 3 */}
            
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-blue-100 p-4 rounded-xl">
                    <motion.img src={Service3} alt="service 3" className="max-w-full w-10 h-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}/>
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg">AR/VR Solutions</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>
            {/* Service 4 */}
            
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-orange-100 p-4 rounded-xl">
                    <motion.img src={Service4} alt="service 4" className="max-w-full w-10 h-10" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')} />
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg whitespace-nowrap">Mobile Applications</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>
            </div>
             
        </div>
         
    
    </section>
    </section>


   



    );
}



