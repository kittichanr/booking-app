"use client"

import { useSession, signIn, signOut } from "next-auth/react"
export default function Login() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github", { redirectTo: "/" })}>
        Sign in
      </button>
    </>
  )
}
