function SelectCategory() {
  return (
    <div className="flex justify-end items-center">
      <label className="block text-sm text-gray-600 mr-2">Select Category</label>
      <div className="relative">
        <button
          className="py-1 px-3 w-auto text-sm bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-brand focus:outline-none flex items-center justify-between">
          All
          <span className="ml-2 text-gray-500">&#9660;</span>
        </button>
        <div
          className="absolute right-0 z-10 mt-1 w-auto bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition duration-200">
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700">
            All (9)
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700">
            Full Stack (6)
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700">
            Front End (1)
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700">
            Freelance (1)
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700">
            New Stack Project (1)
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;
