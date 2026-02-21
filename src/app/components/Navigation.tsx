import { Link, useLocation } from "react-router";
import { Menu, X, Scale } from "lucide-react";
import { useState } from "react";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "./ui/collapsible"
// import { ChevronDownIcon } from "lucide-react"
// import {Button} from './ui/button'
// import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from './ui/dropdown-menu'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 hover:opacity-80 transition-opacity">
            <div className="p-0 m-0">
              {/* <Scale className="w-6 h-6 bg-[#D4AF37] text-black" /> */}
              <img src="/logos.svg" alt="Corporate Desk Logo" className="w-32 h-32" />
            </div>
            <span className="text-xl tracking-tight">
              <span className="text-[#D4AF37]">Corporate </span>Desk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative ${
                  isActive(link.path)
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D4AF37]" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-md hover:bg-[#B8941C] transition-colors"
            >
              Get Started
            </Link>
            {/* <Collapsible>
              
              <CollapsibleTrigger asChild>
              <div className="group w-fit inline" >
                Projects
              <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180"/>
              </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
              
                Yes. Free to use for personal and commercial projects. No attribution
                required.
              </CollapsibleContent>
            </Collapsible> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors px-2 py-2 ${
                    isActive(link.path)
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-md hover:bg-[#B8941C] transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
