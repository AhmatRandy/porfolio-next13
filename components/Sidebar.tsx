import React from "react";

export default function Sidebar() {
  const name = "<AhmatRandy/>";
  return (
    <div>
      <div></div>
      <h3>
        <span className="text-green">{name}</span>
      </h3>
      <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-base my-3 rounded-full ">
        Front end Engineer
      </p>

      <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 text-base my-3 rounded-full ">
        Download Resume
      </p>

      <div>
        {/* <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
         <AiFillYoutube className="w-8 h-8 cursor-pointer" />
       </a>
       <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
         <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
       </a>
       <a href="https://www.instagram.com/_sumax__/">
         <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
       </a> */}
      </div>

      <div>
        <div></div>
        <p></p>
        <p> </p>
      </div>

      <button

      // onClick={() => window.open("mailto:code.sumax@gmail.com")}
      >
        Email me
      </button>
      <button
      //  onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
