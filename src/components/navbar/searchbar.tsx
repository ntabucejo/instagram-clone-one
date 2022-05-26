import { SearchIcon } from '@heroicons/react/outline'

const Searchbar = () => {
  return (
    <div className="bg-gray-200 px-3 py-2 rounded-lg flex items-center gap-2 text-gray-400">
      <SearchIcon className="w-5 h-5" />
      <input type="text" placeholder="Search" className="bg-transparent focus:outline-none" />
    </div>
  )
}

export default Searchbar
