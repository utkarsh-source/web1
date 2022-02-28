import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

function ButtonGroup({ pause, play, next, prev }) {
    return (
        <>
            <button onClick={prev} className="border-none bg-transparent py-[0.2rem] px-[0.3rem] cursor-pointer"><IoIosArrowRoundBack className="text-6xl rounded-full hover:text-pink-600 text-gray-400"/></button>
            <button onClick={next} className="border-none bg-transparent py-[0.2rem] px-[0.3rem] cursor-pointer"><IoIosArrowRoundForward className="text-6xl rounded-full hover:text-pink-600 text-gray-400"/></button>
        </>
    )
}

export default ButtonGroup
