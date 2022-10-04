import logo from '../assets/img/logo-black.png'
import {IoNotificationsOutline} from 'react-icons/io5'
import {BsMailbox} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import Image from "next/image";

const Topmenu = () => {
    return(
        <nav className="bg-white">
            <ul className="flex items-center mt-[14px] mb-[14px] ml-[22px] mr-[22px]">
                <div className="mr-[22px]">
                    <Image
                        src={logo}
                        alt="Maestro"
                        width="50px"
                        height="50px"
                    />
                </div>
                <li className="mr-[22px] font-industrymedium text-[20px]"><a href="">Marketplace</a></li>
                <li className="font-industrybold text-[20px]"><a href="">Information</a></li>
                <a className="ml-auto mr-[10px]" href=""><IoNotificationsOutline size="31px"/></a>
                <a className="mr-[41px]" href=""><BsMailbox size="31px"/></a>
                <li className="font-industrymedium text-[20px] mr-[16px]"><a>John Doe</a></li>
                <a href=""><CgProfile size="31px"/></a>
            </ul>
        </nav>
    )
};

export default Topmenu;