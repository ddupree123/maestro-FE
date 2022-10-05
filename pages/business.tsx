import Topmenu from '../components/Topmenu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image";
import soccerkick from '../assets/img/soccerkick.png'
import baseballthrow from '../assets/img/baseballthrow.png'
import runningback from '../assets/img/runningback.png'

const Business = () => {
    return(
        <>
        <div>
            <Topmenu/>
            <div className="bg-black">
                <Navbar/>
                <div className="flex justify-center">
                    <div className="w-3/4">
                    <h1 className="text-center text-white text-[120px] font-industrybolditalic">Take Advantage Of NIL Influencers</h1>
                    </div>
                </div>
                <p className="text-center text-white text-[50px] font-industrylightitalic mb-[50px]">Tagline</p>
                <div className="flex ml-[125px] mr-[125px]">
                    <div className="w-7/12">
                        <p className="text-center text-white text-[60px] font-industrylight">Why You need NIL Influencer marketing</p>
                        <p className="text-left text-white text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet </p>
                    </div>
                    <div className="ml-auto">
                        <Image
                            src={baseballthrow}
                            alt="Baseball throw"
                            width="419px"
                            height="326px"
                        />
                    </div>
                </div>
                <div className="flex ml-[125px] mr-[125px]">
                    <div className="">
                        <Image
                            src={soccerkick}
                            alt="Baseball throw"
                            width="389px"
                            height="277px"
                        />
                    </div>
                    <div className="w-7/12 ml-auto mt-[100px]">
                        <p className="text-center text-white text-[60px] font-industrylight">Did you know</p>
                        <p className="text-left text-white text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet </p>
                    </div>
                </div>
                <div className="flex ml-[125px] mr-[125px]">
                    <div className="w-1/2 mt-[100px]">
                        <p className="text-center text-white text-[60px] font-industrylight ml-[-50px]">How it works</p>
                        <p className="text-left text-white text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet <br/> -ajshdka <br/> -asdkja <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="ml-auto">
                        <Image
                            src={runningback}
                            alt="Baseball throw"
                            width="512px"
                            height="488px"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-[50px] pb-[30px]">
                    <button className="w-[359px] h-[65px] bg-gray-300 font-industrybolditalic text-[25px]">CALL TO ACTION</button>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Business;