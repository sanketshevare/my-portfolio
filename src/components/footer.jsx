import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { Tooltip as ReactTooltip } from "react-tooltip";


export default function Footer() {
    return (
        <div>
            <div className='grid grid-cols-3 w-full  bg-slate-800 ' >
                <div className='flex text-white'>
                    <a href="https://instagram.com/sanketshevare?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='blank' data-tooltip-id='hover-insta' className='text-left text-4xl text-red-500 p-3'><BsInstagram /></a>
                    <a href="https://www.linkedin.com/in/sanket-shevare-4a299a1b7" data-tooltip-id='hover-linkedin' className='text-left text-4xl text-white p-3'><BsLinkedin /></a>
                    <a href="https://github.com/sanketshevare" data-tooltip-id='hover-git' className='text-left text-4xl text-white p-3'><BsGithub /></a>
                </div>

                <ReactTooltip
                    id="hover-insta"
                    place="top"
                    content="Instagram"
                    className='bg-gray-300'
                />

                <ReactTooltip
                    id="hover-linkedin"
                    place="top"
                    content="Linkedin"
                    className='bg-gray-300'
                />

                <ReactTooltip
                    id="hover-git"
                    place="top"
                    content="Github"
                    className='bg-gray-300'
                />

                <ReactTooltip
                    id="hover-files"
                    place="top"
                    content="View Pojects"
                    className='bg-gray-300'
                />

                <ReactTooltip
                    id="hover-terminal"
                    place="top"
                    content="Terminal"
                    className='bg-gray-300'
                />

            </div>
        </div>
    );
}

