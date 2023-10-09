'use client'

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export function SignInButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>;

  if (status === 'authenticated') {
    return (
      <>
        <Link href="/dashboard" className="p-3">Dashboard</Link>
        <SignOutButton />
      </>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>
}

export function SignOutButton() {
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}