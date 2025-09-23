import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import sumaSriLogo from '@/assets/suma-sri-logo.png'
import logoMain from '@/assets/logomain-removebg-preview.png'
import logoText from '@/assets/logotext-removebg-preview.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-bg bg-black/40 shadow-md  border-gray-100 pb-3">
      <nav className="container mx-auto px-4 sm:px-6">
      
        <div className="flex items-center justify-between h-20"> {/* Increased header height */}

          <div className="flex items-center gap-x-6 sm:gap-x-12 md:gap-x-20">
  {/* Logo Icon */}
  <div
    onClick={() => scrollToSection('home')}
    className="flex-shrink-0 cursor-pointer flex items-center sm:ml-[-50px] md:ml-[-60px]"
  >
    <img
      src={logoMain}
      alt="Suma Sri Logo"
      className="h-12 sm:h-16 md:h-20 lg:h- w-auto object-contain transition-transform duration-200 hover:scale-105"
    />
  </div>

  {/* Logo Text */}
  <div
    onClick={() => scrollToSection('home')}
    className="flex-shrink-0 cursor-pointer flex items-center sm:ml-[-30px] md:ml-[-100px]"
  >
    {/* <img
      src={logoText}
      alt="Suma Sri Logo Text"
      className="h-6 sm:h-10 md:h-16 mt-4 lg:h-10 w-auto object-contain transition-transform duration-200 hover:scale-105"
    /> */}
    <p className='md:h-16 mt-4 lg:mt-12 w-auto object-contain transition-transform duration-200 hover:scale-105 text-white font-sans font-bold lg:text-[22px]'>
      SUMA SRI AQUA
    </p>
  </div>
</div>

          {/* Logo - Much larger */}
  


          {/* Desktop Navigation - Adjusted spacing */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <button
              onClick={() => scrollToSection('home')}
              className="text-base font-futura text-white hover:text-blue-700 transition-colors duration-200 py-3 px-2 border-b-2 border-transparent "
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-base font-futura text-white text-gray-800 hover:text-blue-700 transition-colors duration-200 py-3 px-2 border-b-2 border-transparent "
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-base font-futura text-white text-gray-800 hover:text-blue-700 transition-colors duration-200 py-3 px-2 border-b-2 border-transparent "
            >
              PRODUCTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-base font-futura text-white text-gray-800 hover:text-blue-700 transition-colors duration-200 py-3 px-2 border-b-2 border-transparent "
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Menu Button - Adjusted for larger header */}
          <button
            className="md:hidden text-gray-800 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />} {/* Larger icons */}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-0 py-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-6 py-4 text-base font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent "
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-6 py-4 text-base font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent "
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left px-6 py-4 text-base font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent "
              >
                PRODUCTS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-6 py-4 text-base font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 border-l-4 border-transparent "
              >
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;