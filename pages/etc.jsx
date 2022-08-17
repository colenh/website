
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';
import { parseUser } from '../utils/parseUser';

export default function etcetera(props) {
    return (
        <>
            <Helmet>
                <title>Et Cetera</title>
            </Helmet>

            <motion.div className='flex items-center space-x-4 font-bold text-3xl md:text-5xl text-white text-opacity-80 tracking-[-0.02rem] mb-9 mt-6' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                <img src='/icons/question.svg' className='h-[30px] md:h-[48px] select-none' draggable='false' />
                <p>Et Cetera</p>
            </motion.div>

            <motion.ul className="text-2xl font-calibri font-normal space-y-1 text-[#E2E2E2] list-disc list-inside" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>
                <li>The source code for this website is available @ <a target='_blank' href='https://github.com/colenh/website'>colenh/website</a></li>
                <li>I love FOSS (Free and Open-source software), as well as privacy based services. </li>
                <li>I absolutely love <a target='_blank' href='https://startpage.com'>Startpage</a>, and definitely recommend them.</li>
                <li>I use the cow.yoga domain as a catch-all email address for a few services, and for some self-hosting projects.</li>
                {/* <li>My resume is located <a target='_blank' href='/resume.pdf'>here</a>.</li> */}
                { props.user ? <li>Appears you used the test OAuth endpoint on this website, which was made by code from <a href="https://alistair.blog">alistair's blog</a> and your user is {props.user.username}#{props.user.discriminator}.</li> : null}
            </motion.ul>
        </>
    );
};

export const getServerSideProps = async function (ctx) {
    const user = parseUser(ctx);
    return { props: { user } };
};