import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="text-gray-400 w-full pl-9 pr-3 py-1 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
    </div>

  )
}