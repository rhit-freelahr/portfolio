import React from "react";
import Rose from "../images/rose-logo.png"

export default function Education(props) {

  return (
    <div className="mb-20" id="education">
      <h1 className="font-nunito font-semibold text-4xl my-10 text-center">Education</h1>
      <div className="mt-4 flex flex-col sm:flex-row gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 font-lato">
        <div className="flex items-center justify-center">
          <img src={Rose} className="h-[10rem] w-[10rem]"></img>
        </div>
        <div className="pt-4 px-5 flex flex-col h-full text-start">
          <h2 className="font-semibold text-xl">Rose-Hulman Institute of Technology</h2>
          <h3 className="text-md">2022-2026</h3>
          <p className="text-md mb-3">GPA: 3.31/4</p>
          <ul className="list-disc pl-6">
            <li>
              Major in Computer Science
            </li>
            <li>
              Minor in Computer and Electrical Engineering
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}