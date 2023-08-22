import { Inter } from 'next/font/google'
import Link from 'next/link'
import '/styles/custom.css'
import '/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI-R',
  description: 'Coded by JM',
}

export default function RootLayout({ children }) {
  return (
    <div>
      <div className={inter.className}>
        <Navigation />
        {children}
      </div>
    </div>
  )
}

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/air">
        <a>AI-R</a>
      </Link>
      <Link href="/home">
        <a>TBD-Home</a>
      </Link>
    </nav>
  )
}