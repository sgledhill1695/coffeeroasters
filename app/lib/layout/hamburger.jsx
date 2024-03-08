'use client'

import { useState, useEffect } from "react";

export default function Hamburger(){

    const [open, setOpen] = useState(false);

    const handleOpenMobileNav = () => {

        open ? setOpen(false) : setOpen(true);

    }

    useEffect(() => {

        const mobileNav = document.getElementById('mobileNav');

        if (!open) {
            mobileNav.classList.remove('mobile-nav-open');
            mobileNav.classList.add('mobile-nav-closed');

        } else if(open) {
            mobileNav.classList.remove('mobile-nav-closed');
            mobileNav.classList.add('mobile-nav-open');
        }


    }, [open]);

    return(

        <svg onClick={handleOpenMobileNav} width="16" height="15" className="sm:hidden hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z" fill="#333D4B" fillRule="evenodd" /></svg>

    )
}