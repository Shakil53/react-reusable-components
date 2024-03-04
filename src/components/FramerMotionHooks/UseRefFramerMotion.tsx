import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const UseRefFramerMotion = () => {
    const ref = useRef(null);

    const inView = useInView(ref, {once: true})
    return (
        <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
            <motion.div
                className='size-64 bg-indigo-500 rounded-lg flex-wrap gap-5 p-5'
                ref={ref}
                animate={
                    inView ? {opacity: 1, x: 0,transition: {delay: 0.7}}: {opacity: 0, x:-500}
                }
            >
            </motion.div>

        </div>
    );
};

export default UseRefFramerMotion;