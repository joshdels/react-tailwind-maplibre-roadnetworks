export function Button({ name, icon: Icon, x , y }) {
  return (
    <div className="absolute z-50" style={{ left: x, top: y }}>
      <button
        className="
          flex items-center gap-2        /* ⬅ Adds space between icon & text */
          px-4 py-2 
          text-sm font-medium 
          text-gray-700 
          bg-white 
          rounded-full 
          shadow-sm 
          cursor-pointer
          transition-all duration-300 ease-out 
          hover:bg-amber-300 
          hover:shadow-md
        "
      >
        {Icon && <Icon className="text-amber-500 text-base" />}
        {name}
      </button>
    </div>
  );
}
