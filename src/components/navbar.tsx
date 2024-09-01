"use client";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import DisplayAddon from './addons/display'; 
import AboutAddon from './addons/about';
import TermsAddon from './addons/terms';

interface NavbarComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({ isOpen, onClose }) => {
    const [isNavbarOpenDisplay, setIsNavbarOpen] = useState(false);
    const [isNavbarOpenAbout, setIsNavbarOpenAbout] = useState(false);
    const [isNavbarOpenTerms, setIsNavbarOpenTerms] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpenDisplay);
  };

  const handleCloseNavbar = () => {
    setIsNavbarOpen(false);
  };

  const handleToggleNavbarAbout = () => {
    setIsNavbarOpenAbout(!isNavbarOpenDisplay);
  };

  const handleCloseNavbarAbout = () => {
    setIsNavbarOpenAbout(false);
  };

  const handleToggleNavbarTerms = () => {
    setIsNavbarOpenTerms(!isNavbarOpenDisplay);
  };

  const handleCloseNavbarTerms = () => {
    setIsNavbarOpenTerms(false);
  };

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

  return (
    <div
      className={`fixed top-0 right-0 navbar w-full h-full transform lg:-96 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}>
        
      <div className='2xl:pl-96 2xl:pr-96'>
      <div className="flex items-center justify-between p-4 ">
        <Image src={'/qr-buddy-icon.png'} alt='' width={60} height={60}></Image>
        <span className='font-bold'>Qr Code Generator</span>
        <button onClick={onClose} className="text-white">
            <svg className='ofill' width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0.546875C5.20156 0.546875 0.5 5.24844 0.5 11.0469C0.5 16.8453 5.20156 21.5469 11 21.5469C16.7984 21.5469 21.5 16.8453 21.5 11.0469C21.5 5.24844 16.7984 0.546875 11 0.546875ZM16.0766 14.5859C16.1469 14.6562 16.1844 14.75 16.1844 14.8484C16.1844 14.9469 16.1469 15.0453 16.0766 15.1109L15.0641 16.1281C14.9891 16.2031 14.8953 16.2359 14.8016 16.2359C14.7078 16.2359 14.6094 16.1984 14.5391 16.1281L11 12.5844L7.46563 16.1328C7.39531 16.2078 7.29688 16.2406 7.20312 16.2406C7.10938 16.2406 7.01094 16.2031 6.94062 16.1328L5.92813 15.1156C5.85781 15.0453 5.82031 14.9516 5.82031 14.8531C5.82031 14.7547 5.85781 14.6563 5.92813 14.5906L9.47656 11.0281L5.91875 7.5125C5.77344 7.36719 5.77344 7.12813 5.91875 6.98281L6.93125 5.96563C7.00156 5.89531 7.09531 5.85781 7.19375 5.85781C7.29219 5.85781 7.38594 5.89531 7.45625 5.96563L11.0047 9.46719L14.5531 5.96563C14.6234 5.89531 14.7172 5.85781 14.8156 5.85781C14.9141 5.85781 15.0078 5.89531 15.0781 5.96563L16.0906 6.98281C16.2359 7.12813 16.2359 7.36719 16.0906 7.5125L12.5328 11.0281L16.0766 14.5859Z"/>
            </svg>
        </button>
      </div>

      <div className='p-4 w-full flex flex-col'>
        <div className='w-full flex flex-col'>
            <span className='text-sm'>Pages</span>
            <div className='mt-3 w-full flex flex-col bg-[#4A4A4A] rounded-lg border-[#4A4A4A] border-2'>
                <button onClick={handleToggleNavbarAbout} className='bg-[#4A4A4A] hover:bg-[#535353] w-full p-4 flex items-center justify-between text-white'>
                    <svg className='w-5 mr-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM9.5 3C9.79668 3 10.0867 3.08797 10.3334 3.2528C10.58 3.41762 10.7723 3.65189 10.8858 3.92597C10.9994 4.20006 11.0291 4.50166 10.9712 4.79264C10.9133 5.08361 10.7704 5.35088 10.5607 5.56066C10.3509 5.77044 10.0836 5.9133 9.79264 5.97118C9.50167 6.02906 9.20007 5.99935 8.92598 5.88582C8.65189 5.77229 8.41762 5.58003 8.2528 5.33336C8.08798 5.08668 8 4.79667 8 4.5C8 4.10218 8.15804 3.72064 8.43934 3.43934C8.72065 3.15804 9.10218 3 9.5 3ZM12 16H11C10.4696 16 9.96086 15.7893 9.58579 15.4142C9.21072 15.0391 9 14.5304 9 14V10C8.73479 10 8.48043 9.89464 8.2929 9.70711C8.10536 9.51957 8 9.26522 8 9C8 8.73478 8.10536 8.48043 8.2929 8.29289C8.48043 8.10536 8.73479 8 9 8H10C10.2652 8 10.5196 8.10536 10.7071 8.29289C10.8946 8.48043 11 8.73478 11 9V14H12C12.2652 14 12.5196 14.1054 12.7071 14.2929C12.8946 14.4804 13 14.7348 13 15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16Z" fill="#DADADA"/>
                    </svg>
                    <span className='w-full flex'>About</span>
                    <svg className='w-2.5' viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.9375 2.77734L3.14551 0.5625L14.0625 11.5L3.14551 22.4375L0.9375 20.2227L9.63965 11.5L0.9375 2.77734Z" fill="#DADADA"/>
                    </svg>
                </button>
                <button onClick={handleToggleNavbarTerms} className='bg-[#4A4A4A] hover:bg-[#535353] w-full p-4 flex items-center justify-between text-white'>
                    <svg className='w-5 mr-4' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.0001 23.001C32.0001 19.084 29.4941 15.761 26.0021 14.524V4H24.0021V1.999H26.0021V0H3.00206C2.91806 0.004 2.29406 -0.00799999 1.55606 0.354C0.808055 0.686 -0.0339445 1.645 0.00105545 3C0.00105545 3.006 0.00205545 3.012 0.00205545 3.018V30C0.00205545 32 2.00206 32 2.00206 32H23.0831L23.0761 31.996C28.0131 31.955 32.0001 27.946 32.0001 23.001ZM2.85306 3.981C2.67506 3.955 2.41806 3.869 2.27406 3.743C2.13606 3.609 2.01706 3.5 2.00206 3C2.03506 2.354 2.19606 2.314 2.44906 2.144C2.57906 2.079 2.73806 2.037 2.85306 2.019C2.97006 1.997 3.00006 2.005 3.00206 1.999H22.0021V4H3.00206C3.00006 4 2.97006 4.002 2.85306 3.981ZM4.00006 30V6H24.0001V14.06C23.6711 14.023 23.3371 14 22.9981 14C20.8561 14 18.8921 14.751 17.3471 16H6.00006V18H15.5161C15.1031 18.616 14.7731 19.289 14.5211 20H6.00006V22H14.0571C14.0211 22.329 13.9981 22.662 13.9981 23.001C13.9981 25.83 15.3051 28.351 17.3461 30H4.00006ZM23.0001 30C19.1351 29.992 16.0061 26.865 16.0001 23.001C16.0061 19.136 19.1351 16.006 23.0001 16C26.8651 16.006 29.9921 19.136 30.0001 23.001C29.9921 26.865 26.8651 29.992 23.0001 30ZM22.0001 12H6.00006V14H22.0001V12Z" fill="#DADADA"/>
                        <path d="M26.144 22.001C26.152 21.87 26.158 21.734 26.158 21.592C26.152 20.914 26.07 20.101 25.602 19.334C25.145 18.555 24.164 17.974 23 18.001C21.835 17.974 20.852 18.555 20.395 19.334C19.925 20.101 19.843 20.914 19.839 21.592C19.839 21.735 19.845 21.87 19.853 22.001H19V27H27V22.001H26.144ZM21.837 21.592C21.833 21.114 21.93 20.634 22.091 20.394C22.264 20.167 22.361 20.029 23 20.001C23.637 20.028 23.73 20.165 23.904 20.394C24.066 20.634 24.163 21.117 24.157 21.592C24.157 21.737 24.149 21.872 24.138 22.001H21.856C21.846 21.87 21.837 21.733 21.837 21.592Z" fill="white"/>
                    </svg>
                    <span className='w-full flex'>Terms and Policies</span>
                    <svg className='w-2.5' viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.9375 2.77734L3.14551 0.5625L14.0625 11.5L3.14551 22.4375L0.9375 20.2227L9.63965 11.5L0.9375 2.77734Z" fill="#DADADA"/>
                    </svg>
                </button>
            </div>
        </div>

        <div className='w-full flex flex-col mt-5'>
            <span className='text-sm'>Content and Display</span>
            <div className='mt-3 w-full flex flex-col bg-[#4A4A4A] rounded-lg border-[#4A4A4A] border-2'>
                <button onClick={handleToggleNavbar} className='bg-[#4A4A4A] hover:bg-[#535353] w-full p-4 flex items-center justify-between text-white'>
                    <svg className='w-5 mr-4' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 18V2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18Z" fill="#DADADA"/>
                    </svg>
                    <span className='w-full items-start justify-start flex'>Display</span>
                    <svg className='w-2.5' viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.9375 2.77734L3.14551 0.5625L14.0625 11.5L3.14551 22.4375L0.9375 20.2227L9.63965 11.5L0.9375 2.77734Z" fill="#DADADA"/>
                    </svg>
                </button>
            </div>
        </div>
      </div>
      </div>

      <div>
        <DisplayAddon isOpen={isNavbarOpenDisplay} onClose={handleCloseNavbar}></DisplayAddon>
      </div>
      <div>
        <AboutAddon isOpen={isNavbarOpenAbout} onClose={handleCloseNavbarAbout}></AboutAddon>
      </div>
      <div>
        <TermsAddon isOpen={isNavbarOpenTerms} onClose={handleCloseNavbarTerms}></TermsAddon>
      </div>
    </div>
  );
};

export default NavbarComponent;
