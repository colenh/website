
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';

export default function Contact(props) {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <motion.div className='flex items-center space-x-4 font-bold text-3xl md:text-5xl text-white text-opacity-80 tracking-[-0.02rem] mb-9 mt-6' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                <img src='/icons/message.svg' className='h-[30px] md:h-[48px] select-none' draggable='false' />
                <p>Contact</p>
            </motion.div>

            <motion.ul className="text-2xl font-calibri font-normal space-y-1 text-[#E2E2E2] list-disc list-inside" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>
                <li><a target='_blank' href='https://github.com/colenh'>Github: colenh</a></li>
                <li><a target='_blank' href='https://twitter.com/colenh_'>Twitter: @colenh_</a></li>
                <li>Discord: colenh#2749 (926018902734016542)</li>
                <li>Revolt: @colenh (01FFHZ8G9XBEZXAY5MKKR15A72)</li>
                <li>Matrix (Element): @colenh:matrix.org</li>
                <li>Jabber: colenh@jabber.calyxinstitute.org</li>
                <li><a target='_blank' href='mailto:me@coleh.lol'>Email: me@coleh.lol</a></li>
            </motion.ul>
        </>
    );
};