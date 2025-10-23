import { SearchBar } from "./SearchBar"

export function SideBar() {
  return (
    <aside className="border-r border-gray-300 bg-white p-6 flex flex-col gap-6">
      {/* Filter Header */}
      <div className="border-b border-gray-200 pb-2">
        <h1 className="text-medium font-semibold text-gray-800">Detail Filters</h1>
      </div>

      {/* Type Section */}
      <div className="flex flex-col gap-3">
        {/* Header + See More */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-600 tracking-wide">Type</h2>
        </div>

        <SearchBar placeholder="Search type..." />
        <div className="flex items-center gap-2">
          <input
            id="office"
            type="checkbox"
            className="w-4 h-4 accent-amber-600"
          />
          <label
            htmlFor="office"
            className="text-gray-700 text-sm cursor-pointer hover:text-amber-600"
          >
            Office
          </label>
        </div>
        <span className="text-amber-700 text-sm font-semibold cursor-pointer hover:text-amber-600 hover:underline transition">
            See More →
         </span>
      </div>

      {/* Province Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-600 tracking-wide">Province</h2>

        </div>

        <SearchBar placeholder="Search province..." />
        <div className="flex flex-col gap-2">
          {["Davao del Sur", "Davao del Norte", "Bukidnon"].map((prov, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                id={`province-${i}`}
                type="checkbox"
                className="w-4 h-4 accent-amber-600"
              />
              <label
                htmlFor={`province-${i}`}
                className="text-gray-700 text-sm cursor-pointer hover:text-amber-600"
              >
                {prov}
              </label>
            </div>
          ))}
        </div>
        <span className="text-amber-700 text-sm font-semibold cursor-pointer hover:text-amber-600 hover:underline transition">
            See More →
         </span>
      </div>

      {/* City Section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-600 tracking-wide">City</h2>
        </div>

        <SearchBar placeholder="Search city..." />
        <div className="flex flex-col gap-2">
          {["Davao City", "Tagum City", "Panabo City"].map((city, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                id={`city-${i}`}
                type="checkbox"
                className="w-4 h-4 accent-amber-600"
              />
              <label
                htmlFor={`city-${i}`}
                className="text-gray-700 text-sm cursor-pointer hover:text-amber-600"
              >
                {city}
              </label>
            </div>
          ))}
        </div>
        <span className="text-amber-700 text-sm font-semibold cursor-pointer hover:text-amber-600 hover:underline transition">
            See More →
         </span>
      </div>
    </aside>
  )
}
