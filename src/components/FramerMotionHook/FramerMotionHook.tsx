import { motion,useAnimationControls } from "framer-motion";


const FramerMotionHook = () => {

    const controls = useAnimationControls();
    

   
    return (
        <div className="border border-red-500 size-[500px] flex flex-col justify-center">
            <button className="bg-green-500 mb-10 px-2 py-3">Forward</button>
            <motion.div className="size-64 bg-indigo-500 flex flex-wrap gap-5 justify-center items-center"
            animate={controls}
            ></motion.div>
            
        </div>
    );
};

export default FramerMotionHook;