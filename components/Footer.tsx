import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Лого и описание */}
          <div className='col-span-1 md:col-span-2'>
            <Link href='/' className='text-2xl font-bold text-primary'>
              BauTech
            </Link>
            <p className='mt-4 text-gray-600 dark:text-gray-400'>
              Ihr zuverlässiger Partner im Bauwesen. Wir bieten hochwertige
              Bauleistungen mit Liebe zum Detail und Termintreue.
            </p>
          </div>

          {/* Бързи връзки */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Schnelllinks</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакти */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Kontakt</h3>
            <ul className='space-y-2'>
              <li className='text-gray-600 dark:text-gray-400'>
                <span className='font-medium'>Adresse:</span> Baustraße 123,
                Berlin
              </li>
              <li className='text-gray-600 dark:text-gray-400'>
                <span className='font-medium'>Telefon:</span> +49 30 1234567
              </li>
              <li className='text-gray-600 dark:text-gray-400'>
                <span className='font-medium'>E-Mail:</span> info@bautech.de
              </li>
            </ul>

            {/* Социални медии */}
            <div className='mt-4 flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
              >
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
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                </svg>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
              >
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
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                </svg>
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
              >
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
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
              >
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
                >
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Авторски права */}
        <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400'>
          <p>© {new Date().getFullYear()} BauTech. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
