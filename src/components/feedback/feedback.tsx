import {motion} from "framer-motion";
import { styles } from "../../styles";
import SectionWrapper from "../../hoc/sectionwrapper";
import { fadeIn,textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";


const Feedback = () => {

const TestimonialCard=({index,company,name,designation,image,testimonial}: typeof testimonials[0] & {index:number})=>(
  <motion.div variants={fadeIn("","spring",index*0.25,0.75)}
  className="bg-gray-800 mt-2 rounded-lg p-3 w-md sm:w-full"
  >
    <div className="text-xl sm:text-6xl font-bold">"</div>
    <div className="mt-2 text-sm sm:text-md max-w-md ">{testimonial}</div>

    <div className="flex justify-between ">
      <div className="flex flex-col gap-2">
        <p className="text-blue-300">@ <span className="text-white font-bold">{name}</span></p>
        <p>{designation} at {company}</p>
      </div>

      <img src={image} alt={name} className="rounded-full h-12 w-12 object-contain"/>

    </div>
        
  </motion.div>
) 
  
  return (
      <div className={`min-h-[300px] rounded-[20px] ${styles.padding} bg-[#36454F] rounded-2xl mt-12`}>
         <motion.div variants={textVariant(0.25)}>
<p className={`${styles.sectionSubText}`}>What others say</p>
<h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
         </motion.div>
      
         <div>
        {
          testimonials?.map((testimonial,index)=>(
            <TestimonialCard key={testimonial.name} index={index} {...testimonial}/>
          ))
        }
      </div>      
      </div>
  )
}

export default SectionWrapper(<Feedback/>,"feedback");