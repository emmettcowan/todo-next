import Link from "next/link"

export default function Login() {
  return (
    <main className="bg-slate-500 flex min-h-screen flex-col items-center justify-between p-24">
      <h1>LOGIN PAGE</h1>
      <Link href="/"> Home </Link>
    </main>
  )
}
