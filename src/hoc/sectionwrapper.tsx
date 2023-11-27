import {motion} from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";




const SectionWrapper = (component:ReactNode,section:string) => {
  section=section+"";
  return (
    function HOC(){
        return(
            <motion.section
            variants={staggerContainer(0.2,0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:true,amount:0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                {component}
            </motion.section>

        )
    }
  )
}

export default SectionWrapper;