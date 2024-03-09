import React, { useState } from "react";
import classNames from 'classnames'

const navList = ["Home", "Projects", "Skills", "Experience", "Education", "Contact"];

export default function Header(props) {
  const [active, setActive] = useState(navList[0])

  const listNames = navList.map(name => {
    return (
      <li key={name} className='h-3/4 flex items-center justify-center relative'>
        <a className={classNames(active == name ? 'bg-white text-black' : 'text-gray-500 hover:text-gray-950', 'sm:rounded-full flex w-full items-center justify-center px-3 py-2 transition scroll-smooth')} href={`#${name.toLowerCase()}`} onClick={() => setActive(name)}>
          {name}
        </a>
      </li>
    )
  })

  return (
    <header className='z-50 relative'>
      <nav className='fixed top-0 left-1/2 w-full sm:rounded-full border border-white border-opacity-40 
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem]' style={{ transform: "translateX(-50%) translateY(0px) translateZ(0px)" }}>
        <ul className='flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:flex-nowrap sm:gap-5 sm:h-full'>
          {listNames}
        </ul>
      </nav>
    </header>
  );
}