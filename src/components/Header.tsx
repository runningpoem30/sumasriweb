import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/60">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary cursor-pointer tracking-tight" onClick={() => scrollToSection('home')}>
            SumasriAqua
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/60">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                PRODUCTS
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;