import Beneoshop from '../assets/beneoshop.png'
import Caspio from '../assets/caspio.png'
import HyperGrid from '../assets/HyperGrid.png'
import Leotrip from '../assets/Leotrip.png'
import Star from '../assets/Star.png'
import Piechart from '../assets/Pie chart.png'
import { motion } from "motion/react"

const Subscription = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Company Section */}
      <section className="bg-white py-8 sm:py-10 md:py-14 text-center relative">

        { /* gradient */}
        {/*<div className="absolute -left-32 top-100 w-[300px] h-[300px] rounded-full bg-[#FAFFD9] blur-3xl opacity-70 -z-10"></div> 
        <div className="absolute -left-20 top-[100px] w-[300px] h-[300px] rounded-full bg-[#FAFFD9] blur-3xl opacity-70 -z-10"></div> */}
         <div className="absolute -left-20 top-12 w-70 h-70 bg-[#FAFFD9] rounded-full blur-3xl opacity-100"></div>

        <h2 className="text-lg font-medium mb-6">You will be in good Company</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-8 md:gap-12 lg:gap-20 flex-wrap">
          <img src={Beneoshop} alt="Beneoshop" className="h-40 sm:h-24 md:h-28 lg:h-32 xl:h-48 object-contain" />
          <img src={Caspio} alt="Caspio" className="h-40 sm:h-24 md:h-28 lg:h-32 xl:h-48 object-contain" />
          <img src={HyperGrid} alt="HyperGrid" className="h-40 sm:h-24 md:h-28 lg:h-32 xl:h-48 object-contain" />
          <img src={Leotrip} alt="Leotripping" className="h-40 sm:h-24 md:h-28 lg:h-32 xl:h-48 object-contain" />
        </div>
      </section>

      
      {/* Subscription Section */}
      <section id="contact" className=" bg-[#E9F6FD] py-20 text-center px-4 sm:px-6 md:px-10">

        {/*Star between sections */}
      <motion.img
        src={Star}
        alt="star"
        className="absolute left-10 top-[280px] md:top-[270px] lg:top-[290px] xl:top-[350px] -translate-y-1/2 w-12 sm:w-14 md:w-16 z-20 hidden md:block"
        animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}/>

        {/* pie chart */}
        <motion.img
          src={Piechart}
          alt="piechart"
          className="absolute right-6 w-10 h-10 top-[200px] md:top-[310px] lg:top-[330px] xl:top-[400px] md:right-[120px] lg:right-[200px] xl:right-[480px] hidden md:block"
          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <h5 className="text-[#252525] font-semibold text-2xl mb-6">
          Lorem Ipsum is simply dummy <br /> text of the printing.
        </h5>

        <div className="flex flex-row justify-center items-center gap-3 max-w-md mx-auto w-full px-4">
           <input 
           type="email" 
           placeholder="Enter your email" 
             className= "w-full sm:flex-1 md:w-96 lg:w-[400px] px-4 md:px-54 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
           /> 
          

          {/* <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition md:px-8"> */}
            {/* SUBSCRIBE */}
          {/* </button> */}
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-sm md:text-base md:px-8">
  SUBSCRIBE
</button>

        </div>
      </section>
    </div>
  )
}

export default Subscription;


















