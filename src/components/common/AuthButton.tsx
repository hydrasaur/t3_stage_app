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
        <button onClick={() => signOut()} className="rounded px-2  bg-zinc-300 text-black">
            Sign out
        </button>
    )
}


export default AuthenticationButton
