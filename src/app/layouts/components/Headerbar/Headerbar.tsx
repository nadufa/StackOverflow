import { Button, Layout } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CodeIcon, LanguageIcon } from '../../../../assets/svg';
import { RoutePath } from '../../../routing';

const { Header } = Layout;

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'RU', label: 'Русский' },
];

export const Headerbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Header className='flex justify-between items-center !px-4 h-16 !bg-(color:--primary-color)'>
      <div
        className='flex flex-row items-center gap-2 text-white text-lg font-bold cursor-pointer'
        onClick={() => navigate(RoutePath.BASE)}
      >
        <CodeIcon width={40} height={40} />
        <span className='text-sm font-light'>CODELAND</span>
      </div>

      <div className='flex flex-row items-center'>
        <Button className='!mr-2' onClick={() => navigate(RoutePath.CREATE_QUESTION)}>
          Ask question
        </Button>
        <Button onClick={() => navigate(RoutePath.LOGIN)}>Sign out</Button>

        <div className='relative !ml-4' ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className='flex flex-row gap-1 items-center cursor-pointer rounded hover:bg-white/10 transition'
          >
            <LanguageIcon width={20} height={20} />
            <span className='text-white text-xs font-light'>{selected.code}</span>
          </button>

          {open && (
            <div className='absolute right-0 !mt-2 w-12 bg-white rounded-md shadow-lg border z-50'>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                  className={`w-full text-xs text-center hover:bg-gray-100 ${
                    selected.code === lang.code ? 'font-semibold bg-gray-50' : ''
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Header>
  );
};
