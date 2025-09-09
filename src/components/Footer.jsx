import React from "react";
import facebook from '../assets/Facebook.svg'
import inster from '../assets/IG.svg'
import linkedIn from '../assets/LinkedIn.svg'
import twitter from '../assets/Twitter.svg'

const Footer = () => {
    return (
        <footer className="bg-white bordergray-t mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

                { /*Logo + Description*/ }
                <div>
                    <a href="/" className="text-[#00329B] font-bold text-lg mb-2 block">LOGO</a>
                    
                    <p className="text-[#515151] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p className="text-[#515151] text-sm mt-2">@Lorem</p> 
                    
                </div>

                { /*About Us Links */}
                <div>
                    <h5 className="font-semibold mb-2">About us</h5>
                    <ul className="text-[#515151] text-sm space-y-1">
                        <li>Lorem</li>
                        <li>Portfolio</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                { /* contact info */}
                <div>
                    <h5 className="font-semibold mb-2">Contact us</h5>
                    <p className="text-[#515151] text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p className="text-[#515151] text-sm mt-2">+908 89097 890</p>
                </div>

                { /* Social media */ }
                <div className="flex space-x-1 items-end">
                    <img src={facebook} alt="facebook" />
                    <img src={inster} alt="instergram" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedIn} alt="LinkedIn" />
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


