import Image from 'next/image'
import Block from './Block'
const Header1 = () => {
    return (
        <div className='flex justify-between border-b-2 border-gray-300 items-center h-20 px-5'>
            <Image src={'/logo.png'} alt='' width={200} height={200} className='w-28 h-28' />
            <div className='flex border-r-2 border-gray-300 h-full'>
                <Block title={'Become a member'} para={'Additional 10% off on stays.'} />
                <Block title={'OYO for business'} para={'Trusted by 5000 corporates.'} />
                <Block title={'List your property'} para={'Start earning in 30 min.'} />
                <Block title={'9923456781'} para={'Call us to book now'} />
            </div>
            <div className='flex items-center px-3'>
                <Image src={'/gitlab.png'} alt='' width={200} height={200} className='w-10 h-10 rounded-full' />
                <h3 className='font-bold'>Login/Sign Up</h3>
            </div>
        </div>
    )
}

export default Header1
