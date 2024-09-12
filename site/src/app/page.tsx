// pages/index.js
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill, RiHtml5Line } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import Image from "next/image";
import devdave from "../public/profile.jpeg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import logo from "../public/logo.svg";
import Typewriter from "@/components/Typewriter";
import FallingSquares from "@/components/FallingSquares";
import ButtonGroup from "@/components/ButtonGroup";
export default function Home() {
  return (
    <div>
      <main>
        <section className="min-h-screen">
          <FallingSquares />
          <nav className="py-10 mb-6 mx-10 flex justify-between">
            <Image height={36} src={logo} alt="logo" />
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-5">
            <Typewriter />
            <p className="text-md py-5 leading-8 text-gray-200 md:text-xl max-w-xl mx-auto">
              Welcome to my site. please feel free to message me about site
              improvements or opportunities.
            </p>
            <div className="text-5xl flex justify-center gap-10 py-3 my-1 text-gray-300">
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
          </div>
        </section>
        <section>
          <section className="my-5 flex-col justify-between p-5">
            <div className="text-center shadow-lg p-10 rounded-xl my-5">
              <h2 className="text-3xl font-semibold mb-5">My Journey</h2>
              <div className="timeline">
                <div className="timeline-item mb-3 border-b-2 py-5">
                  <h3 className="text-2xl font-medium">
                    Early Work Experience
                  </h3>
                  <p>
                    I dropped out of school at 16 to start working in various
                    low-skilled jobs. I fitted windows and made black pudding to
                    name a few.
                  </p>
                </div>
              </div>
              <div className="timeline-item mb-3 border-b-2 py-5">
                <h3 className="text-2xl font-medium">Education & Training</h3>
                <p>
                  I returned to education where I studied mechanics, achieving
                  City and Guilds Level 4. I then worked as a self-employed
                  mechanic for a while before becoming a quality inspector.
                </p>
              </div>
              <div className="timeline-item mb-3 border-b-2 py-5">
                <h3 className="text-2xl font-medium">Career Transition</h3>
                <p>
                  I Started learning to code during COVID-19. I attended and
                  passed a government-run bootcamp. I&apos;m currently building
                  projects while seeking a role in tech.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center bg-gradient-to-b from-teal-500 p-10">
            <ul className="list-none ml-5 text-4xl">
              <li className="flex flex-row justify-around bg-green-500 py-2 mb-5 rounded-full">
                <IoLogoJavascript /> <FaReact /> <SiNextdotjs />
              </li>
              <li className="flex flex-row justify-around bg-red-500 py-2 rounded-full">
                <RiHtml5Line /> <FaCss3 /> <RiTailwindCssFill />
              </li>
            </ul>
          </section>
          <section className="my-10">
            <h2 className="text-3xl font-semibold mb-5">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium">Portfolio</h3>
                <p>
                  The site you are on! Have a look at my github to see under the
                  covers.
                </p>
              </div>
              <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium">ReadMe Generator</h3>
                <p>My first attempt at something using Node.js</p>
              </div>
              <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium">Hangman</h3>
                <p>My own take on the classic game Hangman</p>
              </div>
              <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium">Blog</h3>
                <p>A CRUD application that uses React, MongoDB, & Node.js</p>
              </div>
              <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium">Reference Sheet Repo</h3>
                <p>
                  A react site that I use to create my own cheat sheets for
                  technologies I use
                </p>
              </div>
            </div>
          </section>

          <section className="my-10">
            <h2 className="text-3xl font-semibold mb-5">
              Overcoming Challenges
            </h2>
            <p>
              Share a brief story about the challenges you faced and how you
              overcame them.
            </p>
          </section>

          <section className="my-10 text-center">
            <h2 className="text-3xl font-semibold mb-5">Let&apos;s Connect</h2>
            <a
              href="mailto:you@example.com"
              className="bg-teal-500 text-white py-2 px-4 rounded-lg"
            >
              Contact Me
            </a>
          </section>
          <div>
            <ButtonGroup />
            <div>
              <h3 className="text-3xl py-1">Looking for work!</h3>
            </div>
            <p className="text-md py-2 leading-8 text-gray-200">
              Looking for a role in front end development ADD more paragraphs!!!
            </p>
            <div className=" bg-gradient-to-b from-teal-500  h-80 w-80 mt-20 mx-auto">
              <Image
                src={devdave}
                height="80"
                width="80"
                className="rounded-full p-8"
                alt="Profile pic"
              />
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={design}
                  width="100"
                  height="100"
                  className="mx-auto"
                  alt="design"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
                <p>Creating designs using modern UX practices</p>
                <h4 className="py-4 text-teal-600">Design tools i use</h4>
                <p className="text-gray-200 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={code}
                  width="100"
                  height="100"
                  className="mx-auto"
                  alt="design"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
                <p>Creating designs using modern UX practices</p>
                <h4 className="py-4 text-teal-600">Design tools i use</h4>
                <p className="text-gray-200 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image
                  src={consulting}
                  width="100"
                  height="100"
                  className="mx-auto"
                  alt="design"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">Designs</h3>
                <p className="text-md py-5 leading-8 text-gray-200">
                  Creating designs using modern UX practices
                </p>
                <h4 className="py-4 text-teal-600">Design tools i use</h4>
                <p className="text-gray-200 py-1">Figma</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-200">
              Some of my projects. Check Github for more!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt="web1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt="web2" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt="web3" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt="web4" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt="web5" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} alt="web6" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
