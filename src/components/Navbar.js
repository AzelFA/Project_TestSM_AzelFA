import React, { useState , useEffect} from "react";
import Logo from "../site-logo.png";

const Navbar = () => {
  // State to manage the active item
  const [activeItem] = useState('Ideas'); // Using state "Ideas" as example because we are only making this page

  // State to manage the visibility of the navbar
  const [isVisible, setIsVisible] = useState(true);
  // State to manage the transparency of the navbar background
  const [isTransparent, setIsTransparent] = useState(false);

  // Track the previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  // Handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);

    // Adjust transparency of the navbar based on scroll position
    setIsTransparent(currentScrollPos > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // List of nav items
  const navItems = [
    { id: 1, text: 'Work' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Ideas' },
    { id: 5, text: 'Careers' },
  ];

  return (
    <div className={`z-50 fixed top-0 left-0 w-full duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isTransparent ? 'bg-opacity-80' : 'bg-opacity-100'} bg-[#fe6700]`}>
      <div className={`flex justify-between items-center duration-300 ${isTransparent ? 'h-16' : 'h-24'} max-w mx-auto px-36 text-white`}>
        {/* Logo */}
        <a href="/#">
          <img alt="Suitmedia Logo" src={Logo} className="invert brightness-0" />
        </a>

        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`py-2 m-3 border-b-4 duration-300 cursor-pointer ${activeItem === item.text ? 'border-white/100' : 'border-white/[.0] hover:border-white/100'}`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
