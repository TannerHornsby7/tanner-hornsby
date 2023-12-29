import { buttonVariants } from "@/components/ui/button"
// import link from next
import Link from "next/link"
import { Hero } from "@/components/ui/hero"



export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen -mt-24'>
      <Hero/>
    </div>
  )
}