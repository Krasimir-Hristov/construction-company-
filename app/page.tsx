'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
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

  return (
    <div className='min-h-screen'>
      {/* Герой секция */}
      <section className='relative h-screen flex items-center'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/placeholder.jpg'
            alt='Строителна компания'
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className='absolute inset-0 bg-black/50' />
        </div>

        <div className='container mx-auto px-4 z-10 text-white'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-3xl'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Изграждаме бъдещето с качество и прецизност
            </h1>
            <p className='text-xl mb-8 text-gray-200'>
              СтроиТех е вашият надежден партньор за всички видове строителни
              проекти - от малки ремонти до мащабни строителни обекти.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                asChild
                size='lg'
                className='bg-primary hover:bg-primary/90'
              >
                <Link href='/services'>Нашите услуги</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-white text-black dark:text-white hover:bg-white/10'
              >
                <Link href='/contact'>Свържете се с нас</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Представяне на компанията */}
      <section className='py-20 bg-white dark:bg-gray-950'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>
                За СтроиТех
              </h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                С над 15 години опит в строителния бранш, СтроиТех се утвърди
                като лидер на пазара, предлагащ висококачествени строителни
                услуги за жилищни, търговски и индустриални проекти.
              </p>
              <p className='text-gray-700 dark:text-gray-300 mb-6'>
                Нашият екип от опитни професионалисти е отдаден на качеството,
                безопасността и удовлетвореността на клиентите. Използваме
                най-съвременни технологии и материали, за да гарантираме
                дълготрайност и устойчивост на всеки проект.
              </p>
              <Button asChild>
                <Link href='/about'>Научете повече за нас</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='relative h-[400px] rounded-lg overflow-hidden'
            >
              <Image
                src='/images/placeholder.jpg'
                alt='Строителна компания'
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Анимирана секция с функции */}
      <section className='py-20 bg-gray-100 dark:bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
              Защо да изберете нас?
            </h2>
            <p className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
              Предлагаме комплексни строителни решения, съобразени с вашите
              нужди и бюджет. Ето защо клиентите ни се доверяват:
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
          >
            {/* Карта 1 */}
            <motion.div variants={itemVariants}>
              <Card className='h-full'>
                <CardHeader>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
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
                      <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10' />
                    </svg>
                  </div>
                  <CardTitle>Качество и надеждност</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Използваме само висококачествени материали и прилагаме
                    строги стандарти за качество във всеки етап от строителния
                    процес.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Карта 2 */}
            <motion.div variants={itemVariants}>
              <Card className='h-full'>
                <CardHeader>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
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
                      <circle cx='12' cy='12' r='10' />
                      <polyline points='12 6 12 12 16 14' />
                    </svg>
                  </div>
                  <CardTitle>Спазване на сроковете</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Разбираме важността на времето и се ангажираме да завършим
                    всеки проект в договорения срок, без компромис с качеството.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Карта 3 */}
            <motion.div variants={itemVariants}>
              <Card className='h-full'>
                <CardHeader>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
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
                      <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
                      <circle cx='9' cy='7' r='4' />
                      <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
                      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
                    </svg>
                  </div>
                  <CardTitle>Опитен екип</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-700 dark:text-gray-300'>
                    Нашият екип от висококвалифицирани специалисти има
                    дългогодишен опит в различни аспекти на строителството и
                    непрекъснато се усъвършенства.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Призив за действие */}
      <section className='py-16 bg-primary text-white dark:text-black'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Готови ли сте да започнем вашия проект?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Свържете се с нас днес за безплатна консултация и оферта за вашия
            строителен проект.
          </p>
          <Button
            asChild
            size='lg'
            variant='outline'
            className='border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-primary'
          >
            <Link href='/contact'>Свържете се с нас</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
