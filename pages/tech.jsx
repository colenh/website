
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';
import StackList from "./components/stack";
import Technologies from './components/technologies';
import Hardware from './components/hardware';

export default function Tech(props) {
    return (
        <>
            <Helmet>
                <title>Tech</title>
            </Helmet>

            <motion.div className='flex items-center space-x-4 font-bold text-3xl md:text-5xl text-white text-opacity-80 tracking-[-0.02rem] mb-9 mt-6' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>     
                <img src='/icons/pc.svg' className='h-[30px] md:h-[48px] select-none' draggable='false' />
                <p>Tech</p>
            </motion.div>

            <div className="flex flex-col items-start justify-start w-full space-y-10">
                <StackList />
                <Hardware />
                <Technologies />
            </div>
        </>
    );
};
