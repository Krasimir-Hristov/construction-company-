'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  // Анимационни варианти
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Списък с услуги
  const services = [
    {
      title: 'Wohnungsbau',
      description:
        'Wir bieten umfassende Dienstleistungen für den Bau von Einfamilienhäusern, Mehrfamilienhäusern und Wohnanlagen. Unser Team sorgt für höchste Qualität und Effizienz in jeder Phase des Projekts, von der Planung bis zur Fertigstellung.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-primary'
        >
          <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
          <polyline points='9 22 9 12 15 12 15 22' />
        </svg>
      ),
    },
    {
      title: 'Gewerbebau',
      description:
        'Wir spezialisieren uns auf den Bau von Bürogebäuden, Einzelhandelsgeschäften, Lagerhallen und anderen gewerblichen Einrichtungen. Wir verstehen die spezifischen Anforderungen von Geschäftsräumen und liefern funktionale, ästhetische und kosteneffiziente Lösungen.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-primary'
        >
          <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
          <line x1='3' y1='9' x2='21' y2='9' />
          <line x1='9' y1='21' x2='9' y2='9' />
        </svg>
      ),
    },
    {
      title: 'Industriebau',
      description:
        'Planung und Bau von Produktionshallen, Lagerhäusern und anderen Industrieanlagen. Wir bieten Lösungen, die auf die spezifischen Bedürfnisse Ihres Unternehmens zugeschnitten sind.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-primary'
        >
          <path d='M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z' />
          <path d='M17 18h1' />
          <path d='M12 18h1' />
          <path d='M7 18h1' />
        </svg>
      ),
    },
    {
      title: 'Renovierung und Sanierung',
      description:
        'Umfassende und teilweise Renovierung von Wohn-, Gewerbe- und Industrieobjekten. Modernisierung bestehender Gebäude mit Fokus auf Verbesserung der Funktionalität und Energieeffizienz.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-primary'
        >
          <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
          <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z' />
        </svg>
      ),
    },
    {
      title: 'Infrastrukturbau',
      description:
        'Bau von Straßen, Brücken, Tunneln und anderen Infrastrukturobjekten. Wir verwenden moderne Technologien und Materialien, um Langlebigkeit und Sicherheit zu gewährleisten.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-primary'
        >
          <path d='M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z' />
          <path d='M12 13v8' />
          <path d='M12 3v3' />
        </svg>
      ),
    },
    {
      title: 'Planung und Beratung',
      description:
        'Wir bieten professionelle Dienstleistungen im Bereich der Architektur- und Ingenieurplanung sowie Beratung zu allen Aspekten des Bauprozesses.',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-primary'
        >
          <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
          <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
        </svg>
      ),
    },
  ];

  return (
    <div className='min-h-screen pt-24 pb-16'>
      {/* Заглавие */}
      <section className='bg-primary text-white py-16 dark:text-black'>
        <div className='container mx-auto px-4 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Unsere Leistungen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-xl max-w-3xl mx-auto'
          >
            Wir bieten ein komplettes Spektrum an Bauleistungen mit hoher
            Qualität und Professionalität
          </motion.p>
        </div>
      </section>

      {/* Списък с услуги */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container mx-auto px-4'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className='h-full'>
                  <CardHeader>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-700 dark:text-gray-300'>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Процес на работа */}
      <section className='py-16 bg-gray-100 dark:bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'
            >
              Unser Arbeitsprozess
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'
            >
              Wir folgen einem strukturierten Ansatz für jedes Projekt, um hohe
              Qualität und Kundenzufriedenheit zu gewährleisten
            </motion.p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-white dark:text-black'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary  flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                1
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Beratung
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Wir beginnen mit einer detaillierten Beratung, um Ihre
                Bedürfnisse, Ziele und Ihr Budget zu verstehen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary  flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                2
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Planung
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Unser Team aus Architekten und Ingenieuren entwickelt einen
                detaillierten Plan, der auf Ihre Anforderungen zugeschnitten
                ist.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary  flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                3
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Ausführung
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Wir setzen das Projekt mit hochwertigen Materialien und strengen
                Qualitäts- und Sicherheitsstandards um.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary  flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                4
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Übergabe
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Nach Abschluss des Projekts führen wir eine detaillierte Prüfung
                durch und übergeben das Objekt in einwandfreiem Zustand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Галерия с проекти */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'
            >
              Unsere Projekte
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'
            >
              Sehen Sie einige unserer erfolgreich abgeschlossenen Projekte
            </motion.p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='relative h-64 rounded-lg overflow-hidden group'
              >
                <Image
                  src='/images/placeholder.jpg'
                  alt={`Projekt ${item}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='text-white text-center p-4'>
                    <h3 className='text-xl font-bold mb-2'>Projekt {item}</h3>
                    <p>Kurze Beschreibung des Projekts</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
