import React, { useEffect, useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function TypewriterText() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const { t } = useTranslation();
 
  const text = t('hero.firstLine');
  const secondText = t('hero.secondLine');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowSecondLine(true), 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <motion.h1 
        className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="inline-block">{displayedText}</span>
        <span className="inline-block animate-blink">|</span>
      </motion.h1>

      <AnimatePresence>
        {showSecondLine && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            {secondText.split('\n').map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className={`text-4xl md:text-5xl font-bold ${
                  index === 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}