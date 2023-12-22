import React, { useState, useEffect, useRef } from 'react';

function Nav() {
    const navRef = useRef();
    const [underlineStyle, setUnderlineStyle] = useState({ display: 'none' });

    useEffect(() => {
        const handleMouseEnter = (event) => {
            if (event.target.tagName === 'A') {
              const { offsetLeft, clientWidth } = event.target;
              const width = clientWidth; // Or set a specific width like 50px
              setUnderlineStyle({ 
                left: offsetLeft + ((clientWidth - width) / 2), // Center the underline
                width: width,
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

    return ( 
        <nav ref={navRef} className='nav-wrapper'>
            <div className="nav-content">
                <ul className="list-styled">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="underline" style={{ ...underlineStyle }} />
            </div>
        </nav> 
    );
}

export default Nav;
