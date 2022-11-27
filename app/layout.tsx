import './globals.css'
import Link from 'next/link';
import Image from 'next/image'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {

  const firstBar = (
    <div className='flex justify-center h-10 bg-black'>
      <div className='max-w-7xl w-full flex justify-center self-center gap-5 px-14'>
        <Image src='/pet-house.png' alt='' width={35} height={35} />
        <p className='flex self-center text-sm font-semibold text-white'>Charity Organization</p>
      </div>
    </div>
  )

  const secondBar = (
    <div className='flex justify-center bg-slate-300'>
      <div className='max-w-7xl w-full justify-between self-center m-auto px-4 py-2'>
        <nav className='flex items-center gap-10'>
          <Link href='/' className='block text-center font-semibold'>Rescate Animal <br /> Atenas</Link>
          <Link href='animals' className='block text-center text-sm'>Animals</Link>
          <Link href='volunteer' className='block text-center text-sm'>Volunteer</Link>
          <Link href='events' className='block text-center text-sm'>Events</Link>
          <Link href='blog' className='block text-center text-sm'>Blog</Link>
          <Link href='about-us' className='block text-center text-sm'>About Us</Link>
          <div className='flex ml-auto gap-4'>
            <button className='bg-teal-600 hover:bg-teal-400 text-white text-sm py-1 px-4 border-none rounded-md'>Donation</button>
            <button className='bg-gray-600 hover:bg-black text-white text-sm py-1 px-4 border-none rounded-md'>Login</button>
          </div>
        </nav>
      </div>
    </div>
  )

  return (
    <html lang='en'>
      <body>
        <header className='sticky'>
          {firstBar}
          {secondBar}
        </header>
        <div className='max-w-7xl m-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}