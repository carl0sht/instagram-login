import React from "react";
import Logo from "./assets/typography.png";
import Facebook from "./assets/facebook.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center space-y-4 py-6">
      <img src={Logo} alt="" className="w-44" />

      <div className="w-full flex flex-col gap-3 max-w-xs">
        <input
          type="text"
          className="w-full border-2 bg-[#FAFAFA] text-xs py-3 rounded-sm px-3 outline-none"
          placeholder="Nomor telepon, nama pengguna, atau email"
        />
        <input
          type="password"
          placeholder="Kata Sandi"
          className="w-full border-2 bg-[#FAFAFA] text-xs py-3 rounded-sm px-3 outline-none"
        />
        <button className="bg-[#4CB5F9] text-white font-semibold py-2.5 rounded-xl">
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
