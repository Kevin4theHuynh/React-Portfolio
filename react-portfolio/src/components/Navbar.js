import React from 'react'

function Navbar() {
    return (
    <header>
        <h1>Kevin Huynh<span class="seo"></span></h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">My Work</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a href="#Resume">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Navbar;