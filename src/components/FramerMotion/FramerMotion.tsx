import {motion} from 'framer-motion'

const FramerMotion = () => {
    const initial = { rotate: 0 };
    const animate = { rotate: 360 };
    return (
        <div>
            <motion.div
                initial={initial}
                animate={animate}
                transition={{type: "spring", duration: 2}}
                className='size-64 bg-indigo-500 rounded-lg mt-11 flex justify-center items-center'></motion.div>
        </div>
    );
};

export default FramerMotion;