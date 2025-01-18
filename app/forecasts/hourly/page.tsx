// import Image from "next/image";
// import Logo from '@/app/ui/logo';
// import Search from '@/app/ui/search'
import Today from '@/app/ui/today';


export default function Home(): JSX.Element {
    return (
        <>
            <div className='text-white mt-10 w-full h-80 flex flex-row'>
                <div className='bg-slate-400 w-1/4 rounded-md gap-x-4 mx-5'>
                    <Today />
                </div>
                <div className='bg-blue-950 w-full h-full rounded-md mx-5'>
                    <p>Hey hey</p>
                </div>
            </div>
        </>
    );
}
