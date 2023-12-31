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
import { AlignJustify } from "lucide-react"
// as a client component, get the current url and use it to determine which
// navigation link should be active with next router
// 1. get the current url
// 2. determine which link should be active
// 3. render the links
// 4. render the side navigation
import { usePathname } from 'next/navigation'

export function SideNavigation({links}: {links: {name: string, href: string}[]}) {
    // get the current pathname from next/navigation
    const pathname = usePathname()
    // determine which link should be active
    const activeLink = links.find((link) => link.href == pathname)

    if (!activeLink) {
        throw new Error(`No link found for pathname: ${pathname}`)
    }

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
                            <SheetClose key={link.href} asChild><Link className={(link.href == activeLink.href ? buttonVariants({ variant: "default" }) : buttonVariants({ variant: "ghost" }))} href={link.href}>{link.name}</Link></SheetClose>
                        )
                    })}
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
    )
}