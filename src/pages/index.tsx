import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import AnimatedLayout from '../components/AnimatedLayout'
import AuthenticationButton from '../components/common/AuthButton';
import Link from 'next/link';

const Home: NextPage = () => {

  return (
    <AnimatedLayout>
      <div className="flex-col h-screen">
        <div className="flex-col my-7 p-6 items-center border border-zinc-600 bg-[#18181b]">
          <h1 className='text-5xl font-mono'>Welcome to my HomePage!</h1>
          <p className="text-3xl font-mono">Read the cards down below for more info!</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className="border rounded-lg p-2 border-zinc-600 bg-[#18181b]">
            The first thing i made was the league page for the website I was working on.
            It was an idea the person that mentors me at the internship i go to gave me.
            The idea was to make a website that i could use to show my work.
            And one of the pages in the website was for a game that i play called league of legends.
            <Link href="/champions">
              <button className='m-2 p-1 border border-black bg-zinc-700 hover:bg-zinc-500'>Check it out!</button>
            </Link>
          </div>
          <div className="border rounded-lg p-2 border-zinc-600 bg-[#18181b]">
            There is also a page that only i can see and its the log page that i use to keep track of my work.
            The reason only i can see it is because i have a sign in function with a session attatched to it and i uses to see who is signed in.
            And it checks if its the right person that is signed in if not then they get an error message if it is the right person they can keep going and look at the log page.
          </div>
          <div className="border rounded-lg p-2 border-zinc-600 bg-[#18181b]">
            The third page was actually not a page at first it was going to be a basic poster that i had to make as a school assignment.
            But my mentor found that to be a little too simple and also having nothing to do with what i study so he came up with the idea to make the poster in one of the pages on the website since thats more of a challange and also is way more exciting.
            And it also looks alot better then a basic childish poster
            <Link href="/poster">
              <button className='m-2 p-1 border border-black bg-zinc-700 hover:bg-zinc-500'>So much to read!</button>
            </Link>
          </div>
          <div className="border rounded-lg p-2 border-zinc-600 bg-[#18181b]">
            NextAuth is a secure authentication and verification library that is built on the Next.js framework for React.
            It provides a simple way to verify and authenticate users for access to your web applications and services.
            NextAuth allows users to register, login, and logout using various methods such as email, phone number, social media, and more.
            It is easy to install and use, and also offers additional security features such as email verification and the ability to set up multifactor authentication.
            If you are looking for a reliable way to verify and authenticate users for your web applications, NextAuth is a good choice. Overall, the security of NextAuth is robust and reliable,
            making it a trusted solution for protecting your web applications and services.
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};


export default Home