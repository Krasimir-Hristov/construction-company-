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
          СтроиТех
        </Link>

        {/* Мобилно меню */}
        <div className='md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='border-gray-600 text-gray-100'
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
            <DropdownMenuContent align='end'>
              <DropdownMenuItem asChild>
                <Link
                  href='/'
                  className={`w-full ${
                    isActive('/')
                      ? 'bg-primary/30 text-white font-bold'
                      : 'text-gray-200'
                  }`}
                >
                  Начало
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href='/about'
                  className={`w-full ${
                    isActive('/about')
                      ? 'bg-primary/30 text-white font-bold'
                      : 'text-gray-200'
                  }`}
                >
                  За нас
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href='/services'
                  className={`w-full ${
                    isActive('/services')
                      ? 'bg-primary/30 text-white font-bold'
                      : 'text-gray-200'
                  }`}
                >
                  Услуги
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href='/contact'
                  className={`w-full ${
                    isActive('/contact')
                      ? 'bg-primary/30 text-white font-bold'
                      : 'text-gray-200'
                  }`}
                >
                  Контакти
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
            Начало
          </Link>
          <Link
            href='/about'
            className={`transition-colors relative py-2 ${
              isActive('/about')
                ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            За нас
          </Link>
          <Link
            href='/services'
            className={`transition-colors relative py-2 ${
              isActive('/services')
                ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Услуги
          </Link>
          <Link
            href='/contact'
            className={`transition-colors relative py-2 ${
              isActive('/contact')
                ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Контакти
          </Link>
        </div>

        {/* Бутон за превключване на темата */}
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleTheme}
          className='ml-4 text-gray-100'
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
