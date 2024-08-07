"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import StudentCard from '../components/StudentCard';

const page = () => {

    const [students, setstudents] = useState([])

    useEffect(() => {

        const getStudents = async () => {
            const response = await fetch("api/posts");
            const studentsData = await response.json();
            console.log(studentsData);
            setstudents(studentsData);
        }

        getStudents();

    }, [])



    return (
        <div>
            <Navbar />
            <h2 className="text-xl p-2 font-semibold text-palette-2">
                Hi, super glad to have you here.<br />
                Below is a list of our stellar scholars.
                <span className="block font-light text-lg mt-2">
                    All their crypto addresses are listed below, as well as their bios. Feel free to splurge :)
                </span>

            </h2>
            <div className=''>
                {students.length > 0 ?
                    <div className='flex flex-col justify-start items-center mt-10 gap-6 '>
                        {students.map((student) => {
                            return (
                                <div className='w-full'>
                                    <StudentCard student={student} />
                                </div>
                            )
                        })}
                    </div>
                    :
                    "Fetching students..."}
            </div>

        </div>
    )
}

export default page