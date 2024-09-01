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
                <span className='font-bold'>Display Mode</span>
                <button onClick={onClose} >
                    <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='ofill' d="M11 0.546875C5.20156 0.546875 0.5 5.24844 0.5 11.0469C0.5 16.8453 5.20156 21.5469 11 21.5469C16.7984 21.5469 21.5 16.8453 21.5 11.0469C21.5 5.24844 16.7984 0.546875 11 0.546875ZM16.0766 14.5859C16.1469 14.6562 16.1844 14.75 16.1844 14.8484C16.1844 14.9469 16.1469 15.0453 16.0766 15.1109L15.0641 16.1281C14.9891 16.2031 14.8953 16.2359 14.8016 16.2359C14.7078 16.2359 14.6094 16.1984 14.5391 16.1281L11 12.5844L7.46563 16.1328C7.39531 16.2078 7.29688 16.2406 7.20312 16.2406C7.10938 16.2406 7.01094 16.2031 6.94062 16.1328L5.92813 15.1156C5.85781 15.0453 5.82031 14.9516 5.82031 14.8531C5.82031 14.7547 5.85781 14.6563 5.92813 14.5906L9.47656 11.0281L5.91875 7.5125C5.77344 7.36719 5.77344 7.12813 5.91875 6.98281L6.93125 5.96563C7.00156 5.89531 7.09531 5.85781 7.19375 5.85781C7.29219 5.85781 7.38594 5.89531 7.45625 5.96563L11.0047 9.46719L14.5531 5.96563C14.6234 5.89531 14.7172 5.85781 14.8156 5.85781C14.9141 5.85781 15.0078 5.89531 15.0781 5.96563L16.0906 6.98281C16.2359 7.12813 16.2359 7.36719 16.0906 7.5125L12.5328 11.0281L16.0766 14.5859Z"/>
                    </svg>
                </button>
            </div>

            <div className='flex flex-col'>
                <button onClick={() => handleThemeChange('light')}>Light Mode</button>
                <button onClick={() => handleThemeChange('dark')}>Dark Mode</button>
            </div>
        </main>
    );
}

export default DisplayAddon;
