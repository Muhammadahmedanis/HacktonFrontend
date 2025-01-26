// import {
//     Bar,
//     BarChart,
//     CartesianGrid,
//     Legend,
//     ResponsiveContainer,
//     Tooltip,
//     XAxis,
//     YAxis,
//   } from "recharts";
  
//   const data = [
//     { year: 2002, pasture: 0.6, cropland: 1.3 },
//     { year: 2003, pasture: 0.7, cropland: 1.45 },
//     { year: 2004, pasture: 1.6, cropland: 1.4 },
//     { year: 2005, pasture: 2.3, cropland: 1.7 },
//     { year: 2006, pasture: 1.1, cropland: 1.85 },
//     { year: 2007, pasture: 2.0, cropland: 2.2 },
//     { year: 2008, pasture: 2.2, cropland: 2.6 },
//     { year: 2010, pasture: 1.4, cropland: 2.8 },
//     { year: 2011, pasture: 2.3, cropland: 2.9 },
//     { year: 2014, pasture: 1.5, cropland: 2.6 },
//     { year: 2015, pasture: 2.2, cropland: 3.2 },
//   ];
  
//   export default function OrganicLandChart() {
//     return (
//       <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow rounded-2xl">
//         <header className="mb-4">
//           <h2 className="text-2xl font-semibold">
//             Organic pasture and cropland acreage in the United States, 2002-15
//           </h2>
//           <p className="text-gray-600">Million acres</p>
//         </header>
//         <div className="h-[500px] w-full">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={data}
//               margin={{
//                 top: 20,
//                 right: 30,
//                 left: 20,
//                 bottom: 60,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
//               <XAxis
//                 dataKey="year"
//                 angle={-45}
//                 textAnchor="end"
//                 tickMargin={20}
//                 className="text-sm font-medium"
//               />
//               <YAxis
//                 className="text-sm font-medium"
//                 tickFormatter={(value) => ${value.toFixed(1)}}
//                 domain={[0, 3.5]}
//                 ticks={[0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5]}
//               />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "white",
//                   border: "1px solid #ddd",
//                   borderRadius: "8px",
//                 }}
//                 formatter={(value: number) => [${value.toFixed(2)} M acres]}
//               />
//               <Legend
//                 verticalAlign="top"
//                 height={36}
//                 formatter={(value) =>
//                   value === "pasture"
//                     ? "U.S. organic pasture (and rangeland)"
//                     : "U.S. organic cropland"
//                 }
//               />
//               <Bar
//                 dataKey="pasture"
//                 fill="rgb(34, 197, 94)"
//                 radius={[4, 4, 0, 0]}
//                 maxBarSize={50}
//               />
//               <Bar
//                 dataKey="cropland"
//                 fill="rgb(250, 204, 21)"
//                 radius={[4, 4, 0, 0]}
//                 maxBarSize={50}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         <p className="text-sm text-gray-500 mt-8">
//           Source: USDA, Economic Research Service using data from USDA accredited
//           state and private organic certifiers and USDA, National Agricultural
//           Statistics Service.
//         </p>
//       </div>
//     );
//   }