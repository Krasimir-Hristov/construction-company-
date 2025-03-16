'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симулиране на изпращане на форма
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Нулиране на съобщението за успешно изпращане след 5 секунди
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-xl max-w-3xl mx-auto'
          >
            Wir freuen uns, von Ihnen zu hören
          </motion.p>
        </div>
      </section>

      {/* Контактна информация и форма */}
      <section className='py-16 bg-white dark:bg-gray-950'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Контактна информация */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl font-bold mb-8 text-gray-900 dark:text-white'>
                Kontaktinformationen
              </h2>

              <div className='space-y-8'>
                <Card>
                  <CardContent className='pt-6'>
                    <div className='flex items-start'>
                      <div className='mr-4 mt-1'>
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
                          <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                          <circle cx='12' cy='10' r='3' />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>Adresse</h3>
                        <p className='text-gray-700 dark:text-gray-300'>
                          Baustraße 123, 10115 Berlin
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='pt-6'>
                    <div className='flex items-start'>
                      <div className='mr-4 mt-1'>
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
                          <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>Telefon</h3>
                        <p className='text-gray-700 dark:text-gray-300'>
                          +49 30 1234567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='pt-6'>
                    <div className='flex items-start'>
                      <div className='mr-4 mt-1'>
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
                          <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                          <polyline points='22,6 12,13 2,6' />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>E-Mail</h3>
                        <p className='text-gray-700 dark:text-gray-300'>
                          info@bautech.de
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='pt-6'>
                    <div className='flex items-start'>
                      <div className='mr-4 mt-1'>
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
                      <div>
                        <h3 className='text-lg font-semibold mb-2'>
                          Öffnungszeiten
                        </h3>
                        <p className='text-gray-700 dark:text-gray-300'>
                          Montag - Freitag: 9:00 - 18:00 Uhr
                          <br />
                          Samstag: 10:00 - 14:00 Uhr
                          <br />
                          Sonntag: Geschlossen
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Контактна форма */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl font-bold mb-8 text-gray-900 dark:text-white'>
                Schreiben Sie uns
              </h2>

              <Card>
                <CardContent className='pt-6'>
                  {isSubmitted ? (
                    <div className='bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md mb-6'>
                      <p className='font-medium'>
                        Vielen Dank für Ihre Nachricht!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className='space-y-6'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                          <Label htmlFor='name'>Name</Label>
                          <Input
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Ihr Name'
                            required
                          />
                        </div>

                        <div className='space-y-2'>
                          <Label htmlFor='email'>E-Mail</Label>
                          <Input
                            id='email'
                            name='email'
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='ihre-email@beispiel.de'
                            required
                          />
                        </div>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                          <Label htmlFor='phone'>Telefon</Label>
                          <Input
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='+49 123 456789'
                          />
                        </div>

                        <div className='space-y-2'>
                          <Label htmlFor='subject'>Betreff</Label>
                          <Input
                            id='subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder='Betreff Ihrer Nachricht'
                            required
                          />
                        </div>
                      </div>

                      <div className='space-y-2'>
                        <Label htmlFor='message'>Nachricht</Label>
                        <textarea
                          id='message'
                          name='message'
                          value={formData.message}
                          onChange={handleChange}
                          placeholder='Ihre Nachricht'
                          className='w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                          required
                        />
                      </div>

                      <Button
                        type='submit'
                        className='w-full'
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? 'Nachricht senden...'
                          : 'Nachricht senden'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className='py-16 bg-gray-100 dark:bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
              Besuchen Sie uns
            </h2>
            <p className='text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
              Wir sind zentral gelegen und leicht zu erreichen
            </p>
          </div>

          <div className='relative h-[400px] rounded-lg overflow-hidden'>
            {/* Тук би трябвало да има карта, но използваме placeholder изображение */}
            <div className='absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center'>
              <p className='text-gray-600 dark:text-gray-300 text-lg font-medium'>
                Hier wird eine interaktive Karte angezeigt
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
