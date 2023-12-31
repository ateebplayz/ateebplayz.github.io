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
interface InterestsProps {
  name: string,
  desc: string
}
const InterestComponent: React.FC<InterestsProps> = ({name, desc}) => {
  return (
    <div className="flex-2 w-5/12 md:w-5/6 bg-tertiary border-2 rounded m-4 border-specialColor p-4 flex flex-col">
      <h1 className="text-specialColor text-4xl font-mainFontB md:text-center">{name}</h1>
      <h1 className="text-textPrimary text-lg font-mainFontB md:text-center">{desc}</h1>
    </div>
  )
}
const Interests: InterestsProps[] = [
  {
    name: 'Frontend Website Development',
    desc: "My Web Development journey was quite long. Beginning from simple Wordpress websites all the way up to fully complicated ThreeJS Websites. For some reason my first ever website was for my sister... And my most complicated one too. Though as soon I touched React.JS, it took a place in my heart."
  },
  {
    name: 'Backend Development',
    desc: "There was just something about API's and Library's that struck me hard. I just loved working with them and I loved solving different errors. Though I still hate getting rate-limited for my API Keys >:("
  },
  {
    name: 'Discord Bot Development',
    desc: "I know this isnt a HUGE interest or anything of the sort I mentioned before, but it's the thing that got me in Programming, and well, as they say 'Small things make Great Things'. (I don't know who says that)"
  },
  {
    name: 'Robotics',
    desc: "Ever since a workshop at my school, I've developed a certain interests in robotics. I did many experimental projects via Arduino and Rasberry Pi and presented them at my school's annual school year. It was incredibly challenging for me but I seemed to enjoy it."
  },
  {
    name: 'Hacking',
    desc: "I'm not the kind of hacker that you've seen in the matrix. I dont spam keys expecting to log into an FBI Agent's computer. I'm talking about Wi-FI Spoofing and Bluetooth Hacking which I learnt while using Black Arch & Kali Linux."
  },
  {
    name: 'Declamations',
    desc: "Now hear my out. I know many people hate speeches and such, but it gives me a sense of peace. It's like I'm learning to approach new people by talking infront of a whole crowd and explaining concepts to them that even I don't fully understand. (Just Kidding.)"
  },
  {
    name: 'Googling...',
    desc: "Googling... What else can I say?"
  },
  {
    name: 'Reading Books',
    desc: 'Kind of a book worm. Read Moby Dick(like every other person who claims to read). But seriously, give me credit for reading the entire Wimpy Kid Series.'
  },
  {
    name: 'Leading',
    desc: "I love leadership. I love to guide people and have incredible qualities. In fact, I was head of the student council at my school after just 2 months of joining my school. Yeah, big flex."
  },
  {
    name: 'Gaming',
    desc: "I mean, you expected this eh? Who doesn't play games? I play Fortni- I mean Call Of Duty, Valorant, Minecraft & other games."
  },
  {
    name: 'Tech',
    desc: "I'm basically that guy you know that you go to for advice whenever you wanna buy a new laptop or pc or mobile or anything tech related honestly, I have every gpu memorized from NVIDIA, AMD & *cough* Intel",
  }
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
        {socials.discord ? <button onClick={() => {window.open(socials.discord || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoDiscordAlt size={32} color='#C4A48F'/></button> : null}
        {socials.instagram ? <button onClick={() => {window.open(socials.instagram || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoInstagram size={32} color='#C4A48F'/></button> : null}
        {socials.github ? <button onClick={() => {window.open(socials.github || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoGithub size={32} color='#C4A48F'/></button> : null}
        {socials.website ? <button onClick={() => {window.open(socials.website || '')}} className="bg-secondary border-2 border-specialColor w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLinkAlt size={32} color='#C4A48F'/></button> : null}
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
  {
    name: 'RickyGPT',
    desc: "A WIP ChatGPT-Arduino Robot Integration",
    skills: [
      { skill: 'Node.JS', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { skill: 'MongoDB', link: 'https://en.wikipedia.org/wiki/MongoDB' },
      { skill: 'Express.JS', link: 'https://en.wikipedia.org/wiki/Express.js' },
      { skill: 'Arduino', link: 'https://en.wikipedia.org/wiki/Arduino' },
    ],
    socials: {
      discord: null,
      instagram: null,
      website: null,
      github: 'https://github.com/GrabYourServices/RickyGPT',
    }
  },
]
export default function Home() {
  return (
    <div className="transition bg-primary duration-500 ease-in-out flex flex-row md:flex-col">
      <div className="flex bg-primary h-screen md:min-h-screen py-10 sticky items-center justify-center w-4/12 md:w-full">
        <div className='flex bg-secondary h-5/6 md:min-h-screen md:mt-12 md:px-4 shadow-2xl fixed md:ml-8 md:mr-8 md:relative items-center justify-center flex-col w-3/12 md:w-full border-2 border-tertiary rounded-lg'>
          <img src='https://ateebplayz-github-io.pages.dev/assets/me.jpg' width={160} height={160} alt="My Pic" className="rounded-full border-specialColor border-4 p-1"></img>
          <p className="font-mainFontB text-textPrimary mt-4 text-3xl">Ateeb Sohail</p>
          <p className="font-mainFont text-textPrimary text-xl">Full-Stack Web Developer</p>
          <div className="transition duration-500 ease-in-out flex flex-row mt-4 w-full flex-wrap justify-center items-center">
            {skills.map((item, index) => (
            <SkillComponent key={index} skill={item.skill} link={item.link} />
          ))}
          </div>
          <div className="transition duration-500 ease-in-out flex flex-row mt-2 w-full flex-wrap justify-center items-center">
            <button onClick={() => {window.open('https://www.facebook.com/profile.php?id=100009886090408')}} className="bg-tertiary w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoFacebook size={32} color='#C4A48F'/></button>
            <button onClick={() => {window.open('https://www.instagram.com/ateebthepro/ ')}} className="bg-tertiary w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoInstagram size={32} color='#C4A48F'/></button>
            <button onClick={() => {window.open('https://discordapp.com/users/820535075178938368')}} className="bg-tertiary w-12 rounded-lg h-12 flex flex-row flex-wrap justify-center items-center transition bg-primary duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer m-1.5"><BiLogoDiscordAlt size={32} color='#C4A48F'/></button>
          </div>
        </div>
      </div>
      <div className="flex bg-primary min-h-screen flex-col w-9/12 md:w-full">
        <div>
          <div className="flex bg-transparent items-center md:justify-center flex-row mt-20 md:mt-12  ">
              <p className="text-specialColor text-5xl fixed font-mainFontB bg-black pr-2 ml-2 pl-2 absolute md:relative md:text-center">About Me</p>
              <div className="w-full bg-specialColor mr-8 md:hidden" style={{height:'4px', borderRadius:'9999px'}}></div>
          </div>
          <div className="flex mt-12 flex-row justify-center items-stretch md:items-center md:mt-0 flex-wrap md:flex-col">
            <div className="flex-2 w-11/12 md:w-5/6 bg-tertiary border-2 rounded m-4 border-specialColor p-4 flex flex-col">
              <h1 className="text-specialColor text-4xl font-mainFontB md:text-center">A Kid, watching as the world kills itself.</h1>
              <h1 className="text-textPrimary text-lg font-mainFontB md:text-center">Yo, I'm Ateeb. Or whatever you know me by. Before you call me "emo" because of the subheading, I honestly think that the world's killing itself cause... pollution and some stuff. Also I'm a huge Veronica Roth fan.<br/>When I was 9 years old. I met "Ashish" on Minecraft. Now, I was a literal child, however Ashish soon became my mentor. He introduced me to programming. He told me about Modpacks in Minecraft, I didn't like it, so I chose discord bots instead.<br/>However, my first ever project was a website I made for my sister in plain HTML/CSS. It was like your friendly pizzarias trash website made just by typing text. Nothing more, nothing less.<br/>I met many people along the way, like a friend Brittany, who encouraged me to push forward and persue programming. Skybird2333, who became my mentor after I lost touch with Ashish. He taught me different strategies and made me an actually good Programmer(He also forced me to use Typescript, which I hated. But I use it everyday now. So shoutout to skybird2333). I also met Jamikin, another friend who encouraged me and pushed me forward. I also met some incredible people in person.<br/>All these people made me who I'm today and I'm grateful for all of them. Right now, I'm 15 and know how to work in a lot of languages with ease. Well, now if you look down, you'll see my projects and my interests. So enjoy, and have a good life!</h1>
            </div>
          </div>
        </div>
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
        <div>
          <div className="flex bg-transparent items-center md:justify-center flex-row mt-20 md:mt-12  ">
              <p className="text-specialColor text-5xl fixed font-mainFontB bg-black pr-2 ml-2 pl-2 absolute md:relative md:text-center">Interests</p>
              <div className="w-full bg-specialColor mr-8 md:hidden" style={{height:'4px', borderRadius:'9999px'}}></div>
          </div>
          <div className="flex mt-12 flex-row justify-center items-stretch md:items-center md:mt-0 flex-wrap md:flex-col">
            {Interests.map((interest, index) => (
              <InterestComponent name={interest.name} desc={interest.desc} key={index}/>
            ))}
          </div>
        </div>
          <div className="flex mt-4 flex-row justify-center items-stretch md:items-center md:mt-0 flex-wrap md:flex-col">
            <div className="flex-2 w-11/12 md:w-5/6 bg-tertiary border-2 rounded m-4 border-specialColor p-4 flex flex-col">
              <h1 className="text-textPrimary text-lg font-mainFontB md:text-center">Made this myself. Pretty cool innit? No copyright. Get in touch via <a className="text-specialColor" href="https://instagram.com/ateebthepro">Instagram</a> or <a className="text-specialColor" href="https://discord.com/users/820535075178938368">Discord</a>. I dont use facebook, so you'll get ghosted.</h1>
            </div>
          </div>
      </div>
    </div>
  )
}
