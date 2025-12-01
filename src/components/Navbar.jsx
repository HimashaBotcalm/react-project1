
import React, { useState, useEffect } from "react"; 
import { Menu, X , Home, User, Settings, FileText} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "home", icon: <Home size={24}/>},
    { name: "About us", href: "about", icon: <User size={24}/>},
    { name: "Services", href: "services", icon: <Settings size={24}/>},
    { name: "Blog", href: "blog", icon: <FileText size={24}/>},
  ];
  

  {/* Close mobile menu on window resize */}
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href)
      );
      const scrollPos = window.scrollY + 100;
      for (let sec of sections) {
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          setActiveSection(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 bg-white shadow z-50 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 xl:px-0 py-6 relative z-50">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-[#1090CB]" >LOGO</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-20 font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              <a href={`#${link.href}`} 
              
              

              className={`hover:text-[#1090CB] ${activeSection === link.href ? "text-[#1090CB]" : "text-gray-700"}`}>
                {link.name}
              </a>
              {activeSection === link.href && (
                <span className="absolute -top-2 left-[0px] -translate-x-1/2 w-2 h-2 bg-[#08D3BB] rounded-full"></span>
              )}
            </li>
          ))}
          <a href="#contact">
            <button className="bg-[#1090CB] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">Contact us</button>
          </a>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1090CB] relative z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28}/> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu + Blur */}
      {isOpen && (
        <>
          {/* Blur Background */}
          <div 
            className="fixed inset-0 bg-red/50 backdrop-blur-sm z-30" 
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu */}
          <div className="md:hidden fixed top-16 w-full bg-white shadow-inner z-40">
            <ul className="flex flex-col items-center gap-10 py-6 font-medium">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  <a 
                    href={`#${link.href}`} 
                    onClick={() => setIsOpen(false)} 
                    className={`flex flex-col items-center text-gray-700 hover:text-[#1090CB] ${activeSection === link.href ? "text-[#1090CB]" : ""}`}
                  >
                    {activeSection === link.href && (
                      <span className="w-2 h-2 bg-[#08D3BB] rounded-full mb-1"></span>
                    )}
                    {link.icon}
                    <span className="text-xs mt-1">{link.name}</span>
                  </a>
                </li>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <button className="bg-[#1090CB] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition whitespace-nowrap">Contact us</button>
              </a>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;







