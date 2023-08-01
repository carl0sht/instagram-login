import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="w-full text-white py-3 px-10 bg-blue-100">
        <h1 className="font-bold text-3xl text-blue-600 bg-white w-min px-3 rotate-3">
          Seleby
        </h1>
      </nav>
      <div className="flex flex-col justify-center items-center px-4">
        <div className="flex flex-col space-y-6 pt-20 px-5">
          <h1 className="font-bold text-3xl">
            Pengikut Gratis - Coba Layanan Uji Coba dari Seleby
          </h1>
          <p>
            Sebagai Tim Seleby, kami sedang mengembangkan layanan-layanan gratis
            baru bagi Anda untuk menguji layanan-layanan kami. Di sini kami
            mengumumkan sebuah layanan baru: Alat Pengikut Gratis dari Seleby.
            Ini adalah layanan yang benar-benar Gratis, dan Anda dapat
            menggunakannya setiap 24 jam.
          </p>
          <p>
            Kami tidak pernah meminta kata sandi atau informasi terkait lainnya.
            Oleh karena itu, penggunaannya <b>aman 100%.</b>
          </p>
        </div>
        <button className="text-base font-bold text-white bg-blue-600 rounded-lg w-full py-3 my-10 ">
          <Link to={"/login"}>Dapatkan 100 Followers</Link>
        </button>
        <div className="flex flex-col px-5">
          <p>
            <strong>Pengikut Gratis dari Seleby</strong>
          </p>

          <p>
            Apakah semakin sulit bagi Anda untuk menarik lebih banyak pengikut
            di media sosial? Apakah Anda ingin memiliki peringkat media sosial
            tertinggi agar pelanggan membeli produk Anda? Sudahkah Anda
            menggunakan media sosial selama bertahun-tahun tetapi tidak
            mendapatkan hasil yang Anda inginkan?
          </p>

          <p>
            Artinya, Anda memerlukan <strong>pengikut gratis</strong>. Kami tahu
            Anda bingung tentang bagaimana ini akan membantu Anda. Berikut
            adalah semua yang perlu Anda ketahui tentang pengikut gratis.
          </p>
        </div>
        <div className="px-5 bg-blue-100 mx-5 text-center text-2xl my-10 rounded-lg space-y-4  py-4">
          <h1 className="font-bold">Lihat Layanan Lain Kami</h1>
          <p className="text-base">
            Anda dapat menemukan banyak layanan di Seleby. Coba sekarang juga
            layanan-layanan kami yang lain!
          </p>
          <button className="text-base font-bold text-white bg-blue-600 rounded-lg w-full py-3">
            <Link to={"/login"}>Dapatkan Instagram Follower</Link>
          </button>
          <button className="text-base font-bold text-white bg-blue-600 rounded-lg w-full py-3">
            <Link to={"/login"}>Dapatkan Instagram Like</Link>
          </button>
          <button className="text-base font-bold text-white bg-blue-600 rounded-lg w-full py-3">
            <Link to={"/login"}>Dapatkan Instagram Views</Link>
          </button>
        </div>
        <div className="px-5">
          <h1 className="font-bold text-2xl">
            Manfaat Mendapatkan Pengikut Gratis
          </h1>
          <p className="text-gray-600">
            Mendapatkan pengikut gratis di media sosial merupakan cara yang
            handal dan cepat untuk menjadi terkenal. Menginvestasikan banyak
            usaha dan waktu untuk mendapatkan pengikut gratis adalah cara yang
            dapat diandalkan untuk meningkatkan reputasi bisnis dan meningkatkan
            penjualan.
          </p>
          <p>
            Memiliki banyak pengikut gratis menawarkan berbagai keuntungan bagi
            Anda. Berikut beberapa di antaranya:
          </p>
          <h1 className="text-xl font-bold">
            Anda dapat menghasilkan uang Anda bisa mendapatkan banyak uang dari
            akun media sosial Anda.
          </h1>
          <p>
            Para pengiklan selalu mencari cara untuk mencapai pasar baru.
            Memiliki lebih banyak pengikut akan menjadikan Anda seorang
            influencer.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Typography from "./assets/typography.png";
// import Meta from "./assets/meta.png";
// import { Button } from "@chakra-ui/react";

// function App() {
//   return (
//     <>
//       {/* <div className="min-h-screen flex flex-col justify-between items-center w-full">
//         <div>
//           <p className="text-gray-400">Bahasa Indonesia</p>
//         </div>
//         <div className="w-full flex flex-col justify-center items-center ">
//           <img className="max-w-xs" src={Typography} alt="" />
//           <div className="w-full flex flex-col space-y-5">
//             <h1 className="font-semibold text-xl">
//               Daftar untuk melihat <span>foto</span> dan <span>video</span> dari
//               teman Anda.
//             </h1>
//             <button className="bg-[#4CB5F9] text-white w-full rounded-md py-3 font-bold text-sm">
//               Dapatkan aplikasi Instagram
//             </button>
//             <p className="text-gray-400 text-sm">
//               <span className="text-blue-600 font-semibold">Masuk</span> atau{" "}
//               <span className="text-blue-600 font-semibold">Daftar</span>
//             </p>
//           </div>
//         </div>
//         <div>
//           <p>from</p>
//           <img className="w-20" src={Meta} alt="" />
//         </div>
//       </div> */}
//     </>
//   );
// }

// export default App;
