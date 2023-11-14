
import Image from 'next/image';
import styles from './SmallCard.module.css';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useState } from 'react';



export default function SmallCard({blog,reverse}) {
    const [hoverEffect , setHoverEffect] = useState(false);
    
  return (
    <div className='col-12'>
        <div className={` d-flex justify-content-between  ${reverse && 'align-items-center flex-row-reverse  mb-4'} `}>
            
        <div className='position-relative '
         onMouseOver={()=>setHoverEffect(true)} 
        onMouseLeave={()=>setHoverEffect(false)}>
        <div className={`${styles.imageBox} mx-3`}>
            <Image src={blog?.img} alt='img' width={170} height={140} className={`${styles.image} rounded`}/>
        </div>
        </div>
        <div className={styles.contentBox}>
            <Link href={'/'} className={styles.categoryButton}>{blog?.category}</Link>
            <h4 className={`${hoverEffect ? styles.hoverEffect : styles.initialState}`}>{blog?.title}</h4>
            <div className={`${styles.infoDiv} d-flex align-items-center justify-content-start`}>
                          
                <Link href='/' className={`${styles.info} d-flex align-items-center text-decoration-none`}>
                    <AiOutlineCalendar className='fs-5'/>
                    <span >{blog?.date}</span>
                </Link>
                          
            </div>
        </div>
    </div>
    </div>
  )
}
