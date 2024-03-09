import React from "react"
import JSLogo from "../images/JS-logo.svg"
import RadixUILogo from "../images/radix-ui.svg"
import SeleniumLogo from "../images/selenium-svgrepo-com.svg"
import GitLogo from "../images/git-icon.svg"
import CSharpLogo from "../images/c--4.svg"
import NodeJSLogo from "../images/nodejs-icon.svg"
import AzureLogo from "../images/azure-2.svg"


const logos = {
  "JSLogo": JSLogo,
  "RadixUILogo": RadixUILogo,
  "SeleniumLogo": SeleniumLogo,
  "GitLogo": GitLogo,
  "CSharpLogo": CSharpLogo,
  "NodeJSLogo": NodeJSLogo,
  "AzureLogo": AzureLogo
}

export default function ExperienceCard(props) {
  const { title, used, description, position, time } = props
  return (
      <div className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg sm:pr-8
        hover:bg-gray-200 transition mb-8 h-full w-full">
        <div className="pt-4 pb-7 px-5 flex flex-col h-full text-start">
          <h2 className="mb-3 font-semibold text-2xl">{title}</h2>
          <h3 className="mb-3 text-md">{position}</h3>
          <ul className="gap-2 mb-3 sm:mt-auto items-center" style={{display: used ? "flex" : "none"}}>
            <p className="text-md">Used:</p>
            {used && used.map(logo => {
              return (
                <img src={logos[logo]} className='h-7'></img>
                )
            })}
          </ul>
          <p className="mb-5 whitespace-pre-line">{description}</p>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
      </div>
  )
}