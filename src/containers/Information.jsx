import { FaChevronDown, FaRegBookmark, FaGlobe } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6"; 
import { MdOutlineDirections } from "react-icons/md";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";


export function Information({ places }) {
  return (
    <div className="wrapper">
      <div
        className="
          absolute z-50 top-[80%] left-5/9 -translate-x-1/2
          flex flex-col justify-start items-start gap-4
        "
      >
        {/* Title on top, aligned left */}
        <div className="flex justify-between gap-8 w-full">
          <h1 className="text-2xl font-bold text-gray-800">List of University</h1>
        </div>


        {/* Flex container for the cards */}
        <div className="flex justify-start gap-15">
          {places.map((place, index) => (
            <Box
              key={index}
              name={place.name}
              city={place.city}
              region={place.region}
              students={place.noStudents}
              img={place.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



function Box({ name, city, region, students, img}) {
  return (
    <div
      className="
        bg-white shadow-sm rounded-xl p-5 border border-gray-200
        flex items-center gap-5 w-[420px] 
      "
    >
      {/* Image column */}
      <div className="shrink-0">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 object-cover"
        />
      </div>

      {/* Info column */}
      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <h1 className="font-bold text-gray-800 text-xl leading-tight">
            {name}
          </h1>

          {/* Icons group */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaRegBookmark className="hover:text-amber-500 cursor-pointer" />
            <FaShareFromSquare className="hover:text-amber-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
          <IoLocationOutline />
          <span>
            {city}, {region}
          </span>
        </div>

        <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
          <IoPeopleOutline />
          <span>{students}k active students</span>
        </div>

  
        <div className="flex items-center gap-4 text-gray-700 text-md mt-2">
          <a
            href="#"
            className="flex items-center gap-1 hover:text-amber-500 transition"
          >
            <MdOutlineDirections className="text-amber-500" />
            Direction
          </a>

          <a
            href="#"
            className="flex items-center gap-1 hover:text-amber-500 transition"
          >
            <FaGlobe className="text-amber-500" />
            Website
          </a>
        </div>

      </div>
    </div>
  );
}
