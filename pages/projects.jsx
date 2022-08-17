
import Helmet from 'react-helmet';
import { motion } from 'framer-motion';
import Project from './components/project';

export default function Projects(props) {
    const projects = [
        {
            title: 'umbrecil',
            subtitle: 'landing + webapp',
            description:
                'A landing page and web application for Umbrecil, an all-in-one hiring suite. Built with React, Next.js, and TailwindCSS.',
            status: 1,
            href: 'https://umbrecil.works/',
        },
        {
            title: 'coleh.lol',
            subtitle: 'website',
            description:
                'This website! Developed with NextJS, TailwindCSS and framer-motion. Design inspired by opensource - phineas.io & kevinthomas.codes',
            status: 1,
            href: 'https://coleh.lol/',
        },
        {
            title: 'rickrolln’t',
            subtitle: 'browser extension',
            description:
                'A OSS cross-platform browser extension that redirects you when you click a rickroll. Inspired by several alternatives on the market.',
            status: 1,
            href: 'https://rickrollnt.cow.yoga/',
        },
        {
            title: 'GvR',
            subtitle: 'discord bot',
            description:
                'Assisted in bot development for a roleplay server on the Roblox platform. Closed over 20 issues in the span of a month of employment.',
            status: 1,
            href: 'https://gvrealism.com/',
        }
    ];


    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>

            <motion.div className='flex items-center space-x-4 font-bold text-3xl md:text-5xl text-white text-opacity-80 tracking-[-0.02rem] mb-6 mt-6' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                <img src='/icons/bulb.svg' className='h-[30px] md:h-[48px] select-none' draggable='false' />
                <p>Projects</p>
            </motion.div>

            <div className='flex flex-col items-start justify-start w-full space-y-4'>
                <div className='flex flex-col items-start justify-start w-full space-y-2'>
                    {projects.map((project, index) => (
                        <Project key={index} index={index} {...project} />
                    ))}
                </div>
            </div>
            
        </>
    );
};
