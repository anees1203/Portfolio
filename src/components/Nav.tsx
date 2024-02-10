import { useState, useEffect, useRef } from 'react';

interface UnderlineStyle {
  display: string;
  left?: number;
  width?: number;
}

function Nav() {
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState<UnderlineStyle>({ display: 'none' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A') {
        const { offsetLeft, clientWidth } = target;
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
    if (nav) {
      const links = nav.querySelectorAll('li a');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnter as EventListener);
      });
      nav.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        links.forEach(link => {
          link.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        });
        nav.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionClass: string) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav ref={navRef} className='nav-wrapper'>
      <div className="nav-content">
        <button className="hamburger-menu" onClick={toggleMobileMenu}>☰</button>
        <ul className={`list-styled ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><a className="home" onClick={() => scrollToSection('home-section')}>Home</a></li>
          <li><a className="skills" onClick={() => scrollToSection('skills-section')}>Skills</a></li>
          <li><a className="work" onClick={() => scrollToSection('work-section')}>Work</a></li>
          <li><a className="contact" onClick={() => scrollToSection('contact-section')}>Contact</a></li>
        </ul>
        <div className="underline" style={underlineStyle} />
      </div>
    </nav>
  );
}

export default Nav;
