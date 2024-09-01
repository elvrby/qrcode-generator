"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import NavbarComponent from "./navbar";

const HeaderCom: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleCloseNavbar = () => {
    setIsNavbarOpen(false);
  };

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = Cookies.get('theme');
    if (storedTheme === 'dark') {
      setTheme('dark');
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      setTheme('light');
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, []);

  

  return (
    <div>
      <main className="w-full flex items-center justify-between pl-6 pr-6 p-3 bg-white shadow-md 2xl:pl-80 2xl:pr-80">
        <div className="flex items-center">
          <Image src={`${theme === 'light' ? '/qr-buddy-light.png' : '/qr-buddy-dark.png'}?${new Date().getTime()}`} alt="qr-buddy" width={50} height={50} />
        </div>
        <div className="flex-1 text-center font-semibold text-lg">
          <h1>QR GENERATOR</h1>
        </div>
        <button className="flex items-center justify-end" onClick={handleToggleNavbar}>
          <svg width={25}viewBox="0 0 13 8"fill="none"xmlns="http://www.w3.org/2000/svg"className="ofill">
            <path d="M12.5149 0.936037H0.485074C0.356425 0.936037 0.233044 0.886728 0.142075 0.798958C0.0511059 0.711187 0 0.592145 0 0.468019C0 0.343892 0.0511059 0.22485 0.142075 0.137079C0.233044 0.0493086 0.356425 0 0.485074 0H12.5149C12.6436 0 12.767 0.0493086 12.8579 0.137079C12.9489 0.22485 13 0.343892 13 0.468019C13 0.592145 12.9489 0.711187 12.8579 0.798958C12.767 0.886728 12.6436 0.936037 12.5149 0.936037Z"/>
            <path d="M12.5149 4.46802H0.485075C0.356425 4.46802 0.233044 4.41871 0.142075 4.33094C0.051106 4.24317 6.46176e-08 4.12413 6.46176e-08 4C6.46176e-08 3.87587 0.051106 3.75683 0.142075 3.66906C0.233044 3.58129 0.356425 3.53198 0.485075 3.53198H12.5149C12.6436 3.53198 12.767 3.58129 12.8579 3.66906C12.9489 3.75683 13 3.87587 13 4C13 4.12413 12.9489 4.24317 12.8579 4.33094C12.767 4.41871 12.6436 4.46802 12.5149 4.46802Z"/>
            <path d="M12.5149 8H0.485075C0.356425 8 0.233044 7.95069 0.142075 7.86292C0.051106 7.77515 6.46176e-08 7.65611 6.46176e-08 7.53198C6.46176e-08 7.40785 0.051106 7.28881 0.142075 7.20104C0.233044 7.11327 0.356425 7.06396 0.485075 7.06396H12.5149C12.6436 7.06396 12.767 7.11327 12.8579 7.20104C12.9489 7.28881 13 7.40785 13 7.53198C13 7.65611 12.9489 7.77515 12.8579 7.86292C12.767 7.95069 12.6436 8 12.5149 8Z"/>
          </svg>
        </button>
      </main>
      <NavbarComponent isOpen={isNavbarOpen} onClose={handleCloseNavbar} />
    </div>
  );
};

export default HeaderCom;
