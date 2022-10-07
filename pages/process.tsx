import Topmenu from '../components/Topmenu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image";
import soccerkick from '../assets/img/soccerkick.png'
import baseballthrow from '../assets/img/baseballthrow.png'

const Process = () => (
    <>
    <div>
      <Topmenu/>
      <div className="bg-black">
        <Navbar/>
        <h1 className="text-center text-white text-[200px] font-industrybolditalic">TRUST THE PROCESS...</h1>
        <div className="flex ml-[50px] mr-[50px]">
          <div className="w-5/12">
            <h2 className="text-white text-[150px] font-industrylight">Step 1:</h2>
            <p className="text-white font-montserratlight text-[35px] mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam</p>
          </div>
          <div className="ml-auto mt-[130px]">
            <Image
              src={baseballthrow}
              alt="Baseball throw"
              width="653px"
              height="509px"
            />
          </div>
        </div>
        <div className="flex ml-[50px] mr-[50px]">
          <div>
            <Image
              src={soccerkick}
              alt="Soccer kick"
              width="711px"
              height="506px"
            />
          </div>
          <div className="w-5/12 ml-auto mt-[-100px]">
            <h2 className="text-white text-right text-[150px] font-industrylight">Step 2:</h2>
            <p className="text-white font-montserratlight text-[35px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
  
  export default Process;