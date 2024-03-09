import React from "react";

export default function Header(props) {
  const navList = ["Home", "Projects", "Skills", "Experience", "Education", "Contact"];

  const listNames = navList.map(name => {
    return (
      <li key={name} className='h-3/4 flex items-center justify-center relative'>
        <a className='bg-white sm:rounded-full flex w-full items-center justify-center px-3 py-2
        hover:text-gray-950 transition dark:hover:text-gray-300 text-gray-950 dark:text-white' href="#home">
          {name}
          {/* Make button show when you are that section, text should be gray when it is not that section*/}
        </a>
      </li>
    )
  })

  return (
    <header className='z-50 relative'>
      <nav className='fixed top-0 left-1/2 h-[4.5rem] w-full sm:rounded-full border border-white border-opacity-40 
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
        dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75' style={{ transform: "translateX(-50%) translateY(0px) translateZ(0px)" }}>
        <ul className='flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:flex-nowrap sm:gap-5 h-full'>
          {listNames}
        </ul>
      </nav>
    </header>
  );
}