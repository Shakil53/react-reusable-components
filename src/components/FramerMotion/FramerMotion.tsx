import {motion} from 'framer-motion'

const FramerMotion = () => {
  

    const parent = {
        hidden : { opacity: 0, scale: 0.9 },
        visible : { opacity: 1, scale: 1 },
    }

    const child = {
        hidden : { opacity: 0, scale: 0.1 },
        visible : { opacity: 1, scale: 1 },
    }

    return (
        <div>
            <motion.div
                variants={parent}
                initial= "hidden"
                animate= "visible"
                transition={{
                    ease: 'easeInOut', duration: 1.5, delayChildren:0.5,
                staggerChildren: 0.5}}
                className='size-64 flex flex-wrap gap-5 p-3 bg-indigo-500 rounded-lg justify-center items-center mt-11'>
                
                <motion.div className='size-20 bg-cyan-500 rounded-lg'
                    variants={child}
                   
                ></motion.div>
                <motion.div className='size-20 bg-cyan-500 rounded-lg'
                variants={child}
               ></motion.div>
                <motion.div className='size-20 bg-cyan-500 rounded-lg'
                variants={child}
                ></motion.div>
                <motion.div className='size-20 bg-cyan-500 rounded-lg'
                variants={child}
                ></motion.div>
                </motion.div>
        </div>
    );
};

export default FramerMotion;