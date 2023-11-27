import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Tech from "./components/tech/tech";
import About from "./components/about/about";
import Feedback from "./components/feedback/feedback";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import { navLinks, routes } from "./constants";
import about from "./components/about/about";


const App = () => {

  const aboutRef=useRef<HTMLDivElement>(null);
  const contactRef=useRef<HTMLDivElement>(null);
  const workRef=useRef<HTMLDivElement>(null);

  const handleScroll=(route:string)=>{
    if(route==routes.about){
      aboutRef?.current?.scrollIntoView({behavior:"smooth"})
    }
    else if(route==routes.contact)
    {
      contactRef?.current?.scrollIntoView({behavior:"smooth"})
    }
    else if(route==routes.work)
    {
      workRef?.current?.scrollIntoView({behavior:"smooth"})
    }
  }

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar handleScroll={handleScroll}/>
            <Hero/>
      </div>
      <div ref={aboutRef}>
      <About/>
      </div>
      <Experience/>
      <Tech/>
      <div ref={workRef}>
      <Works/>
      </div>
      
      <Feedback/>

      <div className="relative z-0" ref={contactRef}>
        <Contact/>
      </div>

    </div>
    
    </BrowserRouter>
  )
}

export default App;