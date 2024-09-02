import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface TermsComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsAddon: React.FC<TermsComponentProps> = ({ isOpen, onClose }) => {
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
        <main className={`fixed top-0 right-0 w-full h-full transform lg:-96 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className='2xl:pl-96 2xl:pr-96  h-full'>
                <div className="flex items-center justify-between p-4">
                    <button onClick={onClose} >
                        <svg className='ofill' width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.002 9.99999C19.002 10.5522 18.5547 11 18.002 11H3.8672L8.8301 18.4453C9.1367 18.9048 9.0127 19.5259 8.5528 19.832C8.3818 19.9458 8.1895 20 7.999 20C7.6758 20 7.3584 19.8437 7.166 19.5547L0.795898 9.99999L7.166 0.445287C7.4717 -0.0147127 8.0908 -0.139213 8.5527 0.167987C9.0127 0.474187 9.1367 1.09519 8.83 1.55469L3.8672 8.99999H18.002C18.5547 8.99999 19.002 9.44779 19.002 9.99999Z" />
                        </svg>
                    </button>
                    <span className='font-bold text-lg w-full ml-4'>Terms and Policies</span>
                </div>

                <div className='p-4'>
                    <div>
                        <span className='text-xs w-40 bg-[#4A4A4A] text-white p-4 pb-1 pt-1'>All Regions</span>
                        <h1 className='text-4xl font-bold mt-3 mb-2'>Privacy Policy</h1>
                        <em className=''>Last updated: Sep 02, 2024</em>
                    </div>
                </div>

                <div className='bgr w-full h-full overflow-y-auto flex-wrap rounded-t-lg p-5'>
                    <div className='mt-5 flex flex-col'>
                        <em className='mb-4'>What information we collect</em>
                        <em className='mb-4'>The security of your information</em>
                    </div>

                    <div className='mt-8'>
                        <span>
                            Welcome to Qr Code Generator, This Privacy Policy are committed
                            to protecting and respecting your privacy, This Privacy Policy explains about our Policy
                        </span>
                    </div>

                    <div className='mt-12'>
                        <h1 className='font-bold text-3xl mb-2'>What information we collect</h1>
                        <span>
                        We may store some of your user data in cookies, so you can comfortably use darkmode and lightmode
                        features without creating an account on our website
                        </span>
                    </div>

                    <div className='mt-12'>
                        <h1 className='font-bold text-3xl mb-2'>The security of your information</h1>
                        <span>
                            We take steps to ensure that your information is treated securely and in accordance
                            with this policy.
                        </span>
                    </div>

                    <div className='mt-12'>

                    </div>
                                      
                </div>
            </div>
        </main>
    );
}

export default TermsAddon;
