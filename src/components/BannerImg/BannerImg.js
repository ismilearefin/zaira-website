import Image from 'next/legacy/image';
import styles from './BannerImg.module.css';
import Link from 'next/link';
import { PiUserCircleLight } from 'react-icons/pi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RxCountdownTimer } from 'react-icons/rx';
import { useState } from 'react';

export default function BannerImg({data,imgHeight}) {
    const [hoverEffect , setHoverEffect] = useState(false);
    
  
    return (
    <div className='position-relative'>
    <div className={`position-relative ${styles.bannerPostThumb}`} 
    onMouseOver={()=>setHoverEffect(true)} 
    onMouseLeave={()=>setHoverEffect(false)}>
        
        <div className={`position-relative ${styles.mainImg} overflow-hidden`} style={{ height: `${imgHeight}px` }}>
        <Image src={data?.img} alt='img' layout='fill' className={styles.bannerImg} />
        <div className={`overlay position-absolute w-100 h-100 ${styles.overlay}`} />
      </div>
        
      
      <div className={`${styles.bannerPostContent} position-absolute `}>
        <Link href={'/'}>{data?.category}</Link>
        <h4 className={`${hoverEffect ? styles.hoverEffect : styles.initialState}`}>{data?.title}</h4>
        <div className={`${styles.infoDiv} d-flex align-items-center justify-content-start flex-wrap`}>
          <Link href='/' className={`${styles.info} d-flex align-items-center text-decoration-none`}>
            <PiUserCircleLight className='fs-5'/>
            <span >BY {data?.author}</span>
          </Link>
          <Link href='/' className={`${styles.info} d-flex align-items-center text-decoration-none`}>
            <AiOutlineCalendar className='fs-5'/>
            <span >{data?.date}</span>
          </Link>
          <Link href='/' className={`${styles.info} d-flex align-items-center text-decoration-none`}>
            <RxCountdownTimer className='fs-5'/>
            <span >{data?.min} mins</span>
          </Link>
        </div>
      </div>
    </div>
</div>
  )
}
