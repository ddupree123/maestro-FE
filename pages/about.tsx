import Topmenu from '../components/Topmenu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from "next/image"
import Tower from '../assets/img/tower.png'
import Flag from '../assets/img/flag.png'

const About = () => {
    return(
        <>
        <div>
            <Topmenu/>
            <div className="bg-black">
                <Navbar/>
                <h1 className="text-center text-white text-[200px] font-industrybolditalic">OUR JOURNEY</h1> 
                <div className="flex ml-[117px]">
                    <div className="w-1/2">
                        <p className="text-left font-montserratlight text-white text-[35px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam</p>
                    </div>
                    <div className="ml-auto">
                        <div className="ml-[270px] mb-[-75px]">
                            <Image className=""
                                src={Flag}
                                alt="Maestro Flag"
                                width="190px"
                                height="190px"
                            />
                        </div>
                        <div>
                            <Image
                                src={Tower}
                                alt="Maestro Tower"
                                width="818px"
                                height="718px"
                            /> 
                        </div>
                    </div>
                </div>  
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default About;