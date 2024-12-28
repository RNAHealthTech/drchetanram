import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppModal from '../utilities/WhatsAppForm';



const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  

  //const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Conditions', href: '/conditions' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-[99] right-0 transition-all duration-300 ${isSticky ? 'bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-white">Dr. Chetan Kumawat</h1>
            <p className="hidden sm:block ml-2 text-sm text-white">Spine Specialist</p>
          </div> */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center">
            <h1 className="text-2xl font-bold text-white">Dr. Chetan Ram</h1>
            <p className="text-sm text-white sm:ml-2">Spine Specialist</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button and Emergency Icon */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-amber-600 hover:bg-gray-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Modal */}
      {isModalOpen && <WhatsAppModal isOpen onClose={closeModal} />}
    </header >
  );
};

export default Header;