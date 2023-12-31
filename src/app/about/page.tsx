import { Hero } from '@/components/ui/hero'
import { Separator } from '@/components/ui/separator'
import { buttonVariants } from '@/components/ui/button'
// get the download icon from lucide
import { Download } from 'lucide-react'
import Link from 'next/link'
import '@fontsource/slackey/400.css'

export default function About() {
    return (
        <div className='w-full flex flex-col items-center justify-center min-h-screen -mt-24'>
            <Hero
            header={
            <div>
                <h1 className='p-4 text-left' style={{fontFamily:'Slackey'}}>About</h1>
                <Separator />
            </div>}
            description={<p className='text-left'>I am a full-stack software engineer.</p>}
            footer={
                <div className="w-full flex justify-start">
                    <Link className={buttonVariants({ variant: "ghost" })} href={`resume.pdf`} download><Download className='h-3 -ml-2'/>resume</Link>
                </div>
            }
            />
        </div>
    )
}