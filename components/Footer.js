import logo from '../assets/img/logo-white.png'
import {FaInstagram, FaTiktok, FaTwitter, FaYoutube} from 'react-icons/fa'
import Image from "next/image";

const Footer = () => {
    return(
        <div className="bg-black pt-[35px]">
            <nav className="flex ml-[80px] mr-[80px]">
                <div>
                    <div className="ml-[-8px] mb-4">
                        <Image
                            src={logo}
                            alt="Maestro"
                            width="50px"
                            height="50px"
                        />
                    </div>
                    <p className="text-white font-industrybold text-[20px]">Address</p>
                    <p className="text-white font-industrymedium text-[20px] mb-[24px]">1234 Seattle road, Seattle</p>
                    <p className="text-white font-industrybold text-[20px]">Contact</p>
                    <p className="text-white industrymedium text-[20px]">303 555 5555</p>
                    <p className="text-white industrymedium text-[20px] mb-[24px]">Maestrosupport@maestro.com</p>
                    <div className="flex flex-row gap-3">
                        <a href=""><FaInstagram color="white" size="20px"/></a>
                        <a href=""><FaTiktok color="white" size="20px"/></a>
                        <a href=""><FaTwitter color="white" size="20px"/></a>
                        <a href=""><FaYoutube color="white" size="20px"/></a>
                    </div>
                </div>
                <div className="ml-auto pt-6">
                    <p className="text-white font-industrybold text-[20px] mb-[21px]">Support</p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] mb-[21px] hover:text-white"><a href="">Contact us</a></p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] mb-[21px] hover:text-white"><a href="">FAQs</a></p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] mb-[21px] hover:text-white"><a href="">Become a member</a></p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] hover:text-white"><a href="">Join as a business</a></p>
                </div>
                <div className="ml-[100px] pt-6">
                    <p className="text-white font-industrybold text-[20px] mb-[21px]">About</p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] mb-[21px] hover:text-white"><a href="">About us</a></p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] mb-[21px] hover:text-white"><a href="">Careers</a></p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] mb-[21px] hover:text-white"><a href="">Investors</a></p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] mb-[21px] hover:text-white"><a href="">News</a></p>
                    <p className="text-[#c9c9c9] font-industrymedium text-[15px] hover:text-white"><a href="">Testimonials</a></p>
                </div>
            </nav>
            <div className="w-screen h-1 bg-white mt-[61px]"></div>
            <div className="flex ml-[80px] mr-[50px] pt-[50px] pb-[50px] text-[12px]">
                <p className="text-white font-industrymedium">2020, all rights reserved</p>
                <p className="ml-auto mr-[35px] text-white font-industrymedium"><a href="">Privacy Policy</a></p>
                <p className="text-white font-industrymedium"><a href="">Terms of service</a></p>
            </div>
        </div>
    )
}

export default Footer;