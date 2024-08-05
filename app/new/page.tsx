"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import Navbar from "../components/Navbar";

const page = () => {

    const router = useRouter();
    const [post, setpost] = useState({
        title: "",
        description: "",
        createdAt: new Date(),
    })

    const handlePostSubmit = async (e: any) => {
        try {
            console.log("The post we are sending is: ", post);
            e.preventDefault();
            const response = await fetch("api/posts/create", {
                method: "POST",
                body: JSON.stringify({
                    title: post.title,
                    description: post.description,
                })
            })


        } catch (error) {
            console.log("Unable to add post. Error in submitting.");
            console.log(error);
        }
        finally {
            router.push("/");
        }
    }




    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setpost({ ...post, title: e.target.value })
    }

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setpost({ ...post, description: e.target.value })
    }

    const handleCancel = () => {
        router.push("/");
    }


    const currDate = new Date();



    return (
        <div>
            <Navbar />
            <div className='m-3 p-3 w-[90%]'>

                <h2 className="text-xl p-2 font-semibold text-palette-2">
                    Alright then, kid. Super glad to have you here.<br />
                    Let's get you set up, go on tell us all about yourself.
                    <span className="block font-light text-lg mt-2">
                        This is the information that will be visible about you, so be honest, take your time to fill it out, and most importantly, be you :)
                    </span>

                </h2>

                <form id="postCreation" onSubmit={(e) => handlePostSubmit(e)} className="flex flex-col p-4 gap-10  w-[95%]  rounded-xl border-2 border-blackish text-xl mt-4 font-subtext ">

                    <label htmlFor="title" className="flex flex-col font-semibold gap-1" >
                        Name
                        <input id="title" placeholder="Enter your name" className="rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleTitleChange(e)} value={post.title} />

                    </label>
                    <label htmlFor="title" className="flex flex-col font-semibold gap-1" >
                        Address
                        <input id="title" placeholder="Enter your Address (including city, state and country)." className="rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleTitleChange(e)} value={post.title} />

                    </label>

                    <label htmlFor="title" className="flex flex-col font-semibold gap-1" >
                        Current grade of study
                        <input id="title" placeholder="Enter your current grade of study" className="rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleTitleChange(e)} value={post.title} />

                    </label>

                    <label htmlFor="title" className="flex flex-col font-semibold gap-1" >
                        Intended field of study
                        <input id="title" placeholder="What field do you wish to pursue?" className="rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleTitleChange(e)} value={post.title} />

                    </label>

                    <label htmlFor="content" className="flex flex-col font-semibold gap-1" >
                        Enter your academic achievements
                        <textarea id="content" placeholder="Put in your GPA, test scores, scholastic achievements etc. Keep it 200 words or less." className=" h-[200px] rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleContentChange(e)} value={post.description} />

                    </label>

                    <label htmlFor="title" className="flex flex-col font-semibold gap-1" >
                        Yearly household income
                        <input id="title" placeholder={`Enter your yearly houshold income, in your country's currency.`} className="rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleTitleChange(e)} value={post.title} />

                    </label>

                    <label htmlFor="content" className="flex flex-col font-semibold gap-1" >
                        Why do you need financial aid?
                        <textarea id="content" placeholder="Make your case here. Honor system. Keep it 200 words or less." className=" h-[200px] rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleContentChange(e)} value={post.description} />

                    </label>

                    <label htmlFor="content" className="flex flex-col font-semibold gap-1" >
                        Content
                        <textarea id="content" placeholder="What is on your mind?" className=" h-[200px] rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleContentChange(e)} value={post.description} />

                    </label>

                    <label htmlFor="content" className="flex flex-col font-semibold gap-1" >
                        Enter additional information
                        <textarea id="content" placeholder="This can be anything, from your hobbies, to your extracurricular activies, goals, volunteering etc. Keep it 200 words or less." className=" h-[200px] rounded-md p-2 font-normal border-2 border-palette-4" onChange={(e) => handleContentChange(e)} value={post.description} />

                    </label>

                    <label htmlFor="title" className="flex flex-col font-semibold gap-1" >
                        Upload your image
                        <input id="title" type="image" onChange={(e) => handleTitleChange(e)} value={post.title} />

                    </label>



                </form>
                <div className="flex justify-end items-center w-[90%] gap-4 mt-4">
                    <button onClick={handleCancel} className="border-2 border-palette-3 rounded-xl px-3 py-2 bg-palette-4 text-palette-2 text-xl hover:bg-palette-3 hover:text-palette-4 hover:border-blackish hover:text-[18px] duration-150">
                        Cancel
                    </button>
                    <button type="submit" form="postCreation" className="border-2 rounded-xl px-3 py-2 border-blackish bg-blackish text-white font-bold text-xl hover:text-[22px] hover:bg-white hover:text-blackish hover:border-palette-1 duration-150">
                        Submit
                    </button>
                </div>

            </div>
        </div>


    )
}

export default page