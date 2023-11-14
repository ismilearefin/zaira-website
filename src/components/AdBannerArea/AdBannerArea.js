import Image from 'next/legacy/image';
import addBanner from '../../assets/advertisement05.jpg';


export default function AdBannerArea() {
  return (
    <div className='mx-auto container p-0 my-2 my-lg-4'>
        <div className=' row justify-content-center px-2'> 
            <div className='d-flex justify-content-center px-lg-4'>
            <Image src={addBanner} alt='ad' width={984} height={120} className=''/>
            </div>
        </div>
    </div>
  )
}
