// import Image from "next/image";

// export default function Services() {
//   return (
//     <div className="grid grid-cols-2 bg-black h-screen p-10 space-x-10">
//       <div>
//         <h1 className="text-white text-6xl pb-4">
//           Our <br />
//           Services
//         </h1>
//         <Image
//           src="/images/shutterstock_619110737.jpg"
//           width={600}
//           height={500}
//           alt="img"
//         />
//       </div>
//       <div className="flex flex-col justify-center space-y-6">
//         <div className="flex space-x-4">
//           <div className="text-white text-3xl">01</div>
//           <div className="flex flex-col">
//             <h2 className="text-white text-2xl font-semibold">
//               Tax Preparation
//             </h2>
//             <p className="text-white">
//               We prepare everything you need for your tax return
//             </p>
//           </div>
//         </div>
//         <div className="flex space-x-4">
//           <div className="text-white text-3xl">02</div>
//           <div className="flex flex-col">
//             <h2 className="text-white text-2xl font-semibold">
//               Start-up Package
//             </h2>
//             <p className="text-white">
//               We build financial models you can pitch to investors
//             </p>
//           </div>
//         </div>
//         <div className="flex space-x-4">
//           <div className="text-white text-3xl">03</div>
//           <div className="flex flex-col">
//             <h2 className="text-white text-2xl font-semibold">
//               Wealth Management
//             </h2>
//             <p className="text-white">
//               We deliver thoughtful investment advisory services
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Services() {
  return (
    <div className="grid grid-cols-2 bg-black h-screen p-10 space-x-10 ">
      <div className="pl-5">
        <h1 className="text-white text-6xl pb-4">
          Our <br />
          Services
        </h1>
        <Image
          src="/images/shutterstock_619110737.jpg"
          width={600}
          height={500}
          alt="img"
        />
      </div>
      <div className="flex flex-col text-start py-44 space-y-10">
        <div className="flex items-start space-x-4">
          <div className="text-white text-3xl font-bold">01</div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-semibold">
              Tax Preparation
            </h2>
            <p className="text-white">
              We prepare everything you need for your tax return
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-white text-3xl font-bold">02</div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-semibold">
              Start-up Package
            </h2>
            <p className="text-white">
              We build financial models you can pitch to investors
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-white text-3xl font-bold">03</div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-semibold">
              Wealth Management
            </h2>
            <p className="text-white">
              We deliver thoughtful investment advisory services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
