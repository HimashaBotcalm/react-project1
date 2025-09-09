import React from "react";
import bell from '../assets/Bell.png'

const Card = () => {
    return (
        <section className="flex justify-center gap-8 p-10 pt-28">
            { /* gray card */}
            <div className="max-w-sm bg-gray-100 rounded-2xl p-8 text-center shadow">
                <h3 className="text-xl font-bold mb-4">Lorem Ipsum is simply <br /> dummy text.</h3>
                <p className="text-gray-600 mb-6 text-sm">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                <button className="bg-[#1090CB] hover:bg-sky-600 text-white px-5 py-2 rounded-md">View More</button>
            </div>


            { /* Blue card */ }
            <div className="relative max-w-sm bg-[#1090CB] text-white rounded-2xl p-8 text-center shadow">

                { /* Bell Icon */}
                <img src={bell} alt="bell icon" className="absolute -top-10 -right-0 w-20 h-20 rotate-4"/>

                <h3 className="text-white-xl font-bold mb-4">Lorem Ipsum is simply <br /> dummy text.</h3>
                    <p className="mb-6 text-sm">KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
                <button className="bg-white text-sky-500 hover:bg-gray-100 px-5 py-2 rounded-md">View More</button>
            
                


            </div>
        </section>
    )
}


export default Card;