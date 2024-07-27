import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'

function Header() {
  return (
    <div className='border-b-2 py-6 border-b-orange-500'>
      <div className='mx-auto container flex justify-between items-center'>
        <Link to="/" className='font-bold text-orange-500 text-3xl tracking-tight'>Eats.com </Link>
        <div className='md:hidden'>
            <MobileNav />
        </div>
        <div className='hidden md:block'>
            <MainNav/>
        </div>
      </div>
    </div>
  )
}

export default Header
