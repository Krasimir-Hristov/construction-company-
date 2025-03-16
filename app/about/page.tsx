'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className='min-h-screen pt-24 pb-16'>
      {/* Заглавие */}
      <section className='bg-primary text-white dark:text-black py-16'>
        <div className='container mx-auto px-4 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            За СтроиТех
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-xl max-w-3xl mx-auto'
          >
            Вашият надежден партньор в строителството от 2008 година
          </motion.p>
        </div>
      </section>

      {/* Основно съдържание */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>
                Нашата история
              </h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                СтроиТех е основана през 2008 година от група опитни строителни
                инженери с визия да създадат компания, която предлага
                висококачествени строителни услуги с фокус върху иновациите и
                устойчивостта.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                През годините се разраснахме от малка фирма с няколко служители
                до водеща строителна компания с екип от над 100 професионалисти,
                включително инженери, архитекти, проектанти и квалифицирани
                строителни работници.
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                Днес СтроиТех е синоним на качество, надеждност и иновации в
                строителния бранш, с портфолио от успешно завършени проекти в
                цялата страна.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='relative h-[400px] rounded-lg overflow-hidden'
            >
              <Image
                src='/images/placeholder.jpg'
                alt='Офис на СтроиТех'
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Мисия и визия */}
      <section className='py-16 bg-gray-100 dark:bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'
            >
              <h3 className='text-2xl font-bold mb-4 text-primary'>
                Нашата мисия
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Мисията на СтроиТех е да предоставя висококачествени строителни
                услуги, които надминават очакванията на клиентите, като
                същевременно спазваме най-високите стандарти за безопасност,
                устойчивост и етика в работата си.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mt-4'>
                Стремим се да изграждаме не просто сгради, а пространства, които
                подобряват качеството на живот и работа на хората, които ги
                обитават.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'
            >
              <h3 className='text-2xl font-bold mb-4 text-primary'>
                Нашата визия
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Визията ни е да бъдем лидер в строителната индустрия, признат за
                иновативност, качество и устойчивост. Стремим се да въвеждаме
                нови технологии и практики, които намаляват въздействието върху
                околната среда и повишават ефективността на строителния процес.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mt-4'>
                Искаме да бъдем предпочитан партньор за клиенти, които ценят
                качеството, надеждността и отговорното отношение към околната
                среда.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container mx-auto px-4'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white'
          >
            Нашите ценности
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-primary'
                >
                  <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Качество
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Стремим се към съвършенство във всеки аспект на нашата работа,
                от планирането до изпълнението и поддръжката.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-primary'
                >
                  <path d='M2 12h20' />
                  <path d='M12 2v20' />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Иновации
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Непрекъснато търсим нови технологии и методи, които да подобрят
                нашите строителни процеси и крайни резултати.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-primary'
                >
                  <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
                  <path d='m15 9-6 6' />
                  <path d='m9 9 6 6' />
                </svg>
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Устойчивост
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Ангажирани сме с устойчиви строителни практики, които
                минимизират въздействието върху околната среда и създават
                здравословни пространства.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
