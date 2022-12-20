import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import AnimatedLayout from '../components/AnimatedLayout'
import AuthenticationButton from '../components/common/AuthButton';

const SignIn: NextPage = () => {
  const { data: session } = useSession()

  return (
    <AnimatedLayout>
      <div className="flex-col h-screen">
        <div className="flex-col my-7 p-6 items-center border border-zinc-600 bg-[#18181b]">
          <h1 className='text-5xl font-mono'>Welcome to my PosterHomePage</h1>
          <p className='text-3xl font-mono'>Please sign in at the topright of the screen.</p>
          <p className="text-3xl font-mono">If already signed in please take a look at the website!</p>
        </div>
      </div>
    </AnimatedLayout>
  );
};


export default SignIn