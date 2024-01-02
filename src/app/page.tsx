import { buttonVariants } from "@/components/ui/button"
// import link from next
import Link from "next/link"
import { Hero } from "@/components/ui/hero"
import '@fontsource/slackey/400.css'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen -mt-24'>
      <Hero
      header={<p>Hi, my name is <span className='p-1 pb-0 hover:cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 rounded-md' style={{ fontFamily: 'Slackey' }}>Tanner Hornsby</span></p>}
      description={<p>I am a full-stack software engineer.</p>}
      footer={
        <div className="w-full flex justify-evenly">
          <Link className={buttonVariants({ variant: "ghost" })} href="/about">more about me</Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/projects">my projects</Link>
        </div>
      }      
      />
    </div>
  )
}