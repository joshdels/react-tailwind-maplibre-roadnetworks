import { Toggle } from "../components/Toggle";
import { FaChevronDown } from "react-icons/fa";

export function Details() {
  return (
    <>
      <div
        className="absolute z-50 bg-white shadow-sm rounded-lg p-5 
                   left-2/8 top-3/14 -translate-x-1/2
                   flex flex-col gap-3 text-sm w-[300px] h-[600px]"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div className="font-semibold text-gray-700">Gender</div>
          <Toggle />
        </div>

        {/* Information Section */}
        <div className="mt-2 border border-amber-400 p-3 rounded-md">
          <h1 className="font-bold text-base text-gray-800 mb-2">University of Philippines</h1>

          {/* Bar chart */}
          <div className="flex flex-col gap-3">
            {/* Women */}
            <div>
              <div className="flex justify-between text-gray-700 text-xs mb-1">
                <span>Women</span>
                <span>43%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-pink-500 h-2 rounded-full"
                  style={{ width: "43%" }}
                ></div>
              </div>
            </div>

            {/* Men */}
            <div>
              <div className="flex justify-between text-gray-700 text-xs mb-1">
                <span>Men</span>
                <span>47%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "47%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
