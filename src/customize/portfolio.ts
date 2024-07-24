import { Section, Content } from "./interfaces";

export const intro = {
     portfolioName: "Shami Tomita-Rodriguez",
     blurb: "I'm a software engineer! I'm a Googler and I pushed this from my main branch! Even though my Github Pages deploys from my prod branch!"
}

/** Project Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. project1) 
 *  below as well as include your addition in the projectSection. 
 */
const project1:Content = {
    name: "Project 1",
    image: "./assets/images/project.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

const project2:Content = {
    name: "Project 2",
    image: "./assets/images/project.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

const project3:Content = {
    name: "Project 3",
    image: "./assets/images/project.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

export const projectSection:Section = {
    name: "Projects",
    display: true,
    content: [
        project1,
        project2,
        project3
        //Add more here
    ]
}

/** Experience Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. experience1) 
 *  below as well as include your addition in the experienceSection. 
 */

const experience1:Content = {
    name: "Job #1",
    image: "./assets/images/exp.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

const experience2:Content = {
    name: "Job #1",
    image: "./assets/images/exp.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

const experience3:Content = {
    name: "Job #1",
    image: "./assets/images/exp.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

export const experienceSection:Section = {
    name: "Experience",
    display: true,
    content: [
        experience1,
        experience2,
        experience3
    ]
}

/** Writing Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. writing1) 
 *  below as well as include your addition in the writingSection. 
 */

const writing1:Content = {
    name: "Blog Post #1",
    image: "./assets/images/writing.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

const writing2:Content = {
    name: "Blog Post #2",
    image: "./assets/images/writing.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

const writing3:Content = {
    name: "Blog Post #3",
    image: "./assets/images/writing.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

export const writingSection:Section = {
    name: "Experience",
    display: true,
    content: [
        writing1,
        writing2,
        writing3
    ]
}
