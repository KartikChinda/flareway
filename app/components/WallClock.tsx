"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';

import 'react-clock/dist/Clock.css';

const WallClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 30);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Clock value={time} size={350} minuteMarksLength={0} hourMarksLength={0} useMillisecondPrecision={true} />
        </div>
    )
}

export default WallClock; 