import { motion } from "framer-motion";

import { IoMenu as MenuSvg } from "react-icons/io5";
import { FaUser as UserSvg } from "react-icons/fa";

export default function Navbar() {
    const slideTop = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
    };
    return (
        <motion.nav variants={slideTop} className="max-w-[1440px] w-full flex justify-between items-center z-50">
            <div className="max-md:hidden text-[18px] max-w-[1440px] w-full flex justify-between items-center">
                <div className="logo">
                    <a href="#"><img src="images/logo.svg" alt="" /></a>
                </div>
                <div className="flex gap-10">
                    <a className="buttonHover link selected" href="#">Home</a>
                    <a className="buttonHover link" href="#">VIP Club</a>
                    <a className="buttonHover link" href="#">Contact us</a>
                </div>
                <div className="buttonHover h-12 w-[180px] buttonGradient rounded-full">
                    <a className="w-full h-full flex items-center justify-center font-bold" href="#">Log in / Join</a>
                </div>
            </div>
            <div className="hidden max-md:flex flex-row-reverse text-[18px] max-w-[1440px] w-full justify-between items-center">
                <div className="buttonGradient p-2 rounded-full">
                    <UserSvg />
                </div>
                <div className="logo">
                    <img src="images/logoMobile.svg" alt="logo" />
                </div>
                <div className="menu">
                    <MenuSvg size="24px" />
                </div>
            </div>
        </motion.nav>
    )
}
