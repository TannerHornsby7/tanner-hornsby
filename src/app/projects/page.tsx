'use client'
import { ProjectList } from "@/components/ui/project-list"
import { useState, useEffect } from 'react'
const crusty_description = `A Relational Database Management Software built with Rust, Crusty accepts complex SQL statements and
efficiently retrieves the requested data. It is implemented on heap files using a custom storage manager, and a
query parser and optimizer. We ensured concurrency control through the two-phase locking protocol and tiered
locking. Leveraged the volcano model for efficient query building and optimization, ensuring optimal performance
on school servers.`

const browser_battleship_description = `An in-browser battleship game built with Javascript that has player vs player, easy, and hard modes. The hard
mode implements bayesian search and parity weighting, improving the average time to win from 97 moves to 56.`

import '@fontsource/slackey/400.css'

export interface Project {
    name: string,
    description: string,
    images: string[],
    repo: string,
    demo?: string | undefined,
    gif?: string | undefined,
    height: number,
    width: number,
    multiplier: number
}

const projects = [
    {
        name: 'CrustyDB',
        description: crusty_description,
        images: ['rust/rust-plain', 'postgresql/postgresql-original-wordmark', 'python/python-original'],
        repo: 'https://github.com/TannerHornsby7/crusty',
        height: 200,
        width: 334,
        gif: 'https://giphy.com/embed/QLnCRdowijQ30IezTl',
        multiplier: .8
    },
    {
        name: 'Browser Battleship',
        description: browser_battleship_description,
        images: ['javascript/javascript-original', 'html5/html5-original', 'css3/css3-original'],
        repo: 'https://github.com/TannerHornsby7/battleship',
        demo: 'https://tannerhornsby7.github.io/battleship/',
        height: 1100,
        width: 2182,
        gif: 'https://giphy.com/embed/aYqejHeTkJko5SsQsk',
        multiplier: .7

    },
    // {
    //     name: 'Sauna',
    //     description: 'This is a description for project 3',
    //     images: ['javascript/javascript-original', 'nextjs/nextjs-original', 'nodejs/nodejs-original'],
    //     repo: 'https://github.com',
    //     demo: 'https://google.com',
    //     height: 1,
    //     width: 1,
    //     gif: 'https://giphy.com/embed/Te8g0Fa6kh5Nm',
    //     multiplier: 1.1
    // },
    {
        name: 'Ray Tracer',
        description: 'A ray tracing engine built with racket for my first computer science course at The University of Chicago. Throughout the project, I learned test driven development and functional programming.',
        images: [],
        repo: 'https://github.com/TannerHornsby7/ray-tracer',
        height: 1,
        width: 1,
        gif: 'https://giphy.com/embed/Te8g0Fa6kh5Nm',
        multiplier: 1.1

    }
]

const project_map = new Map<string, Project>()
projects.forEach((project) => {
    project_map.set(project.name, project)
})

export default function Projects() {
    const [currentProject, setCurrentProject] = useState<string>(projects[0].name)
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    const setWH = () => {
        const cP = project_map.get(currentProject)
        if (cP === undefined) {
            return
        }
        const width_height_sum = (cP.height + cP.width) | 1
        const width_multiplier = cP.width / width_height_sum
        const height_multiplier = cP.height / width_height_sum
        setHeight(Math.max(window.innerWidth * height_multiplier * cP.multiplier, 360 * cP.height / cP.width))
        setWidth(Math.max(window.innerWidth * width_multiplier * cP.multiplier, 360))
    }

    // get the width and height of the window
    useEffect(() => {
        setWH()
    }, [currentProject, setWH])

    if (typeof window !== 'undefined') {
        // trigger on resize as well
        window.addEventListener('resize', () => {
            setWH()
        })
    }


    return (
        <div>
            <div className='flex w-full md:flex-row flex-col md:justify-evenly justify-start items-center md:items-start mt-0 md:mt-12'>
                <div>
                    <h1 className='text-xl p-4 text-center' style={{ fontFamily: 'Slackey' }}>Project Preview</h1>

                    {/* // set the width of the iframe to 100% and the height to 360 */}
                    <div className="iframe-div"><iframe src={project_map.get(currentProject)?.gif} width={width} height={height} className='iframe giphy-embed' frameBorder="0" allowFullScreen></iframe></div>
                </div>
                {/* <Image alt='project preview' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Fbackground&psig=AOvVaw2AFeurG5pDtenhB3p7t26h&ust=1703974079290000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjVrZ_UtYMDFQAAAAAdAAAAABAE' width={500} height={500} /> */}
                <ProjectList projects={projects} setProj={setCurrentProject} />
            </div>
        </div>
    )
}