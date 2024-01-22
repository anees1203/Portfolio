import { useState, useEffect, useRef } from 'react';

function Nav() {
    const navRef = useRef();
    const [underlineStyle, setUnderlineStyle] = useState({ display: 'none' });

    useEffect(() => {
        const handleMouseEnter = (event) => {
            if (event.target.tagName === 'A') {
              const { offsetLeft, clientWidth } = event.target;
              setUnderlineStyle({ 
                left: offsetLeft, 
                width: clientWidth,
                display: 'block'
              });
            }
        };

        const handleMouseLeave = () => {
            setUnderlineStyle({ display: 'none' });
        };

        const nav = navRef.current;
        nav.querySelectorAll('li a').forEach(link => {
            link.addEventListener('mouseenter', handleMouseEnter);
        });
        nav.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            nav.querySelectorAll('li a').forEach(link => {
                link.removeEventListener('mouseenter', handleMouseEnter);
            });
            nav.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const scrollToSection = (sectionClass) => {
        const section = document.querySelector(`.${sectionClass}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return ( 
        <nav ref={navRef} className='nav-wrapper'>
            <div className="nav-content">
                <ul className="list-styled">
                    <li><a className="home" onClick={() => scrollToSection('home-section')}>Home</a></li>
                    <li><a className="skills" onClick={() => scrollToSection('skills-section')}>Skills</a></li>
                    <li><a className="work" onClick={() => scrollToSection('work-section')}>Work</a></li>
                    <li><a className="contact" onClick={() => scrollToSection('contact-section')}>Contact</a></li>
                </ul>
                <div className="underline" style={{ ...underlineStyle }} />
            </div>
        </nav>  
    );
}

export default Nav;
