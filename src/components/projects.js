import React from "react";
import ProjectCard from "../context/projectCard";

const projectsList = [
  {
    git: "https://github.com/rhit-freelahr/portfolio",
    title: "Portfolio",
    madeWith: ["JSLogo", "ReactLogo", "TailwindLogo"],
    description: `Developed this portfolio with React and TailwindCSS. Leveraged React's 
       component-based architecture and Tailwind CSS's utility-first approach, this portfolio achieved 
       dynamic UI functionality with minimal code duplication and custom CSS classes.`
  },
  {
    git: "https://github.com/rhit-freelahr/groceries",
    title: "Groceries App",
    madeWith: ["FirebaseLogo", "JSLogo", "ReactLogo", "RadixUILogo"],
    description: `Developed a grocery listing apps utilizing react libraries and Radix-UI.
       Users can add recipes and groceries to their feed showing necessary data.
       Utilizes states and Firebase's Firestore Database to capture important data to be displayed later.`
  },
  {
    git: "https://github.com/rhit-freelahr/simplereact",
    title: "Simple React App",
    madeWith: ["JSLogo", "ReactLogo"],
    description: `Developed a simple react app listing tasks that can be completed.
       Utilized react states and components to generate tasks and the state of the task (completed or uncompleted).`
  },
  {
    git: "https://github.com/rhit-freelahr/felon-tracker",
    title: "Felon Tracker",
    madeWith: ["MSSQLLogo", "PythonLogo", "GolangLogo", "SeleniumLogo"],
    description: `Created a felon tracking command line interface from public court cases in Indiana.
     Scraped public data using Selenium Web Driver and imported using pyodbc.
     Used Golang to provide users with a comprehensive interface providing custom error codes
     and a list of flags to view data.`
  },
  {
    git: "https://github.com/rhit-freelahr/ExpenseSplitter",
    title: "Expense Splitter",
    madeWith: ["FirebaseLogo", "JSLogo"],
    description: `Web App designed for Rose-Hulman students to split bills among members in a group.
       Users can add each other using their username and can split bill individually or select who they would
       to split the bill with. Utilized Google Pie-Chart API to display your incoming and outgoing expenses.`
  },
]

export default function Projects(props) {
  return (
    <section className="flex items-center justify-center flex-col">
      <h1 className="font-nunito font-semibold text-4xl my-10 text-center">My Projects</h1>
      {projectsList.map(project => {
        return <ProjectCard git={project.git} title={project.title} madeWith={project.madeWith} description={project.description} />
      })}
    </section>
  )
}