import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'bn', name: 'বাংলা' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline">
          {languages.find((lang) => lang.code === i18n.language)?.name ||
            'English'}
        </span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  i18n.changeLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  i18n.language === language.code
                    ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {language.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
