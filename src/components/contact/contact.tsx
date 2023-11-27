import { textVariant } from "../../utils/motion";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/sectionwrapper";
import { github, hackerrank } from "../../assets";
import { linkedin } from "../../assets";
import { CiPhone } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { socialMediaLinks } from "../../constants";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <p className={`${styles.sectionSubText}`}>Want to reach out?</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>
     
      <div className="flex flex-col sm:flex-row sm:justify-around gap-4 sm:gap-2 sm:items-center ">

        <div className="text-lg font-bold mt-2 sm:mt-0">
          <div className="flex items-center text-sm sm:text-xl">
          <CiPhone  className="text-[#3B71CA]"/>
          +923364317217
          </div>
        </div>

        <div className="flex gap-2 items-center text-sm sm:text-xl">
         <SiGmail  className="text-[#DC4C64]"/>
          zaingulbaz8@gmail.com
          </div>
       
      <div className="flex gap-2 items-center"> <a href={socialMediaLinks?.github} target="_blank">
        <img src={github} alt="github" className="w-8 sm:w-16 sm:h-16 h-8 rounded-full object-contain"/>
        </a>
        <a href={socialMediaLinks?.linkedin} target="_blank">
        <img src={linkedin} alt="linkedin" className="w-7 sm:w-14 sm:h-14 h-7 rounded-full object-contain"/>
        </a>
        <a href={socialMediaLinks?.hackerrank} target="_blank">
        <img src={hackerrank} alt="hacker rank" className="w-8 sm:w-16 sm:h-16  h-8 rounded-full object-contain"/>
        </a></div>

      </div>
    </>
  );
};

export default SectionWrapper(<Contact/>,"contact");
