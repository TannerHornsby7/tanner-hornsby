'use client'
import {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
  } from './sheet'
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
// import align justify from lucide
import { AlignJustify } from "lucide-react"


/*
<Sheet>
                <SheetTrigger>Nav</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle className='flex w-full justify-center'>Navigation</SheetTitle>
                    <Separator />
                    <SheetDescription className='flex flex-col'>
                        <Button className='w-full' variant={'ghost'}>Home</Button>
                        <Button className='w-full' variant={'ghost'}>About</Button>
                        <Button className='w-full' variant={'ghost'}>Projects</Button>
                        <Button className='w-full' variant={'ghost'}>Contact Me</Button>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
*/

// create a react component that takes a list of links and renders the above code
// make sure to add the correct links to the list

export function SideNavigation({links}: {links: {name: string, href: string}[]}) {
    return (
        <Sheet>
            <SheetTrigger>
                <AlignJustify className='hover:cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 rounded-md' size={24} />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle className='flex w-full justify-center'>Navigation</SheetTitle>
                <Separator />
                <SheetDescription className='flex flex-col'>
                    {links.map((link) => {
                        return (
                            <Link key={link.href} className={buttonVariants({ variant: "ghost" })} href={link.href}> {link.name} </Link>
                        )
                    })}
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
    )
}