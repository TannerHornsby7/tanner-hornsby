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
import React from "react"

export function Hero({ header, description, footer }: { header: React.ReactNode, description: React.ReactNode, footer: React.ReactNode }) {
    return (
        <Card className='border-none text-center w-3/4 md:w-8/12 lg:w-7/12'>
            <CardHeader>
                <CardTitle>{header}</CardTitle>
            </CardHeader>
            <CardContent>
                {description}
            </CardContent>

            <CardFooter className="w-full">
                {footer}
            </CardFooter>
        </Card>
    )
}
