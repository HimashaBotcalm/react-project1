
import Beneoshop from '../assets/beneoshop.png'
import Caspio from '../assets/caspio.png'
import HyperGrid from '../assets/HyperGrid.png'
import Leotrip from '../assets/Leotrip.png'
import Star from '../assets/Star.png'
import Piechart from '../assets/Pie chart.png'


const Subscription = () => {

 return (
     
     <div>
      {/* Company Section */}
      <section className="bg-white py-10 text-center">
        <h2 className="text-lg font-medium mb-6">You will be in good Company</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <img src={Beneoshop} alt="Beneoshop" className="h-38 object-contain" />
          <img src={Caspio} alt="Caspio" className="h-38 object-contain" />
          <img src={HyperGrid} alt="HyperGrid" className="h-38 object-contain" />
          <img src={Leotrip} alt="Leotripping" className="h-38 object-contain" />
        </div>
      </section>

      {/* Subscription Section */}
      <section className="relative bg-[#E9F6FD] py-20 text-center overflow-hidden">

        <img src={Star} alt="star" className='absolute -top-8 left-5  w-16 h-16'/>

        <img src={Piechart} alt="piechart" className='absolute right-120 top-14 w-12 h-12' />
        

        <h5 className="text-[#252525] font-semibold text-2xl mb-6">
          Lorem Ipsum is simply dummy <br />text of the printing.
        </h5>
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-18 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            SUBSCRIBE
          </button>
        </div>
      </section>
    </div>






        
           
             
    );

    
    

    

}
   


export default Subscription;
