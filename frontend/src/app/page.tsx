'use client'
import Image from "next/image"
import Me from '../assets/me.jpg'
import { BiLinkAlt, BiLogoDiscordAlt, BiLogoFacebook, BiLogoGithub, BiLogoInstagram } from 'react-icons/bi'
import React from "react"

interface SkillComponentProps {
  skill: string,
  link: string,
}
const SkillComponent: React.FC<SkillComponentProps> = ({ skill, link }) => {
  return (
    <div onClick={() => { window.open(link) }} className="py-1 px-2 w-max rounded bg-specialColor transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer mx-1.5 my-1.5">
      <p className="text-xs font-Inter font-bold">{skill}</p>
     </div>
  )
}

const skills = [
  { skill: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' },
  { skill: 'CSS', link: 'https://en.wikipedia.org/wiki/CSS' },
  { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
  { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
  { skill: 'Python', link: 'https://en.wikipedia.org/wiki/Python_(programming_language)' },
  { skill: 'Java', link: 'https://en.wikipedia.org/wiki/Java_(programming_language)' },
  { skill: 'Kotlin', link: 'https://en.wikipedia.org/wiki/Kotlin_(programming_language)' },
  { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
  { skill: 'React.JS', link: 'https://en.wikipedia.org/wiki/React_(software)' },
  { skill: 'React Native', link: 'https://en.wikipedia.org/wiki/React_Native' },
  { skill: 'Next.JS', link: 'https://en.wikipedia.org/wiki/Next.js' },
  { skill: 'MongoDB', link: 'https://en.wikipedia.org/wiki/MongoDB' },
  { skill: 'Express.JS', link: 'https://en.wikipedia.org/wiki/Express.js' },
  { skill: 'Socket.IO', link: 'https://en.wikipedia.org/wiki/Socket.IO' },
  { skill: 'Discord.JS', link: 'https://discord.js.org/' },
  { skill: 'Arduino', link: 'https://en.wikipedia.org/wiki/Arduino' },
  { skill: 'Minecraft Server', link: 'https://en.wikipedia.org/wiki/Minecraft_server' },
]
interface ProjectsProps {
  name: string,
  desc: string,
  skills: SkillComponentProps[]
  socials: {
    discord: string | null,
    instagram: string | null,
    website: string | null,
    github: string | null,
  }
}
const ProjectComponent: React.FC<ProjectsProps> = ({name, desc, skills, socials}) => {
  return (
    <div className="flex-2 w-5/12 md:w-5/6 bg-tertiary border-2 rounded m-4 border-specialColor p-4 flex flex-col">
      <h1 className="text-specialColor text-4xl font-mainFontB md:text-center">{name}</h1>
      <h1 className="text-textPrimary text-lg font-mainFontB md:text-center">{desc}</h1>
      <div className="transition duration-500 ease-in-out flex mt-4 w-full flex-wrap justify-start items-center md:justify-center">
        {skills.map((item, index) => (
          <SkillComponent key={index} skill={item.skill} link={item.link} />  
        ))}
      </div>
      <div className="transition duration-500 ease-in-out flex flex-row mt-2 w-full flex-wrap justify-start items-center md:justify-center">
        {socials.discord ? <button onClick={() => {window.open(socials.discord || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoDiscordAlt size={32} color='#d1fff6'/></button> : null}
        {socials.instagram ? <button onClick={() => {window.open(socials.instagram || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoInstagram size={32} color='#d1fff6'/></button> : null}
        {socials.github ? <button onClick={() => {window.open(socials.github || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoGithub size={32} color='#d1fff6'/></button> : null}
        {socials.website ? <button onClick={() => {window.open(socials.website || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLinkAlt size={32} color='#d1fff6'/></button> : null}
      </div>
    </div>
  )
}
const Projects: ProjectsProps[] = [
  {
    name: 'Disminer',
    desc: 'A minecrafty Discord Economy Bot',
    skills: [
      { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'MongoDB', link: 'https://en.wikipedia.org/wiki/MongoDB' },
      { skill: 'Discord.JS', link: 'https://discord.js.org/' },
    ],
    socials: {
      discord: 'https://discord.gg/pY4JFSJaYQ',
      instagram: null,
      website: null,
      github: null,
    }
  },
  {
    name: 'BetHero',
    desc: 'An opensource indie game on web. NOT OWNED by me',
    skills: [
      { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'MongoDB', link: 'https://en.wikipedia.org/wiki/MongoDB' },
      { skill: 'Express.JS', link: 'https://en.wikipedia.org/wiki/Express.js' },
    ],
    socials: {
      discord: 'https://discord.gg/yKS7avGKUs',
      instagram: null,
      website: 'http://34.123.156.207/',
      github: 'https://github.com/BetHero-pro/',
    }
  },
  {
    name: 'Ordered Chaos Website',
    desc: 'An incomplete website for a clothing company.',
    skills: [
      { skill: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' },
      { skill: 'CSS', link: 'https://en.wikipedia.org/wiki/CSS' },
      { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'React.JS', link: 'https://en.wikipedia.org/wiki/React_(software)' },
      { skill: 'Next.JS', link: 'https://en.wikipedia.org/wiki/Next.js' },
      { skill: 'MongoDB', link: 'https://en.wikipedia.org/wiki/MongoDB' },
      { skill: 'Express.JS', link: 'https://en.wikipedia.org/wiki/Express.js' },
    ],
    socials: {
      discord: null,
      instagram: 'https://www.instagram.com/orderedchaos_oc/',
      website: 'https://ordered-chaos-oc-website.pages.dev/',
      github: 'https://github.com/ateebplayz/Ordered-Chaos-OC-website',
    }
  },
  {
    name: 'My Portfolio',
    desc: "The page you're seeing right now.",
    skills: [
      { skill: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' },
      { skill: 'CSS', link: 'https://en.wikipedia.org/wiki/CSS' },
      { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'React.JS', link: 'https://en.wikipedia.org/wiki/React_(software)' },
      { skill: 'Next.JS', link: 'https://en.wikipedia.org/wiki/Next.js' },
    ],
    socials: {
      discord: 'https://discordapp.com/users/820535075178938368',
      instagram: 'https://www.instagram.com/ateebthepro/',
      website: 'https://ateebplayz.github.io/',
      github: 'https://github.com/ateebplayz/ateebplayz.github.io',
    }
  },
  {
    name: 'Grab Your Services Site',
    desc: "My company's website.",
    skills: [
      { skill: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' },
      { skill: 'CSS', link: 'https://en.wikipedia.org/wiki/CSS' },
      { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'React.JS', link: 'https://en.wikipedia.org/wiki/React_(software)' },
      { skill: 'Next.JS', link: 'https://en.wikipedia.org/wiki/Next.js' },
    ],
    socials: {
      discord: 'https://discord.gg/WEqBV8t577',
      instagram: 'https://www.instagram.com/grabyourservices/',
      website: 'https://grabyourservices.com/',
      github: 'https://github.com/GrabYourServices/GYS_Site',
    }
  },
  {
    name: 'Hidden Earth',
    desc: "A Towny Minecraft Server ran by me.",
    skills: [
      { skill: 'Minecraft Server', link: 'https://en.wikipedia.org/wiki/Minecraft_server' },
    ],
    socials: {
      discord: 'https://discord.gg/hiddenearth',
      instagram: null,
      website: 'https://hiddenearth.xyz/',
      github: null,
    }
  },
  {
    name: 'Muscat Bullion',
    desc: "A website that displays live gold rates, via Meta Trader V",
    skills: [
      { skill: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' },
      { skill: 'CSS', link: 'https://en.wikipedia.org/wiki/CSS' },
      { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
      { skill: 'Python', link: 'https://en.wikipedia.org/wiki/Python_(programming_language)' },
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'React.JS', link: 'https://en.wikipedia.org/wiki/React_(software)' },
      { skill: 'Next.JS', link: 'https://en.wikipedia.org/wiki/Next.js' },
      { skill: 'MongoDB', link: 'https://en.wikipedia.org/wiki/MongoDB' },
      { skill: 'Express.JS', link: 'https://en.wikipedia.org/wiki/Express.js' },
    ],
    socials: {
      discord: null,
      instagram: null,
      website: 'https://muscatbullion.com/prices',
      github: null,
    }
  },
  {
    name: 'Nyaru Dashboard',
    desc: "A WIP Discord dashboard for the famous nyaru bot.",
    skills: [
      { skill: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' },
      { skill: 'CSS', link: 'https://en.wikipedia.org/wiki/CSS' },
      { skill: 'Javascript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { skill: 'Typescript', link: 'https://en.wikipedia.org/wiki/TypeScript' },
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'React.JS', link: 'https://en.wikipedia.org/wiki/React_(software)' },
      { skill: 'Next.JS', link: 'https://en.wikipedia.org/wiki/Next.js' },
      { skill: 'MongoDB', link: 'https://en.wikipedia.org/wiki/MongoDB' },
      { skill: 'Express.JS', link: 'https://en.wikipedia.org/wiki/Express.js' },
      { skill: 'Discord.JS', link: 'https://discord.js.org/' },
    ],
    socials: {
      discord: 'https://discord.gg/nyaru',
      instagram: null,
      website: null,
      github: null,
    }
  },
]
export default function Home() {
  return (
    <div className="transition bg-primary duration-500 ease-in-out flex flex-row md:flex-col">
      <div className="flex bg-primary h-screen md:min-h-screen py-10 sticky items-center justify-center w-4/12 md:w-full">
        <div className='flex bg-secondary h-5/6 md:min-h-screen md:mt-12 md:px-4 shadow-2xl fixed md:ml-8 md:mr-8 md:relative items-center justify-center flex-col w-3/12 md:w-full border-2 border-tertiary rounded-lg'>
          <Image src='https://ateebplayz-github-io.pages.dev/assets/me.jpg' width={160} height={160} alt="My Pic" className="rounded-full border-specialColor border-4 p-1"></Image>
          <p className="font-mainFontB text-textPrimary mt-4 text-3xl">Ateeb Sohail</p>
          <p className="font-mainFont text-textPrimary text-xl">Full-Stack Web Developer</p>
          <div className="transition duration-500 ease-in-out flex flex-row mt-4 w-full flex-wrap justify-center items-center">
            {skills.map((item, index) => (
            <SkillComponent key={index} skill={item.skill} link={item.link} />
          ))}
          </div>
          <div className="transition duration-500 ease-in-out flex flex-row mt-2 w-full flex-wrap justify-center items-center">
            <button onClick={() => {window.open('https://www.facebook.com/profile.php?id=100009886090408')}} className="bg-tertiary w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoFacebook size={32} color='#d1fff6'/></button>
            <button onClick={() => {window.open('https://www.instagram.com/ateebthepro/ ')}} className="bg-tertiary w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoInstagram size={32} color='#d1fff6'/></button>
            <button onClick={() => {window.open('https://discordapp.com/users/820535075178938368')}} className="bg-tertiary w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoDiscordAlt size={32} color='#d1fff6'/></button>
          </div>
        </div>
      </div>
      <div className="flex bg-primary min-h-screen flex-col w-9/12 md:w-full">
        <div>
          <div className="flex bg-transparent items-center md:justify-center flex-row mt-20 md:mt-12  ">
              <p className="text-specialColor text-5xl fixed font-mainFontB bg-black pr-2 ml-2 pl-2 absolute md:relative md:text-center">Projects</p>
              <div className="w-full bg-specialColor mr-8 md:hidden" style={{height:'4px', borderRadius:'9999px'}}></div>
          </div>
          <div className="flex mt-12 flex-row justify-center items-stretch md:items-center md:mt-0 flex-wrap md:flex-col">
            {Projects.map((project, index) => (
              <ProjectComponent name={project.name} desc={project.desc} skills={project.skills} socials={project.socials} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
