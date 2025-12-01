import React from "react";
import { motion } from "motion/react"
import facebook from '../assets/Facebook.svg'
import inster from '../assets/IG.svg'
import linkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/Twitter.svg'

const Footer = () => {
    return (
        <footer className="w-full bg-white border-gray-mt mt-10 overflow-x-hidden">
             {/* <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-8 text-center md:text-left">  */}
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-4 lg:gap-x-4 xl:gap-x-2 text-center md:text-left">
            {/* <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-4 lg:gap-x-3 xl:gap-x-2 text-center md:text-left"> */}


                <div className="flex flex-col items-center md:items-start self-start">
                    <a href="/" className="text-[#00329B] font-bold text-lg mb-2 block">LOGO</a>
                    
                    <p className="text-[#515151] text-sm">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </p>
                    <p className="text-[#515151] text-sm mt-2">@Lorem</p> 
                    
                </div>

                { /*About Us Links */}
                <div className="flex flex-col items-center md:items-start self-start">
                    <h5 className="font-semibold mb-2">About us</h5>
                    <ul className="text-[#515151] text-sm space-y-1">
                        <li>Lorem</li>
                        <li>Portfolio</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                { /* contact info */}
                <div className="flex flex-col items-center md:items-start self-start">
                    <h5 className="font-semibold mb-2">Contact us</h5>
                    <p className="text-[#515151] text-sm">Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br />industry. </p>
                    <p className="text-[#515151] text-sm mt-2">+908 89097 890</p>
                </div>

                { /* Social media */ }
               
                 <div className="flex justify-center md:justify-start gap-0 mt-6 md:mt-14 self-start"> 
                {/* <div className="md:mt-14 flex justify-center md:justify-start gap-0 max-w-7xl mx-auto px-6 self-start"> */}
                     <motion.img src={facebook} alt="facebook" className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')} /> 
                     <motion.img src={inster} alt="instergram" className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')} /> 
                     <motion.img src={twitter} alt="twitter" className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')} /> 
                    <motion.img src={linkedIn} alt="LinkedIn" className="w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}/> 
                 </div> 
            </div>

            { /*Copyright */ }
            <div className="border-t border-[#D2D2D2] text-center text-[#686868] text-sm py-4">
                Copyright ® 2021 Lorem All rights Rcerved
            </div>
        </footer>
        






       
        
    );
};


export default Footer;



