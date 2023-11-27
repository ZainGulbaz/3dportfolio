import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant, fadeIn } from "../../utils/motion";
import { github } from "../../assets";
import SectionWrapper from "../../hoc/sectionwrapper";
import { projects } from "../../constants";

const Works = () => {
  const ProjectCard = (props: (typeof projects)[0] & { index: number }) => {
    return (
      <motion.div variants={fadeIn("up", "", 0.5 * props?.index, 0.5)}>
        <Tilt
          options={{
            max: 45,
            speed: 450,
            scale: 1,
          }}
          className="!bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-5 rounded-2xl sm:w-[360px] w-full mt-4 text-gray-900 h-full"
        >
          {(props?.iFrame)? <iframe src={props?.iFrame} className="object-contain rounded-2xl w-80 h-80"> </iframe>
          :<img
            src={props?.image}
            alt={props?.name}
            className="object-contain rounded-lg w-80 h-80"
          />}
          <div>
            <div className=" flex justify-between mt-4 items-center">
            <h4 className="font-bold text-secondary text-sm sm:text-lg">{props?.name}</h4>
            <a href={props?.source_code_link} target="window_blank" className="h-8 w-8 bg-gray-700 rounded-full cursor-pointer" >
              <img src={github} alt="github" 
              />
              </a>
            </div>
            <p className="font-light text-xs sm:text-sm mt-4">{props?.description}</p>

          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(0, 0, 0.1, 1)}
        className="text-secondary max-w-3xl leading-[30px] text-xs sm:text-lg mt-3"
      >
        Following projects showcase my skills. I have developed each project
        with passion and using the best code practices like oops, DRY and SOLID
        Principles. It reflects my ability solve complex problems and give
        timely deliverables. I have added link to the repositories of each
        project.
      </motion.p>

      <div className="flex flex-wrap max-w-7xl gap-4 h-full">
        {projects?.map((project, index) => (
          <ProjectCard index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(<Works />, "works");
