Let's keep this short and simple. 
Do you want to build cool stuff that utilizes blockchain technology? You're at the right place. 
This tutorial, and I through it, will guide your hand and explain to you everything you need to know to build your own Decentralized Application, **without knowing Rust** using the incredible technology at your disposal, courtesy of the Stellar foundation. 
<br />
### How am I saying what's above this confidently?
Because I didn't know anything about Stellar before I started building this app. I just wanted to build something that might help better society, and I learned everything along the way. All those hours of work have been boiled down to this tutorial, which truly will be all that you need to go out there, and build a product that has the potential to change the world for the better, or is just fun for you. It's like I always say, **if I can do it, anyone can.**
<br />
### What are we building today?
(_Drumrolls_) Full disclosure, I only came to know about Stellar from the challenge they hosted. But, I was intrigued and I went through Stellar's website to actually understand what is it that they do. 
And let me say, I absolutely adored their vision, and felt the urge to create something that is a small fraction of the good they help others do in the world.

So today, we are building **FlareWay, a decentralized application that allows users to donate cryptocurrency to deserving students across the entire world.** So strap in, and either give this a read while you're on the treadmill or get your machines out and follow along with me. 
<br />
**Important: Although this tutorial is super easy to follow, and I've explained everything in a manner that you'll get things easily, it is as long as this sentence since it helps you make a full stack DApp, so don't be afraid to follow this on your own pace, and take breaks in between. Let us begin 😼.**
<br />

### What tech will we be using today? 
1. **Next.js**: We will be building our entire frontend using Next.js. If you simply have a working knowledge of Next or even React, you're good to go. I'll help you with everything else. 
2. **TailwindCSS**: We will style the frontend using TailwindCSS. We won't be diving deep into it, because I'd love for you to create your own style, have your app scream _you_. 
3. **MongoDB**: We will be using MongoDB to store information about the students who sign up for our application. Simply put, MongoDB is a NoSQL database used to store information. 
4. **Prisma**: Prisma is an ORM, which we will be using to talk to our Database. It is completely okay if you dont have a working knowledge of Prisma, you'll pick it on the fly.
5. **Stellar-SDK**: This right here is the tool that will transition you from a web2 developer to a web-3 developer. Stellar's SDK will help us to implement the ability to perform transactions over the Stellar blockchain.
<br /> 

## Here's a simple demo for the app we're building
[![Watch the video](https://img.youtube.com/vi/pM389zBhDZA/0.jpg)](https://youtu.be/pM389zBhDZA) 
<br /> 

### Let's take a look at the workflow. 
The diagram below will help you understand a user's journey through the DApp and also help you create your own workflow for the gorgeous idea you've in mind. We're not diving straight into the code because workflows help you get an idea of the different features you need to have for your app to function. As the saying goes, 

> Think twice, code once.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vhnwrdxshrbnplg0w5at.png)



_As a mental exercise, you can ponder upon some of the must-have features for this app._
<br /> 

---

## Here are sections that break the tutorial down.
###Building the frontend 
1. [Initializing the project and installing the dependencies.](#1-initializing-the-project)
2. [Adding UI, and creating a basic skeleton of a landing page.](#2-adding-ui-and-creating-a-basic-skeleton-of-a-landing-page)
3. [Creating a form for a student to sign up.](#3-creating-a-form-for-a-student-to-sign-up)
4. [Setting up MongoDB.](#4-setting-up-mongodb)
5. [Initializing Prisma.](#5-initializing-prisma)
6. [Setting up an API route for creating a student.](#6-setting-up-an-api-route-for-creating-a-student)
7. [Setting up an API route to fetch the list of students.](#7-setting-up-an-api-route-to-fetch-the-list-of-students)
8. [Showcasing the list of students to a potential donor.](#8-showcasing-the-list-of-students-to-a-potential-donor)

 

### Making use of the Stellar SDK
1. [Getting acquainted with Stellar's SDK.](#1-getting-acquainted-with-stellars-sdk)
2. [Getting an account with test currency tokens.](#2-getting-an-account-with-test-currency-tokens)
3. [Creating a form for the donor to provide relevant details.](#3-creating-a-form-for-the-donor-to-provide-relevant-details)
4. [Creating the API route to handle donations.](#4-creating-the-api-route-to-handle-donations)
5. [Conclusion](#5-conclusion)
 

Before we start with the frontend, I realize that **taking you through every bit and piece will be cumbersome for you to read. So, I will explain all the necessary bits and pieces, and if you want to look at the code, you can do that at the repository present [here](https://github.com/KartikChinda/flareway).** 

<br /> 
***

## 1. Initializing the Project 
Alright then, open up your favourite IDE, (it's VSCode for me) in an empty folder. This is where we will create our app. Open up a new terminal, and initialize a NextJs App by typing this command:
 

```
npx create-next-app@latest
```

You will be prompted with some options, you can keep them the same as I've kept them here (visible in the picture below). 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5p1aikogrr7uvsa970yc.png)
(I've used Typescript in my project, it's a force of habit now, but for you, we'll keep good old Javascript here.)

This creates a new app with the latest version of NextJs. 

<br /> 
Now, to truly have a blank canvas, we will do three things. 
**1.** Go to `app/page.jsx` and remove everything inside the main component. Just add a `Hello World (I add Bonsoir, Elliot here.)`. 
**2.** Go to `app/globals.css` and replace everything with this code snippet (We've just removed default styles): 

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
 
**3.** Let's also quickly install a couple of dependencies we need. In the terminal, type 

```
npm i react-file-base64 react-icons react-clock stellar-sdk
```
(react-icons and react-clock are needed for my UI, they might not be needed for yours). 

And voila, we now have a blank canvas to paint around with, so let's fire her up. 
In the terminal, run 

```
npm run dev
```

If you've done everything up to now, you'll see something like this

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w9jn54n2i3agkn61iyqr.png)



***
## 2. Adding UI, and creating a basic skeleton of a landing page
Alrighty then, this is the only part of the tutorial you need to treat as a black box. But don't fret, you will not falter in any shape or form while making your DApp. What I've done here is create a **simple landing page**, where I:  

- Created a navbar, which displays the name of the app.
- Created a sidebar, and it only displays some social links (using `react-icons` for the logos), and code for one is given below.
- Created the features section. 
- Created a clock using the `react-clock` package. 
- Created the section which has two links, saying "I have resources", and "I need resources".

_(P.S. if you're not feeling really creative, [here's ](https://github.com/KartikChinda/flareway/tree/master/app/components)the code for all of these components.)_


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/flptbd0b36damu1eg7me.png)

**What you need to pay attention to here, are the two buttons.**
What we're going to do now (as we've seen in the workflow), is decide if our user is a student, or a donor. 

- If they are a student, we take them to a page with a form to submit information. 
- If they are a donor, we take them to a page with details about the students. 

### How to set up routing in NextJs?
**We need to route the user to two different places based on the button they click.**
Here's a small crash course on routing in NextJs. Next does routing way better than React, where a file based routing structure is followed. 
What does that mean? Well, any new file you'd create in your folder inside your **app** folder, it will create a new route for that file. 


Let's understand with an example: 
You're developing locally, so the URL for your homepage is 
`http://localhost:3000/`

Now inside your folder, let's say you add a folder called `students` and inside the `students` folder, create a `page.jsx` file, and add a simple React functional component like this: 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ujcmxbgki8w4u3988b2g.png)

Then, this results in a new route to be formed, with the URL of `http://localhost:3000/students`

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wwmc8z6tzouotxe8w33c.png)


**As an exercise, create a `/new` route**. This is where we will create a form for the student to upload their information. 

### The `use client;` directive. 
Explaining this entirely would take some time (let me know if you need a dedicated Next.js tutorial), but you will see `use client;` written at the top of many files in this codebase. What you need to know is whenever you need to interact with the client (for example, react-hooks), you need to write `use client` at the very top of your page, like so: 


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ju1lgetrv476keb4sl8.png)

<br /> 
***

## 3. Creating a form for a student to sign up

You're doing great so far. This is where we start diving deeper, so if you need a snack, or some coffee, go ahead. 

Alright then, `app/new/page.jsx`is where we will be creating our form. 
This is going to be a simple form, which asks a student for some details.
<br /> 
The end result looks like this: 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b3gqigf54wtaq2okjupf.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hryx15necjx34gubml73.png)


The code for the form is [here](https://github.com/KartikChinda/flareway/blob/master/app/new/page.tsx).

**The form fields will change according to the idea you've in mind. But I will explain two important things that are happening here.**

It's a basic form, so let's focus on what's actually important here.
**1.** **Using base-64**: So base-64 helps us to do two things. First, we don't have to create a separate type of input for image/file uploading. Secondly, and more importantly, it helps us convert these files and images into a string, so they can be stored inside our databases easily, and we don't have to give a second thought about it. 
Here's how you can code an input for an image field: 

```jsx
 <label htmlFor="image" className="flex flex-col font-semibold gap-1" >
     Upload your image
     <FileBase64 type='file' multiple={false} onDone={({ base64 }) => { 
     setpost({ ...post, profilePicture: base64 }) }} />

</label>
```

(Here, what we're doing is just updating the `profilePicture` section of the state we've created for the `post`, which you can see below. 

```js
    const [post, setpost] = useState({
        name: "",
        address: "",
        currentGrade: "",
        fieldOfStudy: "",
        academicAchievements: "",
        householdIncome: "",
        needFinancialAid: "",
        additionalInfo: "",
        profilePicture: "",
        transcripts: "",
    })
```

**2.** **How and where to send this form data?**: We've created a form, and a student has entered his/her details. Now, we need to do something with these details. For this, we need to send these details over to our backend, where we will deal with all the logic and storage. 
So, let's name an API endpoint in the fetch function below and send the data there. (We'll create this endpoint next.)

**The `handlePostSubmit` function below can be invoked on the `submit` button on the form.**

Alright, this function first tries if it can send a **POST** request to the endpoint we've named, ie `api/posts/create`, and if it can, it sends the data of the post to that endpoint. 
However, if it fails, it console logs the error that has happened, (as of now, it will log that it is not able to find the API endpoint). 
Finally, as the name suggests, it reroutes the user to the homepage. The `useRouter()` is an import of `next/navigation`
Simple React Trivia, we've added `e.preventDefault()` here to ensure that the page does not refresh on a form being submitted. 

```ts
const router = useRouter();
const handlePostSubmit = async (e: any) => {
        try {
            console.log("The post we are sending is: ", post);
            e.preventDefault();
            const response = await fetch("api/posts/create", {
                method: "POST",
                body: JSON.stringify({
                    name: post.name,
                    address: post.address,
                    currentGrade: post.currentGrade,
                    fieldOfStudy: post.fieldOfStudy,
                    academicAchievements: post.academicAchievements,
                    householdIncome: post.householdIncome,
                    needFinancialAid: post.needFinancialAid,
                    additionalInfo: post.additionalInfo,
                    profilePicture: post.profilePicture,
                    transcripts: post.transcripts,
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
```

<br />
*** 

## 4. Setting up MongoDB

Okay then, so far, we've sending the data to an API endpoint. What will we do with this data? Why, we've to store it and display it, right? 

So we need someplace where we can store data, and lo and behold, we jump into the next section, databases. For this project, we will be using MongoDB, which is a noSQL, non-relational database and is perfect for a starter project. 

I'll not be diving really deep in this section to explain everything about MongoDB, because that will make this tutorial way too lengthy. But, I'll also not leave you in the dark here. 

Here's everything you need to do to get a **free database on MongoDB.**

**1.** Head on to this page [here](https://www.mongodb.com/cloud/atlas/register) and register yourself.
**2.** Once you've registered, log in to your MongoDB Atlas account. 
**3.** You've to click on **New Project** now. Give your project a relevant name (or a completely random one, if you're feeling rebellious) and click Next.
**4.** Alright, now you can keep everything as default, just make sure you've selected the **Shared** cluster (M0 Santbox). Once you're sure that the Shared cluster is selected, click on **Create Cluster**. 
<br />
Voila, you've just created your first cluster, good job. Now, I know this screen in front of you on MongoDB looks challenging, but don't fret, we'll navigate this easily. 


**5.** Now, head on over to Database Access in the Security tab on the left. There, you need to click on `Add a new database user`, and give a password and a username (remember these.) No need to change anything else. 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/240n0hcmtsd67e0d1enu.png)

**6.** Now, we need to make sure this database is essentially accessible from anywhere on the internet. 

For this, we go to the Network access tab, add an IP address, and add `0.0.0.0/0` (what this does is, it will make sure your than you can access this database on any address.)
Usually we don't do this, and specify specific IP Addresses, but for a beginner project, it's fine. 
    ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pag4rnxwa3992a0ni9of.png)

Okay then, all that's left now is to connect your database. 

**7.** Head on over to the clusters tab, and click on Connect. There, you will choose the connect your Application tab, and you will copy the string that starts with `mongodb+srv://`. 

**Now, you are done with MongoDB**. Just save this connection string for now, we will use it as soon as we install Prisma, which brings us to our next step. 

<br /> 
***

## 5. Initializing Prisma 

<br />

First things first, **why the heck do we need to use Prisma?**
If you wondered this, good for you. It is never a good idea to make an application more complicated than it should be, by introducing new technologies and tech stacks. But using Prisma (with NextJS specifically) has a lot of advantages, the main one being the need to not invoke a `connectToDB` function all the time.

<br />

Confused? Let me explain. 
NextJs follows what is called a serverless architecture, and what you need to know about it, is that API routes in Next.js are treated as functions. As you already know, functions are removed from the call stack once their purpose is served. Now this is fine, but our API route will talk to our MongoDB database. So everytime we will call our API route, it will have to establish a connection to the database again (which is precisely what we write in the `connectToDB` function). 
Prisma saves us from this hassle. 


**We will set up Prisma super quickly, in a matter of minutes**. Let's get it done:
<br /> 
**1.** Open a new terminal in your IDE in the folder of your project, and type in this command: 
`npx prisma`

**2.** This just invokes the Prisma CLI, we will set up our Prisma ORM now. So go ahead and do 

 ```
 npx prisma init
 ```

 After this, you will see two things, a `.env` file, and a new directory called `prisma`. 

**3.** Let's head on first to our `.env` file. There you will see one string called `DATABASE_URL`. This has been provided by Prisma and contains a dummy URL to some database. Bring your **MongoDB connection string over here**, and paste that here. Also, make sure to replace the `<username>` and `<password>` fields with your username and password. (Remember, we did this in the Network Access step?)

Once you're done with this, you should have something like this: 
 ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/re0eocsx0ei5o284g3fr.png)

(These aren't my credentials, if you were wondering that an 80 year old is writing this tutorial.)

You're doing amazingly well so far. Let's explore what Prisma has to offer now. Head on over to the `prisma` folder, and open the file `prisma.schema`. 

This is where we will define the schema of our database. If you've worked with MongoDB before, think of this as the equivalent to setting up the schema with Mongoose. 

**If this feels overwhelming, take a deep breath, and keep reading. All of it will make sense as you read it.** The good thing is, once you understand this, you can add Prisma to your skillset, because this is most of what you will use Prisma for! 

Okay then, inside `prisma.schema`, find `datasource db` and there, put your `provider` as `mongodb`. 
You should have something like this: 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jn7rdpm62js5vjydzrh7.png)

<br /> 

Right, now all that is left to do is define the schema of our database. What we're doing here, is defining what rows our database will have, ie, what information are we going to store about each student. This can be different according to the app you are creating, but if you're following along with this idea, then the schema will look like this: 

```js
model Post {
  id                   String @id @default(auto()) @map("_id") @db.ObjectId
  name                 String
  address              String
  currentGrade         String
  fieldOfStudy         String
  academicAchievements String
  householdIncome      String
  needFinancialAid     String
  additionalInfo       String
  profilePicture       String
  transcripts          String
}
```
(P.S. here we've named these posts, which are cards containing students' data). 
Here, the format is of the type `ColumnName - ColumnType`. You can copy paste what I've written for the `id`, but what it means is that we want the id to be automatically assigned, and be mapped to the `id` that MongoDB provided to each row by default.  

Two things now. 
First, run 

```js
npm install @prisma/client
```

and then run 

```js
npx prisma generate
```

Now, what happens with these commands is that Prisma will read your schema, create a table for that schema, and know that when data is entered, it will be stored there. 

And we're done. In a separate terminal, you can run 

```js
npx prisma studio
```
This is essentially just a visual interface for the data in your database, so you can check if everything is working fine periodically. 

**And we're done! If you've made it till here, kudos! This wasn't a small feat.**
(I know, I cried tears typing it till here. So we'll both pat ourselves on the back, and you'll keep learning, I'll keep writing.)


<br /> 
***

## 6. Setting up an API route for creating a student
<br />
Alright then, remember how we sent our data from our form to the API endpoint of `api/posts/create`? Now, we need to catch that data, and save it in the database. So inside your `app` folder, create a new folder called `api`, and in there, create another folder called `posts`, and in `posts`, create a file called `route.js`. 

Your folder structure should look like this: 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/222y71zgcpuajaz6j0j3.png)

Remember how Next.js has file based routing structure? This just means that we've created a route which is `https://localhost:3000/api/posts/create`. 

Now here, we will simply get the data, save it in the database, and send the user back to the homepage. 

Here's the code below, and then I'll explain different parts of it. 

```js
import { PrismaClient } from "@prisma/client";

export const POST = async (req, res) => {
    // getting the data in this object. The data is the one we submitted on the form.
    const receivedFromBody = await req.json();
    console.log(receivedFromBody);

    const prisma = new PrismaClient();

    try {

        const result = await prisma.post.create({
            data: {
                name: receivedFromBody.name,
                address: receivedFromBody.address,
                currentGrade: receivedFromBody.currentGrade,
                fieldOfStudy: receivedFromBody.fieldOfStudy,
                academicAchievements: receivedFromBody.academicAchievements,
                householdIncome: receivedFromBody.householdIncome,
                needFinancialAid: receivedFromBody.needFinancialAid,
                additionalInfo: receivedFromBody.additionalInfo,
                profilePicture: receivedFromBody.profilePicture,
                transcripts: receivedFromBody.transcripts,
            }
        });

        return new Response(JSON.stringify("StudentDataCreated."), { status: 201 });

    } catch (error) {
        console.log("Not able to create a student post.");
        console.log(error);
        return new Response("Failed to store student info.", { status: 500 });
    }
}
```
So, first up, we create an instance of a Prisma client. Assume this to be our `connectToDB` function we talked about before. Prisma will handle everything related to the database operations now. 

The rest is a fairly simple API route, you wouldn't have any problem with it if you've created REST API's before, but even if you haven't, here's what we're doing: 

- This request is a POST request, i.e. we are sending some data from the frontend. The entire data we are receiving is in the `req` (or request), and what we will send from here will be in `res` (or response). 
- We open a try-catch block (always a good practice). If we have some error, the `catch` block will "catch" it, display it and send an error code of `500` (i.e. a server error) to the user. 
- Inside the try block, we first generate an instance of the `Prisma Client`. Then, we store the data received from the form in the object `receivedFromBody` and log it.
- We then ask Prisma to create a new user, where each field will be populated with the relevant data from `receivedFromBody`, and once Prisma saves this new data inside the database, we send a status code of `201` to the user, i.e. all's good. 


**Congratulations, at this point, if you go and submit your details from the form, your details will be saved into the database!**
But we also need to see those details, right? So while we're here, let's also set up the route for fetching all students. 

<br />
*** 
## 7. Setting up an API route to fetch the list of students
<br />
This is going to be fairly simple. All you need to know is how to fetch all records from your database using Prisma, but otherwise, you can do this on your own. 

**1.** First, let's set up a route for this. 
Inside your `app/api/posts` folder, create a `route.js`. Your final structure should look like this:
 ```
app/
├── api/
│   ├── posts/
    │   └── create/
        │   └── route.js
│   │   └── route.js

```
So now, the route we've created is `http://localhost:3000/api/posts`

**2.** Great, now all we need to do is fetch the list of students we have entered. For better understanding, I've entered a bunch of random student data inside my database. (From the form, so you can try it too and see your full-stack app function properly!)

Inside the newly created `route.js` file, we write the following code, fairly similar to the previous one, only here, we are asking Prisma to fetch all of the data we have inside our database. 
```js
import { PrismaClient } from "@prisma/client";

export const GET = async (req, res) => {
    const prisma = new PrismaClient();

    try {

        const students = await prisma.post.findMany();
        return new Response(JSON.stringify(students), { status: 201 });

    } catch (error) {
        console.log("We had some error fetching posts.");
        return new Response("Error fetching students", { status: 500 });
    }
}
```

Everything else remains entirely the same. 
**Here's a fun thing**: go to `http://localhost:3000/api/posts` and if you've entered any data inside your database, it will be visible here in a JSON format, much like it is when you call any API endpoints. 


<br /> 
*** 
## 8. Showcasing the list of students to a potential donor.

<br />

Okay then, this is our final step with any CSS/JSX work. (Did you cheer or did you feel sad? Let me know.)

All we'll do here is display this list of students in a visually appealing manner. 

**Where are we going to display it?** 
Remember on our home page we had two different buttons, now, we work on the `I have resources` button. **So head on over to the `app/students/page.jsx` file you created in step 2.**

**What will we do here?**
Our process is fairly simple, we fetch the data from the API, we create a student card, and we display the information for all students. We also create a `donate` button for each student, which we will make work afterwards. 

<br />

Since the frontend might vary for your app, I will explain the most important parts you'd need here, and still link the entire code for your discretion. 

- **Fetching the data**
```js
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
```

Let's see. 
Here, we have a state for the list of students called `students`. 
We've a function called `getStudents` wrapped inside a `UseEffect` hook, with an `[]` as a dependency. This means that we want this function to run when this component is rendered, only for the one time. This makes sense too, since we want to get the list of students right when the page is loaded. 

Now, inside the `getStudents` function, we have a fetch function, which returns a `Promise` that resolves to a `response`. And then we convert this `response` into JSON format, which gives us our `studentsData` which we use to update the state of `students`. 


- **Mapping over the list of students, and creating cards for each of them**

What we need to do now is the crux of every full stack ever, i.e. displaying the data. 
So what we will do is we will map over this state of `students` that we've created, and for each student, pass on the information to a StudentCard component. 

Code for the mapping: 

```js
 <div>
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
```
Here, we also declared that if the `students.length` is not greater than zero (i.e. the list is empty, then we render a very simple loader that says `Fetching students...`

**The code for the student card can be found [here](https://github.com/KartikChinda/flareway/blob/master/app/components/StudentCard.tsx). The code for this entire page is right [here](https://github.com/KartikChinda/flareway/blob/master/app/students/page.tsx).** 

(My reason for not writing these code blocks here is to avoid making this tutorial appear lengthy for components you already know how to code.)

If you're displaying the list in your own way (and you should), just remember to add a button for each student, which simply says `Donate`, and has an empty function attached to it. 
(We will write the logic for this right after.)

Once you're done, you will see the list of students mapped out and drawn according to your vision. 
Here's how it looks in mine: 
 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k44t595eajdibzbbso3o.png)


***

## Making use of the Stellar SDK 

Well, well, well. We're here, finally. You'd to slog through the entire frontend (unless you love building cool frontends), to finally reach here. This is where we elevate your app from Web2, to Web3. 

Take another coffee break, go for a small walk. And when you feel refreshed, come back here. 

<br />
<br />

Refreshed? Amazing. Let us begin. 

*** 

## 1. Getting acquainted with Stellar's SDK 

What exactly is Stellar's SDK? I'll spare you the long answer, and tell you what exactly is Stellar's SDK **for you**. 

If you're someone like me who doesn't know Rust (it's a language in which a lot of Smart contracts are written. Smart contracts are sort of like the backend logic for DApps.), and you still want to build DApps, then the SDK is for you. It will simplify building services on the Stellar network for you, and will allow you to easily create transactions. 

**When I first heard about this challenge, I said to myself that I'd not be able to participate because I didn't know Rust. But you see my entry and a DApp here, that's how powerful the SDK is.**

A couple of terminologies you'll hear throughout: 

**1. TestNet:** Testnet is essentially like your development branch. It is a version of blockchain that is solely used for testing and development. 
**2. Lumens:** Lumens, or XLM, is the digital currency of the Stellar Network. Assume them to be like the tokens you use to play games at an arcade. Only here, you will use them on the Stellar Network. 


*** 

## 2. Getting an account with test currency tokens.

Since we're testing this app out, we need to be the donor, as well as the receiver. So let's create two test accounts for the donor and the receiver. 

### Let's work out the receiver first. 

**Go to this link right [here.](https://laboratory.stellar.org/#account-creator?network=test)**


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/arflytkb74w5ejez4gw7.png)

This is Stellar's laboratory. Here, you can see that you are on the test network. **We need to generate a key-pair.** (Think of it as a username-password for your account.)

You'll get a `Public Key` and a `Secret key`. Take your public key, and add create a student from the form we've created with this key as the input in the `address` field. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/28h6el39cmasjemezgev.png)


**Also save these somewhere, so we can access this account later.**

Look just below the `Keypair generator`, and you will find a `FriendBot`. This will give you some test tokens, i.e. tokens which don't have a value in the real life, but can be used for you to test out the transactions. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/84wcja6xfivjy1fvap2i.png)

Paste in your Public key, and click on Get test network Lumens. 
**Also, save your Public and Secret key.** 

All done, this gives you 10K Lumens on the test network for you to try out transactions and see if everything is working fine. 

( Fun anecdote: I initially didn't give the receiver any test credits, and the transactions didn't go through. Took me an hour to solve this issue :')). 

### Let's generate an account for the donor. 

The donor's account process will be the same, and we also need some tokens in there. 

So repeat the process above, store the keys, and you'd be ready with everything you need.  

*** 

## 3. Creating a form for the donor to provide relevant details.

Let's complete the last remnants of the front end quickly. 
Let's say that our donor has decided whom to donate to now. We need three things: 

1. The amount to donate. 
2. The donor's account details. 
3. The student's Stellar account. 

We already have **1** and **3**, let's create a form to input them. 

(I've created a pop-up modal here. But if that seems too complex, you can create a new form right in the `StudentCard.jsx` as well.)

If you want to make the form pop up, then the steps are these: 
1. Create a state for `isModalVisible`, and set it to false. 
2. When a user clicks on the `Donate` button, set the state to true. 
3. Inside your JSX, render the modal as follows: 

```js
{isModalVisible && <StudentPaymentModal receiverAddress={student.address} handleCloseSite={handleCloseSite} />}
```
(I'm sending the student address, and a function to close the modal as props here.)


### The form for donation

This is what the modal looks like: 


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z54yio6n2u0t8wvfrdkn.png)

We have two fields here, `amount` and `privateKey` (donor's account password, in a way).  

Let us focus on the submit button. **That's important.**

We need to take these details and send it over to the backend, where the transaction can take place. 

So go to your `api` folder, and create a new directory called `transactions`, and a file in it called `route.js`. 

When the submit button is clicked, the following function will run: 

```js
const handleDonation = async () => {
        try {
            const response = await fetch("api/transactions", {
                method: "POST",
                body: JSON.stringify({
                    receiverAddress: receiverAddress,
                    amount: amount,
                    privateKey: privateKey
                })
            })

        } catch (error) {
            console.error("We had some troubles making a donation", error);
        }
    }
```

Here, we are simply making a POST request to that API route. We're also sending the `amount`, the `receiverAddress` and the donor's `privateKey`. So let's code the logic for that route up. 

P.S. [Here's ](https://github.com/KartikChinda/flareway/blob/master/app/components/StudentPaymentModal.tsx)the code for the modal, if you need to see the CSS for it. 

*** 

## 4. Creating the API route to handle donations.

This right here, is wherein the crux for our interaction with the Stellar network will lie. 

I'll explain each part of the code in parts, and the entire code for the API route can be found **[here](https://github.com/KartikChinda/flareway/blob/master/app/api/transactions/route.ts)**.

**1.** Getting the values we sent over from the frontend: 

```js
const { receiverAddress, amount, privateKey } = await req.json();
    console.log("Received values:", receiverAddress, amount, privateKey);
```
This is us just getting the values we sent from the form, and logging them. 

**2.** Initializing the Stellar server: 

```js
 const server = new StellarSDK.Horizon.Server('https://horizon-testnet.stellar.org');
```
This is where we create an instance of the SDK's server (ie, the Server class if you're familiar with OOP). With this, we can talk to the testnet server on the blockchain. 

**3.** Getting the donor details:

```js
const donorKeypair = StellarSDK.Keypair.fromSecret(privateKey);
    // console.log("Donor account:", donorKeypair);
    // Fetch the donor account from the network
    const donorAccount = await server.loadAccount(donorKeypair.publicKey());
    console.log("Donor account:", donorAccount);
```
Alrighty then, you remember how we asked the donor for his/her private key? This is us retrieving their account information from that key, so we can use it while sending the transaction. 

Now, we've everything and we can send the transaction. 

**4.** Creating a transaction:

```js 
const transaction = new StellarSDK.TransactionBuilder(donorAccount, {
            fee: StellarSDK.BASE_FEE,
            networkPassphrase: StellarSDK.Networks.TESTNET,
        })
            .addOperation(
                StellarSDK.Operation.payment({
                    destination: receiverAddress,
                    asset: StellarSDK.Asset.native(),
                    amount: amount,
                })
            )
            .setTimeout(30)
            .build();

        // Sign the transaction
        transaction.sign(donorKeypair);
```

Let's break this down. 

- We pass in the `fee` as the fee that we need to spend to make a transaction. 
- We're creating this transaction on the `TESTNET` network. 
- This payment is going to go to the `receiverAddress`. 
- The amount is the `amount` we received from the frontend, ie the amount the donor wants to donate. 
- `setTimeout` is used to ensure the process gets halted if it takes more than the specified time. 
- And finally, we `build`, or create this.


**5.** Sending the transaction:

```js
const transactionResult = await server.submitTransaction(transaction);
        console.log("Transaction successful:", transactionResult);

        // Return success response
        return new Response(JSON.stringify("Transaction Successful."), { status: 201 });
```
Here, we're submitting this transaction, and if it's successful, we will send a response that says "All's good.". 

**6.** Keeping a track of the errors:

```js
catch (error) {
         console.error("Transaction failed:", error);
        // Return error response
        return new Response(JSON.stringify("Failed to transact"), { status: 500 });
    }
```

While the code above was in the `try` block, the `catch `block is a simple block that will notify us of the errors, and also send the result back to the front end. 

Bringing it all together, the entire code looks like the one below. (You know, in case you were lazy enough to not open the github link :p)

```js
import * as StellarSDK from "stellar-sdk";

export const POST = async (req: any, res: any) => {
    // Extract data from the request
    const { receiverAddress, amount, privateKey } = await req.json();
    console.log("Received values:", receiverAddress, amount, privateKey);

    // Initialize the Stellar server
    const server = new StellarSDK.Horizon.Server('https://horizon-testnet.stellar.org');

    const donorKeypair = StellarSDK.Keypair.fromSecret(privateKey);
    // console.log("Donor account:", donorKeypair);
    // Fetch the donor account from the network
    const donorAccount = await server.loadAccount(donorKeypair.publicKey());
    console.log("Donor account:", donorAccount);

    try {
        // Create a Keypair from the private key


        // Build the transaction
        const transaction = new StellarSDK.TransactionBuilder(donorAccount, {
            fee: StellarSDK.BASE_FEE,
            networkPassphrase: StellarSDK.Networks.TESTNET,
        })
            .addOperation(
                StellarSDK.Operation.payment({
                    destination: receiverAddress,
                    asset: StellarSDK.Asset.native(),
                    amount: amount,
                })
            )
            .setTimeout(30)
            .build();

        // Sign the transaction
        transaction.sign(donorKeypair);

        // Send the transaction
        const transactionResult = await server.submitTransaction(transaction);
        console.log("Transaction successful:", transactionResult);

        // Return success response
        return new Response(JSON.stringify("Transaction Successful."), { status: 201 });

    } catch (error) {
        console.error("Transaction failed:", error);
        // Return error response
        return new Response(JSON.stringify("Failed to transact"), { status: 500 });
    }
};

```

***

## Let's test! 

If you've followed everything correctly, you will now be able to send Lumens from your donor account to a student's account. 

Here's how you can test it: 

**1.** Replace the `PublicKey` with your donor public key in the link below, and go to `balances` to see the current balance. Note the current balance. 
 `https://horizon-testnet.stellar.org/accounts/PublicKey`

**2.** Come back to the app. Open the modal, and send some XLM to the receiver account. 

**3.** Repeat step 1, but this time check your balance. It will show your previous XLM - (the amount sent + transaction fee). 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vezj2o7a109e8zyoqgho.png)

(Here is a picture of the student's account balance, after I sent 20 Lumens.)


**Did we just do it? Yes we did! This right here, is your DApp, which allows you to send XLM over the Stellar test network, from one account to another.** 

***

## 5. Conclusion 

After infinite scrolls, tapping the keys a thousand different times, and following along what I hope was an easy-to-follow tutorial, we have finally reached the end. 
Or is it, the end of the beginning? 

Because the possibilities we have unlocked right now, are endless. When you think of it, most Web2 apps are just CRUD (create-read-update-delete) apps. Similarly, most Web3 apps have transactions at their core. 

And right now, you've created a DApp, without even writing a smart contract. 

**What's next?** 
- You could do a plethora of things with this app right now. For instance, create a dashboard for the student, display special popups for the transactions, make sure the user can only send the transaction if their balance is more than the XLM they are sending. 
- You could also start learning Rust, and start exploring Soroban to create full-fledged smart contracts. 


I'll lurk around in the comments every now and then, so if your code is troubling you for bugs, ask away, for me and more experienced people than me to take a look, and help you. 

I hope you liked, nay, loved this tutorial. Let me know what you liked, and what I can improve upon. I really hope you take this as a starting point, and build something super, super cool. And when you do, don't forget to show it to me. 


<br />
You can find me [here](www.linkedin.com/in/kartikchinda).
**This is me, Kartik, signing off :)** 
