import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import nikita from "../public/nikita.jpeg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
// import React, { useState } from "react";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <main className=" bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className=" py-10 mb-9 flex justify-between">
          <h1 className=" text-xl font-burtons">Nikita Jit</h1>
          <ul className=" flex items-center">
            <li>
              <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10 lg:flex lg:justify-between">
          <div className="lg:mt-10">
            <h2 className=" text-5xl py-2 text-teal-500 font-medium md:text-6xl">
              Nikita Jit
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl">
              Full-Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get cracking!!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 lg:py-10">
              <a href="#">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/nikita-jit-5a1477163/">
                <AiFillLinkedin />
              </a>

              <AiFillInstagram />
            </div>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-4 overflow-hidden md:h-96 md:w-96">
            <Image src={nikita} alt="Image" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis
            <span className="text-teal-500">perspiciatis</span>perspiciatis
            dolores dignissimos? Debitis rerum id blanditiis sequi totam.
            Libero, culpa eos. Cumque, hic laborum? Eum inventore officia
            accusamus est.
          </p>
          <p className="text-gray-600 leading-8 py-2 text-md">
            I offer a wide range of services including brand design, programming
            and teaching
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-lg my-10">
            <Image src={design} height={100} width={100} alt="" />
            <h3 className=" text-lg font-medium pt-8 pb-2">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className=" py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-lg my-10">
            <Image src={code} height={100} width={100} alt="" />
            <h3 className=" text-lg font-medium pt-8 pb-2">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className=" py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-lg my-10">
            <Image src={consulting} height={100} width={100} alt="" />
            <h3 className=" text-lg font-medium pt-8 pb-2">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className=" py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis
            <span className="text-teal-500">perspiciatis</span>perspiciatis
            dolores dignissimos? Debitis rerum id blanditiis sequi totam.
            Libero, culpa eos. Cumque, hic laborum? Eum inventore officia
            accusamus est.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={web1}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web2}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web3}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web4}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web5}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web6}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
