import React from "react";
import HeroImg from '../assets/Hero.png'
import Service1 from '../assets/Service1.svg'
import Service2 from '../assets/Service2.svg'
import Service3 from '../assets/Service3.svg'
import Service4 from '../assets/Service4.svg'
import Frame21 from '../assets/Frame 21.svg'
import Frame20 from '../assets/Frame 20.svg'

export default function Hero() {
    return(
    <section className="w-full bg-[#1090CB1A] border-b border-gray-500">
        <div className="max-w-7xl mx-auto px-10 py-20 flex items-center justify-between">
        

        {/* svg */}
        <img src={Frame21} alt="shape 1" className="max-w-full absolute top-1/2 right-0 w-10 md:w-10 "/>

        

        
            { /* Left Content */ }
            <div className="max-w-xl">
                <h1 className="text-4xl font-bold leading-snug">Experienced{ " "}<span className="text-[#1090CB]">mobile and web</span> <br />
            applications and website <br /> builders measuring.</h1>

            <p className="text-gray-600 mt-4">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web<br />applications and website builders measuring dozens of completed projects.<br /> We build and develop mobile applications for several top platforms, <br /> including Android  & IOS. 
            </p>

            { /*Buttons */ }
            <div className="mt-8 flex space-x-4">
            <a href="#contact" className="bg-[#1090CB] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Contact us</a>
            <a href="#more" className="border border-[#1090CB] text-[#1090CB] px-6 py-3 rounded-md hover:bg-[#1090CB] hover:text-white transition">View more</a></div>
           </div>
        

        {/*Hero.png */}
        <div className="hidden md:block">
            <img src={HeroImg} alt="Hero Illustraction" className="max-w-full w-[450px] h-auto" />
        </div>
        </div>
        
        

       
     

      { /* Services */}
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-6 py-16">
            {/* Service1 */}
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-purple-100 p-4 rounded-xl">
                    <img src={Service1} alt="service 1" className="max-w-full w-10 h-10" />
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg">Web Application</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>

            {/* Service2 */}
           
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-green-100 p-4 rounded-xl">
                    <img src={Service2} alt="service 2" className="max-w-full w-10 h-10" />
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg">SEO</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>

            {/* Service3 */}
            
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-blue-100 p-4 rounded-xl">
                    <img src={Service3} alt="service 3" className="max-w-full w-10 h-10" />
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg">AR/VR Solutions</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>
            {/* Service4 */}
            
            <div className="bg-white-50 p-6 rounded-xl flex justify-between items-center ">

                {/*icon*/}
                <div className="bg-orange-100 p-4 rounded-xl">
                    <img src={Service4} alt="service 4" className="max-w-full w-10 h-10" />
                </div>
                {/*Text*/}
                <div>
                    <h3 className="font-semibold text-lg">Mobile Applications</h3>
                    <p className="text-gray-500 text-sm mt-1">Lorem Ipsum is simply</p>
                </div>
                
            </div>
            </div>
             
        </div>
         
    
    
    </section>


   



    );
}






















