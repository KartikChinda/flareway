"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const StudentCard = ({ student }) => {

    // this is for creating an accordian
    const accordianData = [
        {
            id: 1,
            name: "My academic achievements",
            content: student.academicAchievements,
        },
        {
            id: 2,
            name: "Why do I need financial aid?",
            content: student.needFinancialAid,
        },
        {
            id: 3,
            name: "Here's more about me",
            content: student.additionalInfo,
        }
    ]

    const [selectedID, setselectedID] = useState<number>(1);

    const handleAccordianClick = (id: number) => {
        if (selectedID === id) {
            setselectedID(-1);
        } else {
            setselectedID(id);
        }
    }



    return (
        <div className='flex border-2 p-2 bg-blackish mx-4  text-white font-subtext flex-col justify-start items-start py-4'>
            <div className='flex justify-between w-full items-center mb-10'>
                <div className='w-[60%] text-sm group'>
                    <p>Name: <span className='text-2xl font-bold group-hover:text-[26px] duration-200'>{student.name}</span> </p>
                    <p>Current Grade: <span className='text-2xl font-bold group-hover:text-[26px] duration-200'>{student.currentGrade}
                    </span></p>
                    <p>FIeld of Study: <span className='text-2xl font-bold group-hover:text-[26px] duration-200'>{student.fieldOfStudy}</span></p>
                    <p>Yearly household income: <span className='text-2xl font-bold group-hover:text-[26px] duration-200'>{student.householdIncome}</span></p>
                </div>
                <div className=' rounded-xl w-[40%] flex justify-end pr-3'>
                    <Image className='rounded-xl border-2 border-yellow-400  hover:border-4 duration-100' src={student.profilePicture} alt='student' width={180} height={180} />
                </div>
                <div>

                </div>
            </div>
            {accordianData.map((box) => {
                return (
                    <div className='my-2 w-[100%] flex flex-col'>
                        <div onClick={() => handleAccordianClick(box.id)} className=' cursor-pointer flex flex-row justify-between px-3 text-2xl'>
                            <div className='font-subtext -ml-1 text-sm'>
                                {box.name}
                            </div>
                            <div className='font-bold '>
                                +
                            </div>

                        </div>
                        <div>
                            {selectedID === box.id ?
                                <div className='p-2'>
                                    {box.content}
                                </div>
                                : ""}
                        </div>
                    </div>
                )
            })}



        </div>
    )
}

export default StudentCard