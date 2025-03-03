import { motion } from "framer-motion";
import Navbar from "./../components/Navbar/Navbar.jsx";

import backgroundImage from "/images/bg.svg";
import dollerImg from "/images/doller.svg";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
};

const slideLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
};

const slideRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
};

export default function Home() {
    return (
        <motion.div
            className="relative max-2xl:px-10 text-[20px] w-full flex flex-col items-center h-full overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Navbar />
            <motion.div className="max-sm:gap-8 max-sm:max-w-[40rem] text-center max-w-[1440px] flex max-lg:gap-10 max-lg:flex-col justify-between items-center w-full py-10 mt-20 z-10">
                <motion.div className="relative max-lg:gap-4 flex flex-col max-sm:gap-3 gap-10 max-sm:w-full w-[640px]" variants={slideLeft}>
                    <div className="glow top-10 left-65 w-0 h-0"></div>
                    <motion.h1 className="max-sm:text-[32px] max-lg:text-[48px] max-lg:leading-14 text-[64px] font-bold max-sm:leading-10 leading-20" variants={fadeIn}>
                        Master Crypto,<br /> Achieve Zen
                    </motion.h1>
                    <motion.p className="text-[24px] max-lg:text-[20px] font-light text-[#d9d9d9] leading-8" variants={fadeIn}>
                        Take control of your crypto future with proven insights and sustainable strategies.
                    </motion.p>
                    <motion.div className="flex max-md:flex-col max-md:items-center justify-between font-bold" variants={fadeIn}>
                        <div className="buttonHover h-[60px] w-[287px] cursor-pointer backdrop-blur-sm hover:bg-[#1ad061]/20 text-white font-bold p-2 rounded-full border border-[#1ad061] shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                            <span className="selected flex justify-center items-center h-full w-full">Free and VIP access</span>
                        </div>
                        <p className="flex justify-center items-center text-yellow-300 h-[60px] w-[295px] p-2">Time-Limited Discount! 🙂</p>
                    </motion.div>
                </motion.div>
                <motion.div className="flex flex-col justify-around items-center boxBorderGradient w-[360px] h-[190px] rounded-4xl bg-white/10 backdrop-blur-lg outline-1 outline-[#1ad061]" variants={slideRight}>
                    <div className="flex justify-center items-center gap-2">
                        <div className="max-lg:w-12"><img src={dollerImg} alt="img" /></div>
                        <div className="flex flex-col justify-center gap-1 item text-sm">
                            <p>Level Up Your Crypto Game with CryptoZen!</p>
                            <p className="text-[16px] text-yellow-300">$10M+ in Profits Generated</p>
                        </div>
                    </div>
                    <div className="buttonHover bg-white text-black font-bold text-[20px] w-[85%] h-[48px] rounded-full">
                        <a className="w-full h-full flex justify-center items-center" href="#">Join to VIP Club</a>
                    </div>
                </motion.div>
            </motion.div>
            <div>
                <img className="absolute max-lg:scale-150 max-sm:scale-250 max-sm:-bottom-30 -bottom-10 max-sm:-left-60 max-lg:-left-20 left-0 w-screen h-screen" src={backgroundImage} alt="background" />
            </div>
        </motion.div>
    );
}
