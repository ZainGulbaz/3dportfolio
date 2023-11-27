import { Tilt } from "react-tilt";
import { styles } from "../../styles";
import {motion} from "framer-motion";
import { services } from "../../constants";
import { fadeIn,textVariant } from "../../utils/motion";
import SectionWrapper from "../../hoc/sectionwrapper";


const About = () => {
  const ServiceCard=({title,icon,index}:typeof services[0] & {index:number})=>{

    return(
      <Tilt className="w-[250px]">
        <motion.div
        variants={fadeIn("right","spring",0.5 * index,0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center">

            <img src={icon} alt={title} className="w-16 h-16"/>
            <h5 className="font-semibold">{title}</h5>

          </div>

        </motion.div>

      </Tilt>
    )
      
  }
  
  return (
    <div className="p-2">
    <motion.div  variants={textVariant(0.1)}>
      <p className={styles.sectionSubText}>Intorduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-sm sm:text-lg max-w-3xl leading-[30px]"
    >
      I am a skilled software engineer with expertise in full stack javascript/typescript development. I can not only develop a web app but also deploy it on linux based servers. My tech stack includes React, Node, NEST JS, Next JS,Tailwind CSS, Chakra UI, Maria DB ,Java Server Pages and Flask. I also have good understanding of blockchain technology. I am comitted to give best services to my clients.

    </motion.p>

    <div className="flex flex-wrap gap-4 max-w-xl mt-4">
      {
        services?.map((service,index)=><ServiceCard index={index} {...service}/>)
      }
    </div>
    
    </div>
  )
}

export default  SectionWrapper(<About/>,"about");