
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { NextPage } from 'next/types'
import React from 'react'


const Logboek: NextPage = () => {
  return (
    <div>
      <Link href="/createLog">
      <button>create new</button>
      </Link>
    </div>
  )
}


export default Logboek
