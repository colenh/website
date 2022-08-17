// deps
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { motion } from 'framer-motion';
import { useLanyard } from 'react-use-lanyard';
import { LocationMarkerIcon, CloudIcon, ClockIcon, DesktopComputerIcon, MusicNoteIcon } from '@heroicons/react/solid';

// extend dayjs properties
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)
dayjs.extend(relativeTime)

function Home(props) {
  // time
  const [time, setTime] = useState(dayjs.tz(new Date(), 'America/New_York'));
  useEffect(() => { const refreshTime = setInterval(() => { setTime(dayjs.tz(new Date(), 'America/New_York')); }, 1000); return () => { clearInterval(refreshTime); }; }, []);

  // lanyard
  const { loading, status, websocket } = useLanyard({
    userId: '450228764857597954',
    socket: true,
  });

  const activity = status?.activities.filter((activity) => activity.type === 0)[0];
  const spotify = status?.listening_to_spotify ? status.spotify : null;
  const location = status?.kv.location || 'somewhere in the world';

  // age
  const BIRTH = new Date('August 22, 2007 07:00:00');
  const YEAR_MILLIS = 31556952000;
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  // experience
  const learned = new Date('2015-01-01');
  const experience = useMemo(() => Math.floor((Date.now() - learned.getTime()) / YEAR_MILLIS), []);
  const isLate = dayjs().endOf('day').diff(dayjs(), 'hours') <= 0;

  // render site
  return (
    <>
      <motion.div className='flex items-center space-x-4 font-bold text-3xl md:text-5xl text-white text-opacity-80 tracking-[-0.02rem] mb-6 mt-6' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
        <p>Hiya!</p>
        <img src='/icons/wave.svg' className='h-[30px] md:h-[48px] select-none animate-wave' draggable='false' />
        <p>I’m <Tooltip arrow title='Cole Nathaniel Harris'>Cole</Tooltip>.</p>
      </motion.div>

      <motion.p className='text-2xl font-calibri font-normal mb-6 text-[#E2E2E2]' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>
        I'm Cole Harris, a <Tooltip arrow title={'August 22nd, 2007'} {...props}>{age}</Tooltip> year old student, full-stack developer, and aspiring tech entrepreneur. <br />
        I have over {experience} years of experience in the development world, starting with HTML as young as 7 years old.<br />
        I spend most of my time learning and practicing new technology.
      </motion.p>

      <motion.p className='text-2xl font-calibri font-normal mb-6 text-[#E2E2E2]' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1 }}>
        Currently, I'm the founder and a developer at <Link href='https://umbrecil.works'><a className='umbrecil text-[#9CCA87]'>Umbrecil</a></Link>. <br />
        Umbrecil is the all-in-one hiring suite made for you and your company. <br />
        We give your company all of the necessary tools to provide the best possible hiring experience to both your employees, and your HR department.
      </motion.p>

      <motion.div className='flex flex-col items-start justify-start space-y-1' initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3 }} >
        <div className='flex flex-row items-center justify-start space-x-2'>
          <LocationMarkerIcon className='w-[22.5px] text-[#e2e2e2]' />
          {location === 'West Virginia, US' ? <Tooltip arrow title='i hate it here'><a href={`https://search.alistair.sh/?q=!maps+${location}`} className='text-2xl text-white text-opacity-90'>{location}</a></Tooltip> : <a href={`https://search.alistair.sh/?q=!maps+${location}`} className='text-2xl text-white text-opacity-90'>{location}</a>}
        </div>

        <div className='flex flex-row items-center justify-start space-x-2'>
          <CloudIcon className='w-[22.5px] text-[#e2e2e2]' />
          {Math.ceil(props.weather.main.feels_like) < '30' ? <Tooltip arrow title='lil chilly out must i say'><a href={`https://search.alistair.sh/?q=weather+in+${location}`} className='text-2xl text-white text-opacity-90'>Feels like {Math.ceil(props.weather.main.feels_like)}°F ({props.weather.weather[0].main})</a></Tooltip> : <a href={`https://search.alistair.sh/?q=weather+in+${location}`} className='text-2xl text-white text-opacity-90'>Feels like {Math.ceil(props.weather.main.feels_like)}°F ({props.weather.weather[0].main})</a>}
        </div>

        <div className='flex flex-row items-center justify-start space-x-2'>
          <ClockIcon className='w-[22.5px] text-[#e2e2e2]' />

          {isLate ? 
          <Tooltip arrow title='lil late init'>
            <a href={`https://search.alistair.sh/?q=time+in+${location}`} className='text-2xl text-white text-opacity-90'>
              {time.format('MMMM Do YYYY')} • {time.format('h:mm:ss a')}
            </a>
          </Tooltip> : <a href={`https://search.alistair.sh/?q=time+in+${location}`} className='text-2xl text-white text-opacity-90'>{time.format('MMMM Do YYYY')} • {time.format('h:mm:ss a')}</a>}
          </div>

        {spotify ? (
            <div className='flex flex-row items-center justify-start space-x-2'>
              <MusicNoteIcon className='w-[22.5px] text-[#e2e2e2]' />
              <a href={`https://open.spotify.com/track/${spotify.track_id}`} className='text-2xl text-white text-opacity-90'>
                Listening to {spotify.song} • {spotify.artist}
              </a>
            </div>
          ) : null}

          {activity ? (
            <div className='flex flex-row items-center justify-start space-x-2'>
              <DesktopComputerIcon className='w-[22.5px] text-[#e2e2e2]' />
              {activity.details ? <p className='text-2xl text-white text-opacity-90'>{activity.name} • {activity.details}</p> : <p className='text-2xl text-white text-opacity-90'>{activity.name}</p>}
            </div>
          ) : null}
      </motion.div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${process.env.OPENWEATHER_LOCATION}&appid=${process.env.OPENWEATHER_API_KEY}&units=imperial`
  );

  const lanyard = await axios.get(
    'https://api.lanyard.rest/v1/users/450228764857597954'
  );

  return {
    props: {
      weather: weather.data,
      lanyard: lanyard.data,
    },
  };
}


export default Home;