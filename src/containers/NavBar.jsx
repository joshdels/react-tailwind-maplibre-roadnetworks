import { SearchBar } from "../components/SearchBar";
import { Toggle } from "../components/Toggle";


export function NavBar() {
  return (
    <div className="navbar border-b border-b-gray-300 flex items-center gap-3 px-5 py-5">
      <div className="company flex items-center mr-15 ">
        <img className="h-10" src="./logo.jpg" alt="logo" />
        <h1 className="font-extrabold text-2xl tracking-widest">Info</h1>
        <h1 className="font-extrabold text-amber-500 text-2xl tracking-widest" >University</h1>
      </div>
      
      {/* Search container */}
      <SearchBar width="w-150" placeholder="Search for Location, Places, Capital, Universiies"/>

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
              <Toggle/> 
          </div>
      </div>
    </div>
  );
}
