import { SearchBar } from "./SearchBar";
import { FaChevronDown  } from "react-icons/fa";


export function NavBar() {
  return (
    <div className="navbar border-b border-b-gray-300 flex items-center gap-3 px-4 py-2">
      <div className="company flex items-center mr-50">
        <img className="h-10" src="./logo.jpg" alt="logo" />
        <h1 className="font-semibold text-xl">Target</h1>
        <h1 className="font-semibold text-amber-500 text-xl" >Trasport</h1>
      </div>
      
      {/* Search container */}
      <SearchBar />

      {/* Log In */}
      <div className="users flex items-center gap-4 ml-auto mr-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 ">
          <img className="mx-auto block h-11 rounded-full sm:mx-0 sm:shrink-0" src="./image.jpg" alt="profile pic" />
            <div className="text-center sm:text-left">
              <div className="">
                <p className="text-medium font-semibold text-black">Joshua De Leon</p>
                <p className="text-xs font-medium text-gray-400 mr-12">GIS Developer</p>
              </div>
            </div>
            <div>
              <FaChevronDown className="text-gray-500 text-xs cursor-pointer hover:text-amber-600 transition" />
            </div>
          </div>
      </div>
    </div>
  );
}
