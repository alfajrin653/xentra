import { div } from "framer-motion/client";
import Back from "./Back";

const Section = ({ children }) => {
    return (
      <div className="pt-20 bg-primary">
        <Back /> 
      <section className="bg-primary text-white min-h-screen flex flex-col lg:flex-row items-center justify-center pt-0 pb-20">
        {children}
      </section>
      </div>
    );
  };

  
  export default Section