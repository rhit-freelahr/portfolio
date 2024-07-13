import React from "react";
import gitlogo from "../images/github-mark.png"

export default function Home(props) {
  return (
    <section className='text-center bg-slate-900 pt-32 pb-8 px-5 w-full' id="home">
      <h1 className='font-nunito font-semibold text-4xl mb-10 text-white mx-auto max-w-[800px]'>
        <span className='font-bold'>Hello, I'm Hunter.</span> I'm a student at <span className='font-bold'>Rose-Hulman Institute of Technology.</span> I spend my time working on web apps with modern technologies. 
      </h1>
      <div className='flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-110 transition cursor-pointer border-black text-gray-950" href="https://github.com/Trinicle">
          GitHub
          <img src={gitlogo} className='h-5 w-5'></img>
        </a>
      </div>
    </section>
  )
}