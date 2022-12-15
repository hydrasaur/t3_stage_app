import Link from 'next/link'
import React from 'react'
import { object } from 'zod'
import AnimatedLayout from '../../components/AnimatedLayout'
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react"
import { type } from 'os'
import type { GetServerSideProps } from 'next'
import { Sign } from 'crypto'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]"


type SignInProps = {
  providers: Record<string, ClientSafeProvider>,
}

export const Signin: React.FC<SignInProps> = ({ providers }) => {
  return (
    <AnimatedLayout>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with discord {provider.name}
          </button>
        </div>
      ))}
    </AnimatedLayout>
  )
}

export default Signin

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // are you signed in?
  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }


  const providers = await getProviders()
  // PROPS => Client 
  return {
    props: {
      providers
    },
  }
}
