import BallCanvas from "../canvas/ball";
import { technologies } from "../../constants";
import SectionWrapper from "../../hoc/sectionwrapper";

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row">
    {technologies?.map((technology,index)=>(
      <div className="w-44 h-44"> 
      <BallCanvas icon={technology?.icon} key={index}/>
      </div>
      ))}
    </div> 
  )
}

export default SectionWrapper(<Tech/>,"tech");