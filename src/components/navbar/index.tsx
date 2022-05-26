import Logo from './logo'
import Searchbar from './searchbar'
import { HomeIcon } from '@heroicons/react/solid'
import Path from './path'
import { ExploreIcon, HeartIcon, MessengerIcon, PostIcon } from './icons'
import Profile from './profile'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 h-14 gap-5">
      <Logo />
      <Searchbar />
      <div className='flex items-center gap-5'>
        <ul className="flex items-center gap-5">
          <Path Icon={HomeIcon} />
          <Path Icon={MessengerIcon} />
          <Path Icon={PostIcon} />
          <Path Icon={ExploreIcon} />
          <Path Icon={HeartIcon} />
        </ul>
        <Profile />
      </div>
    </nav>
  )
}

export default Navbar
