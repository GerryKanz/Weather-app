// import React from "react"
// import WeatherDataProvider from "./dataContext"
// import Logo from "./logo"
// import Search from "./search"
// import NavLinks from "./nav_links"
// import { useWeatherData } from "./dataContext"

// export default function Body({
//     children,
// }:
//     { children: React.ReactNode }) {
//     const data = useWeatherData
//     console.log(data)
//     return <body className={`antialiased bg-[url('./src/assets/pexels-skitterphoto-3768.jpg')] bg-cover`}>
//         <WeatherDataProvider>
//             <div className='mt-5 flex flex-row justify-between'>
//                 <Logo />
//                 <Search />
//             </div>
//             <div className="flex justify-center mt-5">
//                 <div className="flex flex-row">
//                     <NavLinks />
//                 </div>
//             </div>
//             {children}
//         </WeatherDataProvider>
//     </body>
// }