import React from "react";
import ExperienceCard from "../context/experienceCard";

const experienceList = [
  {
    title: "Tooling Solutions",
    position: "Intern & Engineering Assistant",
    description: `- Refined, sorted, and inspected shipments of milling tools from various companies
    - Organized previous system used to stockpile assorted milling tools for ease of access`,
    time: "August 2020 - November 2021"
  },
  {
    title: "Parkers’ Restaurant & Bar",
    position: "Busser",
    description: `- Helped new employees with building time management skills
    - Performed cleaning duties to ensure the restaurants high quality`,
    time: "June 2021 - August 2021"
  },
  {
    title: "Rose-Hulman Ventures",
    position: "Quality Assurance Intern",
    used: ["CSharpLogo", "SeleniumLogo", "NodeJSLogo", "GitLogo", "AzureLogo"],
    description: `- Developed test cases in C# using Node.js, Selenium WebDriver, and Azure DevOps
    - Developed destructive test cases using abnormal variables to find failures in code
    - Refactored past test cases using guaranteed and assumed variables reducing the runtime by half
    - Suggested alterations and approved pull requests via GitHub`,
    time: "January 2023 - May 2023"
  },
  {
    title: "Phoenix Irrigation Supply",
    position: "Delivery Driver",
    description: `- Delivered packages to various locations
    - Shortened delivery times by adjusting commmon routes`,
    time: "June 2022 - Present"
  },
  {
    title: "Teachers Assistant",
    position: "Data Structures and Algorithms TA",
    description: `- Provided students with assistance for in class activities and homework
    - Graded and gave feedback on assignments to help students in need`,
    time: "November 2023 - Present"
  },
]

export default function Experience(props) {
  return (
      <div className="w-full mb-20" id="experience">
        <h1 className="font-nunito font-semibold text-4xl my-10 text-center">Experience</h1>
        <ul className="flex flex-wrap text-center items-center justify-center gap-2 mx-auto flex-col font-lato">
          {experienceList.map(experience => {
            return <ExperienceCard title={experience.title} used={experience.used} description={experience.description} position={experience.position} time={experience.time}/>
          })}
        </ul>
    </div>
  )
}