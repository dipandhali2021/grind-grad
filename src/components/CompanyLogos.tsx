import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Importing the translation hook

const COMPANIES = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'TCS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg',
  },
  {
    name: 'Infosys',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/640px-Infosys_logo.svg.png',
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/640px-Amazon_2024.svg.png',
  },
  {
    name: 'Flipkart',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg',
  },
];

export function CompanyLogos() {
  const { t } = useTranslation(); // Initialize translation

  return (
    <div className=" bg-gradient-to-b dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 "
        >
          <h2 className="text-3xl pt-8 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            {t('companyLogos.title')} {/* Using translation here */}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 ">
          {COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-1 flex justify-center items-center"
            >
              <img
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 dark:brightness-0 dark:invert"
                src={company.logo}
                alt={company.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
