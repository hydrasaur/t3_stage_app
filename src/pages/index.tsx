import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import AnimatedLayout from '../components/AnimatedLayout'

const SignIn: NextPage = () => {
  const { data: session } = useSession()
  return (
    <AnimatedLayout>
      <Link href="/Signin" >
        <button className="rounded bg-zinc-300 text-black" >
          Create New
        </button>
      </Link>
    </AnimatedLayout>
  );
};

export default SignIn

