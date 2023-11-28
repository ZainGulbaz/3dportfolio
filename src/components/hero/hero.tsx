import { styles } from "../../styles";
import { motion } from "framer-motion";
import ComputerCanvas from "../canvas/computer";
import SectionWrapper from "../../hoc/sectionwrapper";
import { routes } from "../../constants";

const Hero = ({handleScroll}:{handleScroll:Function}) => {
  return (
    <section className="relative w-full mx-auto sm:mt-16 mt-8">
      <div
        className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl flex flex-row justify-center items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-[650px] violet-gradient" />
        </div>
        <div>
          <div className="font-bold text-xl sm:text-4xl flex gap-2">
            <p>Hi, I am</p> <p className="text-[#915eff] ml-2">Zain Gulbaz</p>
          </div>
          <p className="text-xs sm:text-md">
            I develop Full Stack JavaScript/TypeScript Applications
          </p>
          <p className="text-xs sm:text-md">and deploy them on Linux Servers</p>
          <div className="mt-4">
            <ComputerCanvas />
          </div>

          <div className="hidden sm:flex absolute xs:bottom-10 bottom-32 w-full flex max-w-7xl justify-around items-center">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
              onClick={()=>handleScroll(routes.about)}
              >
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-gray-200 mb-1"
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
