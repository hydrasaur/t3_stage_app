import Image from 'next/image'
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
import discordlogo from "/public/assets/discordlogo.png"


type SignInProps = {
  providers: Record<string, ClientSafeProvider>,
}

export const Signin: React.FC<SignInProps> = ({ providers }) => {


  return (
    <AnimatedLayout>
      <div className='flex-col h-screen '>
        <div className='flex-col m-7 p-6 border-zinc-600 bg-[#18181b]'>
          <h3 className='text-5xl font-serif'>Welcome back!</h3>
          <p className='text-1xl font-serif'>Sign in with one of your accounts to get started!</p>

          {Object.values(providers).map((provider) => {
            console.log(provider);
            let color: string = '';

            // select color for each provider
            switch (provider.id) {
              case 'discord':
                color = '#404eed';
                break;
              case 'google':
                color = "#ffffff";
                break;
              case 'reddit':
                color = "#ff4500";
                break;
              case 'twitch':
                color = "#5c16c5";
                break;
              case 'twitter':
                color = "#1d9bf0";
                break;

            }

            // console.log(color);
            return (
              <div key={provider.name} className='flex w-full my-2'>
                <button
                  className={'flex justify-between w-full rounded-md p-2' + "  " + `bg-[${color}]`}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                  <Image
                    // src={discordlogo}
                    // alt='Discord Logo'
                    src={`/assets/${provider.id}.png`}
                    alt="picture of the champion"
                    height={64}
                    width={64}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedLayout >
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
