import { AiFillHtml5,AiFillWindows,AiFillGithub } from 'react-icons/ai'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoPhp, BiLogoTailwindCss, BiLogoJava } from 'react-icons/bi'
import { TbBrandCpp } from 'react-icons/tb'
import { DiLinux } from 'react-icons/di'



export default function Skills() {
    return (
        <div className="flex items-center justify-center">

            <div className="bg-white ml-auto mr-auto w-3/4 pt-3 flex  items-center justify-center">
                <h1 className="text-3xl font-bold">SKILLS</h1>
                <center>
                    <div className='flex flex-row gap-10 p-3'>
                        <div className='flex flex-col'>
                            <p className=' text-3xl'>Web Technologies</p>
                            <ul>
                                <li><p className='text-6xl text-red-500'><AiFillHtml5 /></p> </li>
                                <li><p className='text-6xl text-blue-500'><BiLogoCss3 /></p> </li>
                                <li><p className='text-6xl text-yellow-500'><BiLogoJavascript /></p> </li>
                                <li><p className='text-6xl text-voilet-500'><BiLogoReact /></p> </li>
                                <li><p className='text-6xl text-blue-700'><BiLogoPhp /></p> </li>
                                <li><p className='text-6xl text-blue-500'><BiLogoTailwindCss /></p> </li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' text-3xl'>Languages</p>
                            <ul>
                                <li><p className='text-6xl text-red-500'><TbBrandCpp /></p> </li>
                                {/* <li><p className='text-6xl text-red-500'><AiFillHtml5 /></p> </li> */}
                                <li><p className='text-6xl text-red-500'><BiLogoJava /></p> </li>
                            </ul>
                        </div>

                        <div className='flex flex-col'>
                            <p className=' text-3xl'>Platform</p>
                            <ul>
                                <li><p className='text-6xl text-gray-500'><DiLinux /></p> </li>
                                <li><p className='text-6xl text-blue-500'><AiFillWindows /></p> </li>
                            </ul>
                        </div>

                        <div className='flex flex-col'>
                            <p className=' text-3xl'>Repository</p>
                            <ul>
                                <li><p className='text-6xl text-black'><AiFillGithub /></p> </li>
                            </ul>
                        </div>
                    </div>
                </center>


            </div>
        </div>
    )
}