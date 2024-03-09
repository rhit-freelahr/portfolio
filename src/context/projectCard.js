import React from "react"
import gitLogo from "../images/github-mark.png"
import ReactLogo from "../images/React-logo.svg"
import JSLogo from "../images/JS-logo.svg"
import FirebaseLogo from "../images/firebase-1.svg"
import RadixUILogo from "../images/radix-ui.svg"
import GolangLogo from "../images/golang-1.svg"
import PythonLogo from "../images/python-5.svg"
import SeleniumLogo from "../images/selenium-svgrepo-com.svg"
import MSSQLLogo from "../images/microsoft-sql-server-1.svg"
import TailwindLogo from "../images/tailwind-css-2.svg"

const logos = {
  "ReactLogo": ReactLogo,
  "JSLogo": JSLogo,
  "FirebaseLogo": FirebaseLogo,
  "RadixUILogo": RadixUILogo,
  "GolangLogo": GolangLogo,
  "PythonLogo": PythonLogo,
  "SeleniumLogo": SeleniumLogo,
  "MSSQLLogo": MSSQLLogo,
  "TailwindLogo": TailwindLogo
}

export default function ProjectCard(props) {
  const { git, title, madeWith, description } = props
  return (
      <div className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg sm:pr-8
        hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mb-8 h-full">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
          <h2 className="mb-3 font-semibold text-2xl">{title}</h2>
          <ul className="flex gap-2 mb-3 sm:mt-auto items-center">
            <p className="font-semibold">Made with:</p>
            {madeWith.map(logo => {
              return (
                <img src={logos[logo]} className='h-7'></img>
                )
            })}
          </ul>
          <p className="mb-5">{description}</p>
          <div className='flex flex-row items-center gap-2 text-medium'>
            <a className="bg-gray-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105
              active:scale-105 transition cursor-pointer border-black border-[1px] text-gray-950" href={git}>
              GitHub
              <img src={gitLogo} className='h-5 w-5'></img>
            </a>
          </div>
        </div>
      </div>
  )
}