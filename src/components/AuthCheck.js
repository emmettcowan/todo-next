'use client'

import { useSession } from 'next-auth/react';

export default function AuthCheck({ children }) {
  const { data: session, loading } = useSession();

  if (loading) return <p>Loading...</p>;
  if (!session) return <p>Not authenticated</p>;

  return <>{children}</>;
}