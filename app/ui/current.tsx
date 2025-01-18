// "use client"
// import { useData } from "./dataContext"
// import { weather } from "./interfaces"
// import dataApi from "../api"

// export default function Today() {
//     const { data } = useData()
//     const imgUrl = `${dataApi().baseUrl}img/w/${data?.weather[0].icon}.png`
//     console.log(data)
//     return <div className="flex flex-col">
//         <>
//             <p className="text-center font-extralight text-5xl my-5">{data?.name}</p>
//         </>

//         <>
//             <img
//                 src={imgUrl}
//                 alt="new"
//                 className="self-center size-20" />
//             <p className="self-center">
//                 {data?.weather[0].description}
//             </p>
//         </>

//         <p className="text-center text-2xl font-bold mt-10">{data?.main.temp}°C</p>
//         <p className="text-center text-base text-2xl font-thin mt-2">Real Feel {data?.main.feels_like}°</p>

//     </div>
// }