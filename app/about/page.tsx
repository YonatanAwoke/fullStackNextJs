import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })




export default function About() {
  
  return (
    <main className="py-4 px-5">
      <h1 className='text-3xl font-bold underline py-2'>node about</h1>
      <Link href={"/dashboard"} className="bg-red-700 text-black rounded-md font-bold py-1 px-1">Go to dashboard</Link>
    </main>
  )
}
