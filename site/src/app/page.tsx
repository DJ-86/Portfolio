// pages/index.js
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
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

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burton">Developed by Dave</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
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
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              David Jones
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Welcome to my site. please feel free to message me about site
              improvements and project ideas!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500  h-80 w-80 mt-20 mx-auto">
            <Image
              src={devdave}
              className="rounded-full p-8"
              alt="Profile pic"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Looking for work!</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Looking for a role in front end development ADD more paragraphs!!!
            </p>
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
              <p className="text-gray-800 py-1">Figma</p>
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
              <p className="text-gray-800 py-1">Figma</p>
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
              <p>Creating designs using modern UX practices</p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Some of my projects. Check Github for more!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
