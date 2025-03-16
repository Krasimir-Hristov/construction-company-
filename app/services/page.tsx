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
      title: 'Жилищно строителство',
      description:
        'Изграждане на еднофамилни и многофамилни жилищни сгради с високо качество и внимание към детайла. Предлагаме цялостни решения от проектиране до изпълнение.',
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
      title: 'Търговско строителство',
      description:
        'Изграждане на офис сгради, търговски центрове, хотели и други търговски обекти. Фокусираме се върху функционалност, естетика и енергийна ефективност.',
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
      title: 'Индустриално строителство',
      description:
        'Проектиране и изграждане на производствени халета, складове и други индустриални обекти. Осигуряваме решения, съобразени с конкретните нужди на вашия бизнес.',
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
      title: 'Реконструкция и ремонти',
      description:
        'Цялостни и частични ремонти на жилищни, търговски и индустриални обекти. Модернизиране на съществуващи сгради с фокус върху подобряване на функционалността и енергийната ефективност.',
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
      title: 'Инфраструктурно строителство',
      description:
        'Изграждане на пътища, мостове, тунели и други инфраструктурни обекти. Използваме съвременни технологии и материали за осигуряване на дълготрайност и безопасност.',
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
      title: 'Проектиране и консултации',
      description:
        'Предлагаме професионални услуги в областта на архитектурното и инженерното проектиране, както и консултации по всички аспекти на строителния процес.',
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
      <section className='bg-primary text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Нашите услуги
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-xl max-w-3xl mx-auto'
          >
            Предлагаме пълен спектър от строителни услуги с високо качество и
            професионализъм
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
              Нашият процес на работа
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'
            >
              Следваме структуриран подход към всеки проект, за да гарантираме
              високо качество и удовлетвореност на клиентите
            </motion.p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                1
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Консултация
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Започваме с детайлна консултация, за да разберем вашите нужди,
                цели и бюджет.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                2
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Проектиране
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Нашият екип от архитекти и инженери разработва детайлен проект,
                съобразен с вашите изисквания.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                3
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Изпълнение
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                Реализираме проекта с висококачествени материали и строги
                стандарти за качество и безопасност.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-center'
            >
              <div className='w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                4
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                Предаване
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                След завършване на проекта, извършваме детайлна проверка и
                предаваме обекта в перфектно състояние.
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
              Нашите проекти
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'
            >
              Разгледайте някои от нашите успешно завършени проекти
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
                  alt={`Проект ${item}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='text-white text-center p-4'>
                    <h3 className='text-xl font-bold mb-2'>Проект {item}</h3>
                    <p>Кратко описание на проекта</p>
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
