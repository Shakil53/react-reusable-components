import { motion } from 'framer-motion';
import { useRef } from 'react';

const Lecture3 = () => {
    const parent = {
        hidden: { scale: 0.9, x: 0, y: 0 },
        visible: {
            x: [0,300, -300, 0 ],
            y: [2, 300, -300, 0],
            scale: 1,
            transition: {
                ease: 'linear',
                duration: 2,
                repeat: Infinity
            }
        },
        hover:{
            opacity: 1,
        },
        tap: {
            scale: 1,
            rotate: 45
        }
    }

    const parentRef = useRef(null)

    return (


        <div ref={parentRef} className='border border-red-500 size-[500px] flex justify-center items-center ml-64'>
            <motion.div
                className='size-64 bg-indigo-500 flex flex-wrap gap-5'
                variants={parent}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                drag
                dragSnapToOrigin
                dragElastic={0.7}
                dragConstraints={parentRef}
                whileDrag={{
                    scale: 1.1,
                    boxShadow: "0px 10px 10px #000"
                }}
            ></motion.div>
        </div>
    );
};

export default Lecture3;