import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hardware(props) {
    return (
        <div className='flex flex-col items-start justify-start w-full space-y-10'>
            <div className='flex flex-col items-start justify-start w-full space-y-1'>
                <div className='flex items-center space-x-2 font-bold text-4xl text-white text-opacity-80 tracking-[-0.02rem]'>
                    <img src='/icons/laptop.svg' className='h-[40px] select-none' draggable='false' />
                    <p>Hardware</p>
                </div>
                <p className='text-lg text-white text-opacity-60 leading-tight'>
                    The hardware I use daily to build and ship my projects.
                </p>
            </div>
            <motion.ul className='text-2xl font-calibri font-normal space-y-2 text-[#E2E2E2] list-disc list-inside' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>
                UNDER CONSTRUCTION WHILE I UPGRADE MY PC SETUP
                {/* <li>
                    Custom PC
                    <ul className='list-disc list-inside ml-8'>
                        <li>CPU: AMD Ryzen 5 3600X 3.8 GHz 6-Core</li>
                        <li>GPU: Gigabyte GeForce GTX 1650 G6 4 GB WINDFORCE OC</li>
                        <li>Monitor: LG 29WK600-W (29”)</li>
                        <li>Memory: Crucial Ballistix 16 GB (2 x 8 GB) DDR4-3600 CL16</li>
                        <li>Disk #1: Western Digital WD_BLACK SN750 500 GB M.2-2280 NVME SSD</li>
                        <li>Disk #2: Seagate Firecuda 2TB SSHD</li>
                    </ul>
                </li>
                <li>Laptop: HP 14-DK0002DX Notebook</li>
                <li>Keyboard: Keychron K8 Non-Backlight Wireless Mechanical Keyboard with Drop GMK White-on-Black Custom Keycaps</li>
                <li>Mouse: Logitech MX Master 3</li>
                <li>Headphones: JBL Live 460 ANC</li>
                <li>Webcam: Logitech C920x HD Pro</li>
                <li>Microphone: Fifine K670B</li>
                <li>VR: Oculus Quest 2</li> */}
            </motion.ul>
        </div>
    );
}