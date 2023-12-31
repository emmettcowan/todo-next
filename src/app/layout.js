import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/footer'
import AuthProvider from './authProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="bg-gray-200  flex flex-col h-screen justify-between">
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}
