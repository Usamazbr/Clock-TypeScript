

const Navbar = () => {        
    return ( 
        <div className="flex flex-row h-16">
            <div className="ml-16 w-40 p-4 px-6 font-semibold font-mono bg-red-700 rounded-lg">
                <h2 className="flex justify-center tracking-widest">TIME.PK</h2>
            </div>
            <div className="flex justify-end w-full">
                <button className="m-3 text-3xl">🌕</button>
                <div className="m-3 xl:w-96">
                    <div className="input-group relative flex flex-row items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-700 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                        <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;