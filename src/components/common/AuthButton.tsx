import { signOut, useSession } from "next-auth/react"
import NextLink from "next/link"

const AuthenticationButton = () => {
    const { data: session } = useSession()

    if (!session) {
        return (
            <NextLink href="/auth/signin">
                <button className="rounded px-2 bg-zinc-300 text-black h-6" >
                    Sign in
                </button>
            </NextLink>
        )
    }

    return (
        <div className="flex">
            <h6 className="text-white px-3">{session.user?.name}</h6>
            <button onClick={() => signOut()} className="rounded px-2  bg-zinc-300 text-black">
                Sign out
            </button>
        </div>
    )
}


export default AuthenticationButton
