import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
 
export default function NotFound() {
  return (
    <div className='w-screen flex items-center justify-center text-foreground'>
      <div className='flex-col text-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className={buttonVariants({variant: 'outline'})} href="/">Return Home</Link>
      </div>
    </div>
  )
}