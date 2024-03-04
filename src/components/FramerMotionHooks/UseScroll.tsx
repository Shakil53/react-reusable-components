import { motion, useScroll } from "framer-motion";


const UseScroll = () => {

    const {  scrollYProgress } = useScroll();
    
    return (
        <motion.div className="h-10 w-full fixed top-0 bg-green-500"
        style={{scaleX: scrollYProgress}}
        >
            
        </motion.div>
    );
};

export default UseScroll;