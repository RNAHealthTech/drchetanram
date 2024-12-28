import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import WhatsAppModal from '../utilities/WhatsAppForm';
import { treatments } from '../utilities/data';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  // Flatten all procedures into a single array
  const allProcedures = treatments.flatMap(category => category.procedures);

  const closeModal = () => setIsModalOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Treatments', href: '/treatments', hasSubmenu: true },
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
          <div className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center">
            <h1 className="text-2xl font-bold text-white">Dr. Chetan Ram</h1>
            <p className="text-sm text-white sm:ml-2">Spine Specialist</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-white hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={(e) => {
                    if (link.hasSubmenu) {
                      e.preventDefault();
                      setIsTreatmentsOpen(!isTreatmentsOpen);
                    }
                  }}
                >
                  {link.name}
                  {link.hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>

                {/* Desktop Submenu */}
                {link.hasSubmenu && (
                  <div className="hidden group-hover:block absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2">
                    {allProcedures.map((procedure) => (
                      <a
                        key={procedure.slug}
                        href={`/treatments/${procedure.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {procedure.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
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
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-amber-600 hover:bg-gray-800 flex items-center justify-between"
                    onClick={(e) => {
                      if (link.hasSubmenu) {
                        e.preventDefault();
                        setIsTreatmentsOpen(!isTreatmentsOpen);
                      }
                    }}
                  >
                    {link.name}
                    {link.hasSubmenu && (
                      <ChevronDown className={`h-4 w-4 transform transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                    )}
                  </a>

                  {/* Mobile Submenu */}
                  {link.hasSubmenu && isTreatmentsOpen && (
                    <div className="pl-4 space-y-1">
                      {allProcedures.map((procedure) => (
                        <a
                          key={procedure.slug}
                          href={`/treatments/${procedure.slug}`}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-amber-600 hover:bg-gray-800 rounded-md"
                        >
                          {procedure.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Modal */}
      {isModalOpen && <WhatsAppModal isOpen onClose={closeModal} />}
    </header>
  );
};

export default Header;