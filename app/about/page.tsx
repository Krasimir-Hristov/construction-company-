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
            Über BauTech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-xl max-w-3xl mx-auto'
          >
            Ihr zuverlässiger Partner im Bauwesen seit 2008
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
                Unsere Geschichte
              </h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                BauTech wurde 2008 von einer Gruppe erfahrener Bauingenieure
                gegründet, mit der Vision, ein Unternehmen zu schaffen, das
                hochwertige Bauleistungen mit Fokus auf Innovation und
                Nachhaltigkeit anbietet.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                Im Laufe der Jahre sind wir von einem kleinen Unternehmen mit
                wenigen Mitarbeitern zu einem führenden Bauunternehmen mit einem
                Team von über 100 Fachleuten gewachsen, darunter Ingenieure,
                Architekten, Designer und qualifizierte Bauarbeiter.
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                Heute steht BauTech für Qualität, Zuverlässigkeit und Innovation
                in der Baubranche, mit einem Portfolio erfolgreich
                abgeschlossener Projekte im ganzen Land.
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
                alt='BauTech Büro'
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
                Unsere Mission
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Die Mission von BauTech ist es, hochwertige Bauleistungen zu
                erbringen, die die Erwartungen der Kunden übertreffen, während
                wir die höchsten Standards für Sicherheit, Nachhaltigkeit und
                Ethik in unserer Arbeit einhalten.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mt-4'>
                Wir streben danach, nicht nur Gebäude zu errichten, sondern
                Räume zu schaffen, die die Lebens- und Arbeitsqualität der
                Menschen, die sie bewohnen, verbessern.
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
                Unsere Vision
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Unsere Vision ist es, ein führendes Unternehmen in der
                Bauindustrie zu sein, das für Innovation, Qualität und
                Nachhaltigkeit anerkannt ist. Wir streben danach, neue
                Technologien und Praktiken einzuführen, die die
                Umweltauswirkungen reduzieren und die Effizienz des Bauprozesses
                erhöhen.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mt-4'>
                Wir möchten der bevorzugte Partner für Kunden sein, die
                Qualität, Zuverlässigkeit und verantwortungsvolles
                Umweltbewusstsein schätzen.
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
            Unsere Werte
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
                Qualität
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Wir streben nach Exzellenz in jedem Aspekt unserer Arbeit, von
                der Planung bis zur Ausführung und Wartung.
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
                Innovation
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Wir suchen ständig nach neuen Technologien und Methoden, um
                unsere Bauprozesse und Endergebnisse zu verbessern.
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
                Nachhaltigkeit
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Wir sind nachhaltigem Bauen verpflichtet, das die
                Umweltauswirkungen minimiert und gesunde Räume schafft.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
