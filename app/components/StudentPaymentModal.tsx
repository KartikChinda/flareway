import React, { useState } from 'react'

const StudentPaymentModal = ({ receiverAddress, handleCloseSite }) => {

    const [amount, setamount] = useState("0");
    const [message, setmessage] = useState("");
    const [privateKey, setPrivateKey] = useState("");

    return (
        <div className='fixed top-2 md:top-0 inset-0 bg-opacity-30  backdrop-blur-sm flex justify-center items-center font-sans'>
            <div className='flex text-white relative bg-black top-14 md:top-0 flex-col gap-3 w-[100%] m-5  p-2 rounded-xl'>
                <button className=' text-right text-white p-2 rounded-xl text-5xl font-sans border-2 border-white' onClick={handleCloseSite}>X</button>
                <div>
                    <label htmlFor="amount" className="flex flex-col font-semibold gap-2 mb-4" >
                        Enter amount (Lumens)
                        <input id="amount" placeholder="Enter the amount" type="number" className="rounded-md text-black bg-white p-2 font-normal border-2 border-palette-4 " onChange={(e) => (setamount(e.target.value))} value={amount} />
                    </label>
                    <label htmlFor="amount" className="flex flex-col font-semibold gap-2 mb-4" >
                        Enter your Stellar wallet private key
                        <input id="amount" placeholder="Enter your private key." className="rounded-md text-black bg-white p-2 font-normal border-2 border-palette-4 " onChange={(e) => (setPrivateKey(e.target.value))} value={privateKey} />
                    </label>
                    <label htmlFor="message" className="flex flex-col font-semibold gap-2 mb-4" >
                        Enter a message
                        <input id="message" placeholder="Enter some message. Let the receipent know you support them!" className="text-black rounded-md bg-white p-2 font-normal border-2 border-palette-4" onChange={(e) => (setmessage(e.target.value))} value={message} />
                    </label>
                    <div className='w-[100%] flex justify-center items-center '>
                        <button className='w-[40%] bg-yellow-400 flex justify-center items-center p-2  mt-10 mb-4 rounded-full text-3xl font-heading text-black font-black hover:text-[32px] duration-150 hover:bg-blackish hover:text-yellow-400 border-2 hover:border-yellow-400 border-black'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>



        </div>





    )
}

export default StudentPaymentModal