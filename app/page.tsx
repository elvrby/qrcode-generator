"use client"

import { useState } from 'react';
import Image from 'next/image';
import HeaderCom from '@/src/components/header';
import FooterComponent from '@/src/components/footer';

export default function Home() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQrCode = async () => {
    if (!url) return;

    const response = await fetch(`/api/generateQrCode?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (data.qrCode) {
      setQrCode(data.qrCode);
    }
  };

  return (
    <div className='bg-white h-screen text-black flex flex-col'>

        <HeaderCom></HeaderCom>

      <div className='flex-grow w-full flex justify-center'>
        <div className='mt-5 text-xl w-11/12 2xl:w-8/12'>
        <h1 className='text-3xl font-bold mt-10'>Generate a QR Code</h1>
        <div className='w-full flex flex-col mt-10 text-base'>
          <span>URL</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            className='p-2 w-2/4 h-10 bg-[#f3f3f3] border border-[#dfdfdf]'
          />
          <span>This is what your QR code will link to.</span>
        </div>
        <button onClick={generateQrCode} className='w-52 bg-slate-800 text-white p-2 rounded-md mt-4'>
          Generate
        </button>

        {qrCode && (
          <div className='mt-5 justify-center flex flex-col'>
            <div>
              <h2>Your QR Code:</h2>
              <Image src={qrCode} alt="QR Code" width={200} height={200} />
            </div>
            <div>
              <a 
                href={qrCode} 
                download="qr-code.png" 
                className='w-52 border-2 border-slate-800 text-black p-2 rounded-md mt-4 block text-center text-base hover:bg-slate-800 hover:text-white'
              >
                Download QR Code
              </a>
            </div>

          </div>
        )}
        </div>
      </div>
      <div>
          <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}
