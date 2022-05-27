import Navbar from '../navbar'

const Header = () => {
  return (
    <header className="bg-white border-[1px] border-gray-300 sticky top-0 z-20">
      <div className="max-w-4xl mx-auto">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
