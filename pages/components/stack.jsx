import Technology from './technology';

export default function Stack(props) {
    const stack = [
        {
            icon: 'javascript.svg',
            color: 'bg-[#f0db4f]',
            name: 'Javascript',
            for: 'my go-to language for pretty much everything (apis/polka, frontend/nextjs)',
        },
        {
            icon: 'postgresql.svg',
            color: 'bg-[#4169E1]',
            name: 'PostgreSQL',
            for: 'my go-to SQL database software, with supabase & prisma',
        },
        {
            icon: 'rust.svg',
            color: 'bg-[#DEA584]',
            name: 'Rust',
            for: 'my go-to language for native apps, using tauri',
        },
        {
            icon: 'nextjs.svg',
            color: 'bg-[#202020]',
            name: 'NextJS',
            for: 'my go-to frontend framework, used for most all my recent web applications',
        },
    ];

    return (
        <div className='flex flex-col items-start justify-start w-full space-y-2'>
            <div className='flex flex-col items-start justify-start w-full space-y-1'>
                <div className='flex items-center space-x-2 font-bold text-4xl text-white text-opacity-80 tracking-[-0.02rem]'>
                    <img src='/icons/keyboard.svg' className='h-[40px] select-none' draggable='false' />
                    <p>Stack</p>
                </div>
                <p className='text-lg text-white text-opacity-60 leading-tight'>
                    My preferred stack of technologies for any web, mobile, desktop or discord projects right
                    now. (w/ electron and react native)
                </p>
            </div>
            <div className='flex flex-col items-start justify-start w-full space-y-2'>
                {stack.map((tech, index) => (
                    <Technology key={index} index={index} {...tech} />
                ))}
            </div>
        </div>
    );
}
