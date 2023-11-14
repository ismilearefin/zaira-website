
import Image from 'next/image';
import styles from './SmallCard.module.css';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';



export default function SmallCard({blog}) {
    console.log(blog)
  return (
    <div className='col'>
        <div className='d-flex'>
            
        <div className='position-relative '>
        <div className={`${styles.imageBox} mx-3`}>
            <Image src={blog?.img} alt='img' width={170} height={140} className={`${styles.image} rounded`}/>
        </div>
        </div>
        <div className={styles.contentBox}>
            <Link href={'/'}>{blog?.category}</Link>
            <h4>{blog?.title}</h4>
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
