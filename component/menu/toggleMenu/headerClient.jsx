// Menu che compare /scompare al click

// "use client";

// import Link from "next/link";
// import dynamic from "next/dynamic";

// const ToggleMenu = dynamic(() => import("./toggleMenu"), { ssr: false });

// export default function HeaderClient({ headerData }) {
//   return (
//     <header className="container py-10 flex space-x-10 md:space-x-0 justify-between items-center">
//       <Link href="/">
//         <div className="cursor-pointer">
//           <h1 className="text-white leading-none text-32 font-bold">
//             {headerData.primary.nome_sito}
//           </h1>
//           <h2 className="text-white text-15 font-normal">
//             {headerData.primary.payoff}
//           </h2>
//         </div>
//       </Link>
//       <nav className="flex justify-center items-center">
//         <ToggleMenu nav={headerData.primary.menu} />
//       </nav>
//     </header>
//   );
// }
