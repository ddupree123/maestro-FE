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
        <div className="flex">
          <div className="ml-[50px]">
            <h2 className="text-white text-[150px] font-industrylight">Step 1:</h2>
            <p className="text-white font-light text-[35px] mb-[40px] w-7/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam</p>
            <div className="w-auto">
              <Image
                src={soccerkick}
                alt="Soccer kick"
                width="711px"
                height="506px"
              />
            </div>
          </div>
          <div className="mr-[50px] ml-[-200px]">
            <div className="w-auto pt-[130px] ml-[-180px] mb-[70px]">
              <Image
                src={baseballthrow}
                alt="Baseball throw"
                width="653px"
                height="509px"
              />
            </div>
            <h2 className="text-white text-[150px] font-industrylight">Step 2:</h2>
            <p className="text-white font-light text-[35px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
  
  export default Process;