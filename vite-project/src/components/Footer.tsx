import facebookLogo from '../assets/facebook-white.svg'
import instagramLogo from '../assets/instagram-white.svg'
import twitterLogo from '../assets/twitter-white.svg'

import appStoreLogo from '../assets/app-store.svg'
import googlePlayLogo from '../assets/play-store.svg'
import windowsStoreLogo from '../assets/windows-store.svg'

import chedocLogo from '../assets/logo-gray.png'

import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  const footerClass = `bg-slate-700 text-white ${
    isHomePage ? 'fixed bottom-0' : 'relative'
  } w-full py-6`

  return (
    <footer className={footerClass}>
      <div className='flex justify-center items-center text-center'>
        <p className='text-sm'>
          Home | Terms and Conditions | Privacy Policy Collection Statement |
          Help | Manage Account
        </p>
      </div>
      <div className='flex justify-center'>
        <p className='text-xs pt-1'>
          Copyright 2016 DEMO Streaming. All Rights Reserved
        </p>
      </div>
      <div className='md:grid grid-cols-5 mt-4 hidden'>
        <div className='col-span-2 flex justify-center items-center space-x-8'>
          <img className='h-6 w-6' src={facebookLogo} alt='Facebook' />
          <img className='h-6 w-6' src={instagramLogo} alt='Facebook' />
          <img className='h-6 w-6' src={twitterLogo} alt='Facebook' />
        </div>
        <div className='col-span-1 flex justify-center items-center '>
          <img src={chedocLogo} alt='chedocLogo' />
        </div>
        <div className='col-span-2 flex justify-center items-center space-x-8'>
          <img className=' w-32' src={appStoreLogo} alt='Facebook' />
          <img className=' w-32' src={googlePlayLogo} alt='Facebook' />
          <img className=' w-32' src={windowsStoreLogo} alt='Facebook' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
