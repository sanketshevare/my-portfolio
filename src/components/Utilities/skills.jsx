import { AiFillHtml5, AiFillWindows, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoPhp,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoFirebase,
  BiLogoRedux
} from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { DiLinux, DiMysql } from "react-icons/di";

export default function Skills() {
  return (
    <div className="bg-gray-400 w-full h-full ">
      <h1 className="text-3xl font-bold uppercase">SKILLS</h1>
      <div className="flex flex-col lg:flex-row gap-10 p-3 align-items-center justify-content-center ">
        <div className="flex flex-col ml-auto mr-auto">
          <p className=" text-3xl">Web Technologies</p>
          <ul className="ml-auto mr-auto">
            <li>
              <p className="text-6xl text-red-500">
                <AiFillHtml5 />
              </p>
              HTML
            </li>
            <li>
              <p className="text-6xl text-blue-500">
                <BiLogoCss3 />
              </p>{" "}
              CSS
            </li>
            <li>
              <p className="text-6xl text-yellow-500">
                <BiLogoJavascript />
              </p>{" "}
              JS
            </li>
            <li>
              <p className="text-6xl text-blue-700">
                <BiLogoReact />
              </p>{" "}
              React
            </li>
            <li>
              <p className="text-6xl text-blue-500">
                <BiLogoRedux />
              </p>{" "}
              Redux
            </li>
            <li>
              <p className="text-6xl text-blue-700">
                <BiLogoPhp />
              </p>{" "}
              PHP
            </li>
            <li>
              <p className="text-6xl text-blue-500">
                <BiLogoTailwindCss />
              </p>{" "}
              Tailwind
            </li>
          </ul>
        </div>
        <div className="flex flex-col ml-auto mr-auto">
          <p className=" text-3xl">Languages</p>
          <ul className="ml-auto mr-auto">
            <li>
              <p className="text-6xl text-red-500">
                <TbBrandCpp />
              </p>{" "}
              C++
            </li>
            {/* <li><p className='text-6xl text-red-500'><AiFillHtml5 /></p> </li> */}
            <li>
              <p className="text-6xl text-red-500">
                <BiLogoJava />
              </p>{" "}
              Java
            </li>
          </ul>
        </div>

        <div className="flex flex-col ml-auto mr-auto">
          <p className=" text-3xl">Platform</p>
          <ul className="ml-auto mr-auto">
            <li>
              <p className="text-6xl text-black">
                <DiLinux />
              </p>{" "}
              Linux
            </li>
            <li>
              <p className="text-6xl text-blue-500">
                <AiFillWindows />
              </p>{" "}
              Windows
            </li>
          </ul>
        </div>

        <div className="flex flex-col ml-auto mr-auto">
          <p className=" text-3xl">Repository</p>
          <ul className="ml-auto mr-auto">
            <li>
              <p className="text-6xl text-black">
                <AiFillGithub />
              </p>{" "}
              Git
            </li>
          </ul>
        </div>
        <div className="flex flex-col ml-auto mr-auto">
          <p className=" text-3xl">Other</p>
          <ul className="ml-auto mr-auto">
            <li>
              <p className="text-6xl text-blue-500">
                <DiMysql />
              </p>{" "}
              MySQL
            </li>
            <li>
              <p className="text-6xl text-orange-600">
                <BiLogoFirebase />
              </p>{" "}
              Firebase
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
