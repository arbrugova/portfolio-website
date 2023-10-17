// Importing the motion module from the "framer-motion" library
import { motion } from "framer-motion";

// Importing styles and motion utility functions
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

// Creating a Higher Order Component (HOC) called StarWrapper
const StarWrapper = (Component, idName) =>
  // This function returns the actual HOC
  function HOC() {
    // Returning a motion section with specified animation variants and initial state
    return (
      <motion.section
        variants={staggerContainer()}  // Animation variants defined by the staggerContainer function
        initial='hidden'                // Initial animation state
        whileInView='show'              // Animation state when the component is in view
        viewport={{ once: true, amount: 0.25 }}  // Specifies the animation behavior when entering the viewport
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}  // CSS classes for styling
      >
        {/* Invisible span element with a unique ID */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* Render the component passed as a prop to the StarWrapper HOC */}
        <Component />
      </motion.section>
    );
  };

// Exporting the StarWrapper HOC as the default export of this module
export default StarWrapper;
