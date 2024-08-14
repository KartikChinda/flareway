import React from 'react'

const StudentPaymentModal = ({ receiverAddress, handleCloseSite }) => {
    console.log("The address is: ", receiverAddress);
    console.log()
    return (
        <div className='fixed top-2 md:top-0 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-sans'>
            <div className='flex text-white relative top-14 md:top-0 flex-col gap-3 w-[100%] m-5 bg-[#000000] p-2 rounded-xl'>
                <button className=' text-right text-white p-2 rounded-xl text-5xl font-sans border-2 border-white' onClick={handleCloseSite}>X</button>
                <div>
                    kjshfjksh
                </div>
            </div>



        </div>





    )
}

export default StudentPaymentModal