// 'use client'
// import Link from "next/link"
// const links = [
//     { name: 'Home', href: '/' },
//     { name: 'Hourly', href: '/forecasts/hourly' },
//     { name: 'Daily', href: '/forecasts/daily' },
//     { name: 'Today', href: '/forecasts/current' }
// ]

// export default function NavLinks() {
//     return (
//         <div className="flex">
//             {links.map((link) => {
//                 return (
//                     <div key={link.name} className="border-b-4 hover:border-orange-300 transition ease-in duration-400 hover:scale-105  mx-10 text-xl">
//                         <Link
//                             key={link.name}
//                             href={link.href}
//                         >
//                             <p className="text-center font-bold p-2"> {link.name}</p>
//                         </Link>
//                     </div>
//                 );
//             })}
//         </div>

//     )

// }