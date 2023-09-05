import React, { useState } from 'react';
// import Typewriter from "typewriter-effect";
import { BsFolderFill, BsFillTerminalFill } from 'react-icons/bs';
import Projects from './Utilities/projects';
import TerminalUi from './Utilities/terminalUi';
import { TerminalContextProvider } from "react-terminal";
import Resume from './Utilities/resume';
import Skills from './Utilities/skills'

export default function Home() {
    const [section, setSection] = useState(''); // State variable to track the selected section

    const handleShow = (sectionName) => {
        setSection(sectionName === section ? '' : sectionName);
    }

    // const handleInit = (typewriter) => {
    //     typewriter
    //         .typeString("Computer Engineer!")
    //         .pauseFor(1000)
    //         .deleteAll()
    //         .typeString("Aspiring developer!")
    //         .start()
    //         .pauseFor(1000)
    //         .deleteAll()
    //         .typeString("Passionate about frontend!")
    //         .start();
    // }

    return (
        <div className="h-screen w-full text-center bg-[url('https://wallpaperaccess.com/full/2587476.jpg')] bg-center bg-no-repeat bg-cover">
            {/* Your Typewriter code here */}
            {/* <h1 className='md:text-4xl font-bold text-2xl text-blue-500 '>I am  </h1>
            <div className='md:text-4xl font-bold text-2xl'>
                <Typewriter
                    onInit={handleInit}
                />
            </div> */}


            <div className='float-left'>
                {/* Projects */}
                <div className='w-max  p-2 cursor-pointer' onClick={() => handleShow('Projects')}>
                    <BsFolderFill className='text-6xl text-gray-400' />
                    <p className='text-center text-white'>Projects</p>
                </div>

                {/* Skills */}
                <div className='w-max p-2 cursor-pointer' onClick={() => handleShow('Skills')}>
                    <BsFolderFill className='text-6xl text-gray-400' />
                    <p className='text-center text-white'>Skills</p>
                </div>

                {/* Resume */}
                <div className='w-max p-2 cursor-pointer' onClick={() => handleShow('Resume')}>
                    <BsFolderFill className='text-6xl text-gray-400' />
                    <p className='text-center text-white'>Resume</p>
                </div>

                {/* Contact */}
                <div className='w-max p-2 cursor-pointer' onClick={() => handleShow('Contact')}>
                    <BsFolderFill className='text-6xl text-gray-400' />
                    <p className='text-center text-white'>Contact</p>
                </div>

                {/* About */}
                <div className='p-2 cursor-pointer' onClick={() => handleShow('About')}>
                    <BsFolderFill className='text-6xl text-gray-400' />
                    <p className='text-center text-white'>About</p>
                </div>


                {/* Terminal */}
                <div className='p-2 cursor-pointer' onClick={() => handleShow('Terminal')}>
                    <BsFillTerminalFill className='text-6xl text-slate-600' />
                    <p className='text-center text-white'>Terminal</p>
                </div>
            </div>

            {/* Conditional Rendering */}

            {section === 'Projects' && <Projects />}
            {section === 'Skills' && <div><Skills /></div>}
            {section === 'Resume' && <div><Resume /></div>}
            {section === 'Contact' && <div>Contact Section Content</div>}
            {section === 'About' && <div>About Section Content</div>}
            {section === 'Terminal' && <div className=''><TerminalContextProvider><TerminalUi /></TerminalContextProvider></div>}


            {/* Example using a default section when none is selected */}
            {!section && <div className='text-3xl'>
                This is beta version <br /> will update all features soon, Thank You! 😊</div>}
        </div>
    );
}
