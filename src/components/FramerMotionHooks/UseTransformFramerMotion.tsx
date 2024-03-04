import { motion, useDragControls } from 'framer-motion';

const UseTransformFramerMotion = () => {
    const controls = useDragControls()
    return (
        <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
            <div
                // onPointerDown={(e)=> controls.start(e)}
                onPointerDown={(e)=> controls.start(e)}
            className='w-64 h-10 bg-green-500 rounded-lg flex-wrap gap-5 p-5'
        >
        </div>
        <motion.div
                className='size-64 bg-indigo-500 rounded-lg flex-wrap gap-5 p-5'
                drag="x"
                dragControls={controls}
        >
        </motion.div>

    </div>
    );
};

export default UseTransformFramerMotion;