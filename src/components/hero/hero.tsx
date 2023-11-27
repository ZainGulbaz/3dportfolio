import { styles } from "../../styles";
import { motion } from "framer-motion";
import ComputerCanvas from "../canvas/computer";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto sm:mt-16 mt-8">
        <div
          className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 h-40 sm:h-80 violet-gradient" />
          </div>
          <div>
            <div className="font-bold text-xl sm:text-4xl flex gap-2">
              <p>Hi, I am</p> <p className="text-[#915eff] ml-2">Zain Gulbaz</p>
            </div>
            <p className="text-xs sm:text-md">I develop Full Stack JavaScript/TypeScript Applications</p>
            <p className="text-xs sm:text-md">and deploy them on Linux Servers</p>
             <div className="mt-4">
             <ComputerCanvas/>
              </div> 
          </div>
        </div>       
    </section>
  );
};

export default Hero;
