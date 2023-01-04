import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok){
      console.log(res)
  }
  return res.json()
}
 

export default async function Home() {
  const data : {id: number; title: string} []= await getPosts()
  console.log(data)
  return (
    <main>
      <h1>node start</h1>
      {data.map((post) => (
        <h1 className='text-lg py-5'>{post.title}</h1>
      ))}
    </main>
  )
}
