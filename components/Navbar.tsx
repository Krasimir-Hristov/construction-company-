'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Проверка дали страницата е активна
  const isActive = (path: string) => pathname === path;

  // Превключване между светъл и тъмен режим
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  // Проверка за скролиране
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Инициализиране на темата от localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 shadow-md py-2' : 'bg-gray-800/80 py-4'
      }`}
    >
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold text-white'>
          BauTech
        </Link>

        {/* Мобилно меню */}
        <div className='md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='border-gray-600 bg-white text-black dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
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
                  <line x1='3' y1='6' x2='21' y2='6' />
                  <line x1='3' y1='12' x2='21' y2='12' />
                  <line x1='3' y1='18' x2='21' y2='18' />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='bg-white  dark:bg-gray-800 border-gray-300 dark:border-gray-700'
            >
              <DropdownMenuItem
                asChild
                className='focus:bg-gray-100 dark:focus:bg-gray-700'
              >
                <Link
                  href='/'
                  className={`w-full ${
                    isActive('/')
                      ? 'bg-primary/10 text-black font-bold dark:bg-primary/30 dark:text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  Startseite
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className='focus:bg-gray-100 dark:focus:bg-gray-700'
              >
                <Link
                  href='/about'
                  className={`w-full ${
                    isActive('/about')
                      ? 'bg-primary/10 text-black font-bold dark:bg-primary/30 dark:text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  Über uns
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className='focus:bg-gray-100 dark:focus:bg-gray-700'
              >
                <Link
                  href='/services'
                  className={`w-full ${
                    isActive('/services')
                      ? 'bg-primary/10 text-black font-bold dark:bg-primary/30 dark:text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  Leistungen
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className='focus:bg-gray-100 dark:focus:bg-gray-700'
              >
                <Link
                  href='/contact'
                  className={`w-full ${
                    isActive('/contact')
                      ? 'bg-primary/10 text-black font-bold dark:bg-primary/30 dark:text-white'
                      : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  Kontakt
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Десктоп меню */}
        <div className='hidden md:flex items-center space-x-8'>
          <Link
            href='/'
            className={`transition-colors relative py-2 ${
              isActive('/')
                ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Startseite
          </Link>
          <Link
            href='/about'
            className={`transition-colors relative py-2 ${
              isActive('/about')
                ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Über uns
          </Link>
          <Link
            href='/services'
            className={`transition-colors relative py-2 ${
              isActive('/services')
                ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Leistungen
          </Link>
          <Link
            href='/contact'
            className={`transition-colors relative py-2 ${
              isActive('/contact')
                ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Kontakt
          </Link>
        </div>

        {/* Бутон за превключване на темата */}
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleTheme}
          className='ml-4 text-gray-100 hover:bg-gray-700'
        >
          {theme === 'light' ? (
            <Moon className='h-5 w-5' />
          ) : (
            <Sun className='h-5 w-5' />
          )}
        </Button>
      </div>
    </nav>
  );
}
