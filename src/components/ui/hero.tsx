import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import "@fontsource/slackey/400.css"
import "@fontsource/raleway/900-italic.css"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export function Hero() {
    return (
        <Card className='border-none text-center w-3/4 md:w-8/12 lg:w-7/12'>
            <CardHeader>
                <CardTitle>Hi, my name is <span className='p-1 hover:cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 rounded-md' style={{ fontFamily: 'Raleway' }}>Tanner Hornsby</span></CardTitle>
            </CardHeader>
            <CardContent>
                <p>I am a full-stack software engineer.</p>
            </CardContent>

            <CardFooter className="w-full flex justify-evenly">
                <Link className={buttonVariants({ variant: "ghost" })} href="/about">more about me</Link>
                <Link className={buttonVariants({ variant: "ghost" })} href="/projects">my projects</Link>
            </CardFooter>
        </Card>
    )
}
