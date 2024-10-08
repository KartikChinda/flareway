"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import StudentPaymentModal from './StudentPaymentModal';


const StudentCard = ({ student }) => {

    const [isModalVisible, setisModalVisible] = useState(false)
    const [studentAddress, setstudentAddress] = useState("")

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

    const [selectedID, setselectedID] = useState<number>(-1);

    const handleAccordianClick = (id: number) => {
        if (selectedID === id) {
            setselectedID(-1);
        } else {
            setselectedID(id);
        }
    }

    const handleDonation = () => {
        setisModalVisible(true);
        setstudentAddress(student.address);
        console.log(student.address);
    }

    const handleCloseSite = () => {
        setisModalVisible(false);
    }



    return (
        <div>
            {isModalVisible && <StudentPaymentModal receiverAddress={student.address} handleCloseSite={handleCloseSite} />}
            <div className='flex border-2 bg-blackish mx-4  text-white font-subtext flex-col justify-start items-start rounded-xl hover:shadow-2xl duration-200 p-8'>
                <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center mb-10'>
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


                <div className='w-[100%] flex justify-center items-center '>
                    <button onClick={handleDonation} className='w-[40%] bg-yellow-400 flex justify-center items-center p-2 rounded-full text-3xl font-heading text-black font-black hover:text-[32px] duration-150 hover:bg-blackish hover:text-yellow-400 border-2 hover:border-yellow-400 border-black'>
                        Donate
                    </button>
                </div>

            </div>
        </div>


    )
}

export default StudentCard