import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiFillCloseCircle, AiOutlineWifi, AiOutlineSound } from 'react-icons/ai';
import { GiBatteryPackAlt } from 'react-icons/gi';


export default function Header() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let month = date.getMonth();
    let dayDate = date.getDate();
    let year = date.getFullYear();
    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];
    let strDate = monthName[month] + ' ' + dayDate;
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;



    const [value, onChange] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const handleCalendar = () => {
        setShowCalendar(!showCalendar);
    }
    return (
        <div className='h-full sticky top-0 z-[1000]'>
            <div className='grid grid-cols-3   bg-black ' >
                <div className='text-white'>
                    <h1 className='text-left'>Welcome</h1>
                </div>
                <div className="flex text-white justify-center cursor-pointer" onClick={handleCalendar}>
                    <h1 className='text-center md:mr-3 mr-1'>{strDate}</h1> <h1 className='text-center'>{strTime}</h1>
                </div>

                <div className='text-white'>
                    <h1 className='float-right p-1 text-lg font-bold'><GiBatteryPackAlt /></h1>
                    <h1 className='float-right p-1 text-lg font-bold'><AiOutlineSound /></h1>
                    <h1 className='float-right p-1 text-lg font-bold'><AiOutlineWifi /></h1>
                </div>
            </div>

            {showCalendar &&
                <center>
                   <div className='flex justify-center z-20'>
                   <div className='absolute shadow-xl p-6 md:w-96 w-11/12 top-5 ml-auto mr-auto mt-5 bg-red-50'>
                        <p className=' '>
                            <AiFillCloseCircle className='cursor-pointer float-right text-2xl text-gray-900 ' onClick={handleCalendar} />
                        </p>
                        <h1 className='text-black text-2xl'>{strDate + ' ' + year}</h1>
                        <Calendar onChange={onChange} value={value} />
                    </div>
                   </div>
                </center>
            }
        </div>
    );
}




