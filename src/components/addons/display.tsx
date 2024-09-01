import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface DisplayComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

const DisplayAddon: React.FC<DisplayComponentProps> = ({ isOpen, onClose }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // Cek cookie saat komponen dimuat untuk menetapkan tema
        const storedTheme = Cookies.get('theme');
        if (storedTheme === 'dark') {
            setTheme('dark');
            document.body.classList.add('dark-theme');
        } else {
            setTheme('light');
            document.body.classList.add('light-theme');
        }
    }, []);

    const handleThemeChange = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
        if (newTheme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            Cookies.set('theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            Cookies.set('theme', 'dark');
        }
    };

    return (
        <main className={`fixed top-0 right-0 w-full h-full transform lg:-96 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-between p-4">
                <button onClick={onClose} >
                    <svg className='ofill' width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.002 9.99999C19.002 10.5522 18.5547 11 18.002 11H3.8672L8.8301 18.4453C9.1367 18.9048 9.0127 19.5259 8.5528 19.832C8.3818 19.9458 8.1895 20 7.999 20C7.6758 20 7.3584 19.8437 7.166 19.5547L0.795898 9.99999L7.166 0.445287C7.4717 -0.0147127 8.0908 -0.139213 8.5527 0.167987C9.0127 0.474187 9.1367 1.09519 8.83 1.55469L3.8672 8.99999H18.002C18.5547 8.99999 19.002 9.44779 19.002 9.99999Z" />
                    </svg>
                </button>
                <span className='font-bold text-lg w-full ml-4'>Display Mode</span>
            </div>

            <div className='flex flex-col p-4'>
                <span className='text-sm'>Appearance</span>
                <div className='border-[#4A4A4A] border-2 rounded-lg mt-3'>
                    <button onClick={() => handleThemeChange('light')} className='bg-[#4A4A4A] hover:bg-[#535353] w-full p-4 flex items-center justify-between text-white'>
                        <svg className='w-5 mr-4' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 18V2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18Z" fill="#DADADA"/>
                        </svg>
                        <span className='w-full flex'>Lightmode</span>
                        {theme === 'light' && (
                            <svg className='w-5 h-5 text-white' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>
                    <button onClick={() => handleThemeChange('dark')} className='bg-[#4A4A4A] hover:bg-[#535353] w-full p-4 flex items-center justify-between text-white'>
                        <svg className='w-5 mr-4' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 18V2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18Z" fill="#DADADA"/>
                        </svg>
                        <span className='w-full flex'>Darkmode</span>
                        {theme === 'dark' && (
                            <svg className='w-5 h-5 text-white' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </main>
    );
}

export default DisplayAddon;
