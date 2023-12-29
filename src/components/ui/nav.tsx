import React from 'react';
import { ModeToggle } from './theme-toggle';
// import '@fontsource/slackey/400' properly
import "@fontsource/slackey/400.css"
import { SideNavigation } from './side-nav';
import Link from 'next/link';

const Nav: React.FC = () => {
    return (
        <div className="flex items-center justify-between w-full h-16 bg-background px-4">
            <div className="flex items-center">
                <Link href='/' style={{ fontFamily: 'Slackey' }} className="hover:cursor-pointer scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                    <h1>
                        TH
                    </h1>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                {/* Buttons */}
                <ModeToggle />
                <SideNavigation links={[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Projects", href: "/projects" },
                    { name: "Contact", href: "/contact" },
                ]} />
            </div>
        </div>
    );
};

export default Nav;
