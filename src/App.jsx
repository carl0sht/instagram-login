import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Typography from "./assets/typography.png";
import Meta from "./assets/meta.png";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between items-center w-full">
        <div>
          <p className="text-gray-400">Bahasa Indonesia</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <img className="max-w-xs" src={Typography} alt="" />
          <div className="w-full flex flex-col space-y-5">
            <h1 className="font-semibold text-xl">
              Daftar untuk melihat <span>foto</span> dan <span>video</span> dari
              teman Anda.
            </h1>
            <button className="bg-[#4CB5F9] text-white w-full rounded-md py-3 font-bold text-sm">
              Dapatkan aplikasi Instagram
            </button>
            <p className="text-gray-400 text-sm">
              <span className="text-blue-600 font-semibold">Masuk</span> atau{" "}
              <span className="text-blue-600 font-semibold">Daftar</span>
            </p>
          </div>
        </div>
        <div>
          <p>from</p>
          <img className="w-20" src={Meta} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
