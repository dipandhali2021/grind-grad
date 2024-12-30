import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onScrollToTop: () => void;
  onJoinNow: () => void;
}

export function MobileMenu({ isOpen, onToggle, onScrollToTop, onJoinNow }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => {
                  onScrollToTop();
                  onToggle();
                }}
                className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {t('nav.home')}
              </button>
              <NavLink href="#about" onClick={onToggle}>
                {t('nav.about')}
              </NavLink>
              <NavLink href="#courses" onClick={onToggle}>
                {t('nav.courses')}
              </NavLink>
              <NavLink href="#services" onClick={onToggle}>
                {t('nav.services')}
              </NavLink>
              <button
                onClick={() => {
                  onJoinNow();
                  onToggle();
                }}
                className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                {t('nav.joinNow')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}