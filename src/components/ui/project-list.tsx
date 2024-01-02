'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import '@fontsource/slackey/400.css'
import { Project as P } from '@/app/projects/page'
import * as React from 'react'

export function ProjectList({projects, setProj}: {projects: P[], setProj: Function}) {

    const {theme, systemTheme} = useTheme()
    const [accordianProj, setAccordianProj] = React.useState<string | null>(null)

    const handleAccordianTrig = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAccordianProj(e.currentTarget.textContent)
    }

    // create a hook to set the project
    React.useEffect(() => {
        if (accordianProj) {
            setProj(accordianProj)
        }
    }, [accordianProj])

    return (
        <div className='flex flex-col items-center min-h-screen justify-start'>
            <h1 className='text-xl p-4 text-center' style={{fontFamily:'Slackey'}}>Projects</h1>
            <Accordion className={`${(theme === 'dark') ? 'bg-slate-500' : ''} p-4 pb-0 pt-0 rounded-sm`} style={{'width': '350px'}} type="single" collapsible>
                {projects.map((project : P) => {
                    return (
                        <AccordionItem value={project.name} key={project.name}>
                            <AccordionTrigger onClick={handleAccordianTrig}>
                                <div className='flex flex-col items-center justify-center w-full'>
                                    <h1 className='p-4 text-left'>{project.name}</h1>
                                    <div className='flex w-full justify-evenly'>
                                        {project.images.map((image) => {
                                            return (
                                                <Image key={image} alt='dev icon' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${image}.svg`} width={25} height={25}/>
                                            )
                                        })}
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className='p-5 sm:text-sm text-left'>{project.description}</p>
                                <div className="w-full flex justify-between">
                                    <Link className={buttonVariants({ variant: "ghost" })} href={project.repo} target='_blank'>repo</Link>
                                    {project.demo && <Link className={buttonVariants({ variant: "ghost" })} href={project.demo} target='_blank'>demo</Link>}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}