import '../styles/globals.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Helmet from 'react-helmet';
import Image from 'next/image';
import Link from 'next/link';
import { DesktopComputerIcon, HomeIcon, InboxIcon, LightBulbIcon, MailIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
})

function App({ Component, pageProps }) {
  return (
    <>
      <Helmet titleTemplate="%s • Cole Harris" defaultTitle="Cole Harris" />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="./favicon.svg" />
        <link rel="shortcut icon" href="./favicon.svg" />
        <meta name="title" content="Cole Harris" />
        <meta
          name="description"
          content="Cole Harris is an indie developer working on Umbrecil, an all-in-one hiring suite."
        />
        <meta
          name="keywords"
          content="cole, harris, cole harris, developer, indie"
        />
        <meta name="theme-color" content="#00000" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coleh.lol/" />
        <meta property="og:title" content="Cole Harris" />
        <meta
          property="og:description"
          content="Cole Harris is an indie developer working on Umbrecil, an all-in-one hiring suite."
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://coleh.lol/" />
        <meta property="twitter:title" content="Cole Harris" />
        <meta
          property="twitter:description"
          content="Cole Harris is an indie developer working on Umbrecil, an all-in-one hiring suite."
        />
      </Head>

      <AnimatedCursor
        innerSize={4}
        outerSize={32}
        color="149, 149, 149"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={1.5}
      />

      <div className="flex w-full flex-col overflow-x-hidden">
        <div className='select-none fixed top-0 left-0 h-screen w-16 flex flex-col bg-[#171717] shadow-lg'>
          <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-[#2e2e2e] text-white rounded-3xl shadow-lg'>
            <Image src='/icons/wave.svg' width='23px' height='28px' />
          </div>
          <hr className='bg-[#2e2e2e] border border-[#2e2e2e] rounded-full mx-2' />
          <Link href='/'>
            <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-[#2e2e2e] text-white hover:text-gray-400 hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group'>
              <HomeIcon className='h-7' />
              <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-[#2e2e2e] text-xl font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                Home
              </span>
            </div>
          </Link>
          <Link href='/projects'>
            <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-[#2e2e2e] text-white hover:text-gray-400 hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group'>
              <LightBulbIcon className='h-7' />
              <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-[#2e2e2e] text-xl font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                Projects
              </span>
            </div>
          </Link>
          <Link href='/tech'>
            <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-[#2e2e2e] text-white hover:text-gray-400 hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group'>
              <DesktopComputerIcon className='h-7' />
              <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-[#2e2e2e] text-xl font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                Tech
              </span>
            </div>
          </Link>
          <Link href='/contact'>
            <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-[#2e2e2e] text-white hover:text-gray-400 hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group'>
              <MailIcon className='h-7' />
              <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-[#2e2e2e] text-xl font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                Contact
              </span>
            </div>
          </Link>
          <Link href='/etc'>
            <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-[#2e2e2e] text-white hover:text-gray-400 hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group'>
              <QuestionMarkCircleIcon className='h-7' />
              <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-[#2e2e2e] text-xl font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                Et Cetera
              </span>
            </div>
          </Link>
        </div>

        <div className="flex h-full min-h-screen w-screen flex-col overflow-x-hidden pb-10 ml-4">
          <div className="ml-5 mt-6 mr-5 flex flex-col overflow-hidden md:ml-24 md:w-full">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
