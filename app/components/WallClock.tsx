"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';

import 'react-clock/dist/Clock.css';

const WallClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='w-full h-full flex justify-center items-center border-2'>
            <Clock value={time} size={350} minuteMarksLength={0} hourMarksLength={0} useMillisecondPrecision={true} />
        </div>
    )
}

export default WallClock; 