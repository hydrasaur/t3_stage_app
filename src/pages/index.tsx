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
        <AuthenticationButton />

        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </AnimatedLayout>
  );
};


export default SignIn