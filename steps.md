1. Creating your next app. 
2. Adding a sidebar, navbar, and just creating a landing page. 
3. Now, we work on two routes, creating a student, and displaying students. 

    a. Creating a Student: 
        2. First, you create a form. Then you need to submit this somewhere, right? 
        So now you need 2 things. A db, an ORM, and a place to where we send this form data to. 

        1. Make a new cluster on MongoDb. (Link some youtube tutorial to this), at the end of which, in .env, you have your URI. 

        2. Prisma init, and connection w mongodb. 
        Code: 
        ```
        npx prisma 
        npx prisma init (creates folder called prisma)
        <!-- go to schema.prisma, and there you will see a db, fir usme update krna h url, and in the env file there will be a db url, copy paste mongoDB url. -->

        <!-- create the prisma schema then, idhar posts ka schema chahiye, so create that schema by keeping names same -->

        npm install @prisma/client

        npx prisma generate
        ```

        2. Adding in the API route where this needs to be sent. Checking it up on prisma studio by running npx prisma studio. 

3. Creating the API route, and then the frontend for displaying our students. 



Add made with a keyboard at the end. Also add a list of dependencies when you start the project. 