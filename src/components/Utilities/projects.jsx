import React from 'react';
import Card from '../card';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <div className=' bg-white ml-auto mr-auto w-3/4 pt-3'>
            <p className="font-bold text-4xl text-center text-slate-500">PROJECTS</p>

            <div className='grid grid-cols-3 p-10 '>

                {
                    projects.map((project) => {
                        return (
                            <center>
                                <div className='  p-10 border-2 border-red-100  bg-sky-400 h-full rounded-lg shadow-md '>
                                    <Card
                                        title={project.title}
                                        Descrption1={project.description1}
                                        Descrption2={project.description2}
                                        Technologies={project.technologies}
                                        Link={project.link}
                                        Img={project.image}
                                        Host={project.host} />
                                </div>
                            </center>
                        )
                    }
                    )
                }

            </div>
        </div>
    );
}


