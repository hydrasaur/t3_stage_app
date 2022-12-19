import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import AnimatedLayout from '../components/AnimatedLayout'
import AuthenticationButton from '../components/common/AuthButton';

const SignIn: NextPage = () => {
  const { data: session } = useSession()

  return (
    <AnimatedLayout>
      <div className="h-screen">
        <h1 className='text-5xl'>Welcome to my PosterHomePage :D</h1>
        <p className='text-3xl'>please sign in at the topright of the screen</p>

      </div>
    </AnimatedLayout>
  );
};


export default SignIn