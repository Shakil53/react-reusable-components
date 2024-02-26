import { motion, useCycle } from 'framer-motion';
const useCyclehook = () => {
    const boxAnimation = [
        {x: 0, y: 0},
        {x: 100, y: 100},
        {x: -100, y: 100},
        {x: 100, y: 0},
    ]
    const [animate1, cycle] = useCycle(...boxAnimation)
    return (
        <div className='border border-red-500 size-[600px] '>
            <motion.div
                className='size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5'
                animate={animate1}
                onTap={()=> cycle()}
            ></motion.div>
        </div>
    );
};

export default useCyclehook;