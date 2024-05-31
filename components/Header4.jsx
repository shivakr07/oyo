'use client'
import Image from 'next/image'

const Header4 = () => {
    return (
        <div className="flex justify-between items-center my-14 border-2 border-gray-300 px-5 py-2 rounded-lg">
            <div className="flex items-center">
                <Image src={'/sal.png'} alt='' height={200} width={200} className='w-28 h-28 rounded-full mr-5' />
                <div className='text-xl'>
                    <p className='font-bold'>Get access to exclusive deals</p>
                    <p>Only the best deals reach your inbox</p>
                </div>
            </div>
            <div className="flex">
                <input type='email' className='px-4 py-3 mr-5 w-80 h-16 outline-none border border-gray-300 ' placeholder='e.g. john@gmail.com' />
                <button type='submit' className='w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer'>Notify</button>
            </div>
        </div>
    )
}

export default Header4
