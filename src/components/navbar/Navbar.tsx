import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from './NavLink';
import { ContactModal } from './ContactModal';
import { ThemeToggle } from '../ThemeToggle';
import { LanguageSelector } from '../LanguageSelector';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span className="md:inline text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              &lt;GrindGrads/&gt;
              </span>
            </motion.button>

            <div className="flex items-center space-x-4">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={scrollToTop}
                  className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                >
                  {t('nav.home')}
                </button>
                <NavLink href="#about">{t('nav.about')}</NavLink>
                <NavLink href="#courses">{t('nav.courses')}</NavLink>
                <NavLink href="#services">{t('nav.services')}</NavLink>
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <LanguageSelector />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 whitespace-nowrap"
                >
                  {t('nav.joinNow')}
                </motion.button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="flex items-center space-x-4 md:hidden">
                <ThemeToggle />
                <LanguageSelector />
                <MobileMenu
                  isOpen={isMobileMenuOpen}
                  onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  onScrollToTop={scrollToTop}
                  onJoinNow={() => setIsContactModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
