const Navbar = () => {
  return (
    <div className="flex flex-row h-[10%] justify-between items-center rounded-lg">
      <div className="flex flex-col h-4/5 justify-center w-40 p-2 bg-red-700 rounded-lg">
        <h2 className="font-semibold font-mono text-center text-xl text-white tracking-widest">
          TIME.PK
        </h2>
      </div>
      <div className="flex gap-2">
        <button className=" text-3xl">🌕</button>
        <div className=" xl:w-96">
          <div className="input-group gap-2 relative flex flex-row items-stretch w-full">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-700 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />
            <button
              className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
