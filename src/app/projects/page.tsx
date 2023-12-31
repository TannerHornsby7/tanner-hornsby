import { ProjectList } from "@/components/ui/project-list"
import Image from "next/image"
const crusty_description = `A Relational Database Management Software built with Rust, Crusty accepts complex SQL statements and
efficiently retrieves the requested data. It is implemented on heap files using a custom storage manager, and a
query parser and optimizer. We ensured concurrency control through the two-phase locking protocol and tiered
locking. Leveraged the volcano model for efficient query building and optimization, ensuring optimal performance
on school servers.`

const browser_battleship_description = `An in-browser battleship game built with Javascript that has player vs player, easy, and hard modes. The hard
mode implements bayesian search and parity weighting, improving the average time to win from 97 moves to 56.`

import '@fontsource/slackey/400.css'

export default function Projects() {

    return (
        <div>
            <div className='flex md:flex-row flex-col md:justify-evenly justify-start items-center md:items-start mt-0 md:mt-12'>
            <div>
                <h1 className='text-xl p-4 text-center' style={{fontFamily:'Slackey'}}>Project Preview</h1>
                <iframe src="https://giphy.com/embed/l0HlD6X5Pi5EKDmbm" width="480" height="360" frameBorder="0" className="giphy-embed pt-4" allowFullScreen></iframe>
            </div>
            {/* <Image alt='project preview' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fexplore%2Fbackground&psig=AOvVaw2AFeurG5pDtenhB3p7t26h&ust=1703974079290000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjVrZ_UtYMDFQAAAAAdAAAAABAE' width={500} height={500} /> */}
            <ProjectList projects={[
                {
                    name: 'CrustyDB',
                    description: crusty_description,
                    images: ['rust/rust-plain', 'postgresql/postgresql-original-wordmark', 'python/python-original'],
                    repo: 'https://github.com/TannerHornsby7/crusty'
                },
                {
                    name: 'Browser Battleship',
                    description: browser_battleship_description,
                    images: ['javascript/javascript-original', 'html5/html5-original', 'css3/css3-original'],
                    repo: 'https://github.com/TannerHornsby7/battleship',
                    demo: 'https://tannerhornsby7.github.io/battleship/'
                },
                {
                    name: 'Sauna',
                    description: 'This is a description for project 3',
                    images: ['javascript/javascript-original', 'nextjs/nextjs-original', 'nodejs/nodejs-original'],
                    repo: 'https://github.com',
                    demo: 'https://google.com'
                },
                {
                    name: 'Ray Tracer',
                    description: 'This is a description for project 3',
                    images: [],
                    repo: 'https://github.com',
                    demo: 'https://google.com'
                }
            ]} />
            </div>
        </div>
    )
}