import Main from '@/components/main'
import NavBar from '@/components/NavBar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-zinc-700 flex flex-col h-screen justify-between">
      <NavBar />
      <Main />
      <Footer />
    </main>
  )
}
