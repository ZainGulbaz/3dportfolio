import { styles } from "../../styles";
import { experiences } from "../../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../../hoc/sectionwrapper";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
};

const Experience = () => {
  const ExperienceCard = ({experience }: ExperienceCardProps) => {
    return (
      <VerticalTimelineElement
      contentStyle={{background:"#1d1836",color:"#fff"}}
      contentArrowStyle={{borderRight:"7px solid #232631"}}
      date={experience?.date}
      iconStyle={{background:experience?.iconBg}}
      icon={<div>
        <img src={experience?.icon} alt={experience?.title}
        className="object-contain"
        />
      </div>}
      >
        <h6 className="text-sm sm:text-xl font-bold !leading-[0px]">{experience?.title}</h6>
        <p className="text-xs sm:!text-xs">{experience?.company_name}</p>
        <div className="mt-4">
        {experience?.points?.map((point,index)=>(
          <li key={index}>{point}</li>
        ))}
        </div>
       

      </VerticalTimelineElement>
    )
  };

  return (
    <div>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>What have I done so far?</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>
      <div className="flex flex-col mt-20 self-start">
        <VerticalTimeline>
          {experiences?.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(<Experience />, "experience");
