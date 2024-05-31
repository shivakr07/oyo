'use client'

const Header3 = () => {
    return (
        <div className="bg-gradient-to-r from-red-500 to-red-400 h-66">
            <div className="p-5">
                <h2 className="text-4xl font-bold p-5 text-white text-center">Over 157,000 hotels and homes across 35 countries</h2>
                <div className="grid grid-cols-5 my-5 mx-20">
                    <input type="text" placeholder="Search..." className=" h-14 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 rounded-l-sm" />
                    <input type="text" placeholder="Search..." className=" h-14 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1" />
                    <input type="text" placeholder="Search..." className=" h-14 outline-none px-3 text-lg col-span-1" />
                    <button type="submit" className="h-14 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-xl rounded-r-sm">Search</button>
                </div>
                <div className="flex mx-20 my-3 font-bold items-center">
                    <button type="submit" className="h-16 px-3 py-2 hover:cursor-pointer text-white text-xl mr-5">Continue your search</button>
                    <button type="submit" className="h-12 px-3 py-1 border-2 border-white hover:cursor-pointer text-white text-xl mr-5 rounded-xl hover:bg-gray-400 ">Homestay in India hotels</button>
                </div>
            </div>
        </div>
    )
}

export default Header3
