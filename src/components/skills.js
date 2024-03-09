import React from "react";
import ReactLogo from "../images/React-logo.svg"
import JSLogo from "../images/JS-logo.svg"
import FirebaseLogo from "../images/firebase-1.svg"
import RadixUILogo from "../images/radix-ui.svg"
import GolangLogo from "../images/golang-1.svg"
import PythonLogo from "../images/python-5.svg"
import SeleniumLogo from "../images/selenium-svgrepo-com.svg"
import MSSQLLogo from "../images/microsoft-sql-server-1.svg"
import TailwindLogo from "../images/tailwind-css-2.svg"
import MongoDBLogo from "../images/mongodb-icon-1.svg"
import HTMLLogo from "../images/html-1.svg"
import CSSLogo from "../images/css-3.svg"
import CSharpLogo from "../images/c--4.svg"
import MatlabLogo from "../images/matlab.svg"
import LinuxLogo from "../images/linux-tux.svg"
import GitLogo from "../images/git-icon.svg"
import BootstrapLogo from "../images/bootstrap-5-1.svg"
import NodeJSLogo from "../images/nodejs-icon.svg"
import ExpressLogo from "../images/express-109.svg"
import JavaLogo from "../images/java-14.svg"
import CLogo from "../images/c-1.svg"

const skillsList = [
  {
    logo: JSLogo,
    name: "JavaScript"
  },
  {
    logo: NodeJSLogo,
    name: "Node.JS"
  },
  {
    logo: ReactLogo,
    name: "React"
  },
  {
    logo: ExpressLogo,
    name: "Express"
  },
  {
    logo: SeleniumLogo,
    name: "Selenium"
  },
  {
    logo: PythonLogo,
    name: "Python"
  },
  {
    logo: JavaLogo,
    name: "Java"
  },
  {
    logo: HTMLLogo,
    name: "HTML"
  },
  {
    logo: CSSLogo,
    name: "CSS"
  },
  {
    logo: CSharpLogo,
    name: "C#"
  },
  {
    logo: CLogo,
    name: "C"
  },
  {
    logo: GolangLogo,
    name: "Go"
  },
  {
    logo: MSSQLLogo,
    name: "MSSQL"
  },
  {
    logo: MongoDBLogo,
    name: "MongoDB"
  },
  {
    logo: FirebaseLogo,
    name: "Firebase"
  },
  {
    logo: RadixUILogo,
    name: "RadixUI"
  },
  {
    logo: TailwindLogo,
    name: "TailwindCSS"
  },
  {
    logo: BootstrapLogo,
    name: "Bootstrap"
  },
  {
    logo: MatlabLogo,
    name: "Matlab"
  },
  {
    logo: LinuxLogo,
    name: "Linux"
  },
  {
    logo: GitLogo,
    name: "Git"
  },
]

export default function Skills(props) {
  return (
    <div className="w-full mb-40">
      <h1 className="font-nunito font-semibold text-4xl my-10 text-center">My Skills</h1>
      <ul className="flex flex-wrap text-center items-center justify-center gap-2 mx-auto max-w-[850px]">
        {skillsList.map(skill => {
          return (
            <li className="flex flex-col items-center px-4 py-3 dark:text-white/80">
              <img src={skill.logo} className='h-16'></img>
              <span>{skill.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}