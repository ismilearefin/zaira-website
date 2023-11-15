import Image from 'next/image';
import logo from '../../assets/whitelogo.png';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
        <div className={styles.footer}>
        <div className='container text-white'>
            {/* Footer Top */}
            <div className=' row'>
            <div className='col-lg-3 col-md-7 mb-4'>
                <Image src={logo} alt='logo' width={170} height={50}/>
                <p className={`${styles.Textcontent} mt-4`}>Browned butter and brown sugar caramelly goodness, crispy edges thick and soft centers and melty little puddles of chocolate.</p>
            </div>
            <div className='col-lg-2 col-md-5 col-sm-6 text-white position-relative mb-4'>
                <h4>Company</h4>
                <div className={styles.CustomizeLine}></div>
                <div className={`${styles.links} mt-5 d-flex flex-column `}>
                    <Link href={'/'}>About Us</Link>
                    <Link href={'/'}>The Test Kitchen</Link>
                    <Link href={'/'}>Podcast</Link>
                    <Link href={'/'}>Events</Link>
                    <Link href={'/'}>Jobs</Link>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-white position-relative mb-4'>
                <h4>Get Help</h4>
                <div className={styles.CustomizeLine}></div>
                <div className={`${styles.links} mt-5 d-flex flex-column `}>
                    <Link href={'/'}>Contact & Faq</Link>
                    <Link href={'/'}>Oders & Returns</Link>
                    <Link href={'/'}>Gift Cards</Link>
                    <Link href={'/'}>Register</Link>
                    <Link href={'/'}>Catalog</Link>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 text-white position-relative mb-4'>
                <h4>Explore</h4>
                <div className={styles.CustomizeLine}></div>
                <div className={`${styles.links} mt-5 d-flex flex-column `}>
                    <Link href={'/'}>The Shop</Link>
                    <Link href={'/'}>Recipes</Link>
                    <Link href={'/'}>Food</Link>
                    <Link href={'/'}>Travel</Link>
                    <Link href={'/'}>Hotline</Link>
                </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 text-white position-relative mb-4'>
                <h4>Follow Us On</h4>
                <div className={styles.CustomizeLine}></div>
                <div className={`${styles.links} mt-5 d-flex flex-column `}>
                    <Link href={'/'}>Facebook</Link>
                    <Link href={'/'}>Twitter</Link>
                    <Link href={'/'}>Instagram</Link>
                    <Link href={'/'}>Youtube</Link>
                    <Link href={'/'}>Pinterest</Link>
                </div>
            </div>
        </div>
        {/* Footer bottom */}
    </div>
    
    </div>
    <div className={styles.bottomFooter}>

    <div className='container'>
    <div className={`row  justify-content-between align-items-center`}> 
        <p className={`${styles.Textcontent} col-md-6`}>Privacy Policy & Terms . Site Credits</p>
        <p className={`${styles.Textcontent} col-md-6 text-lg-end`}>© 2023 All Rights Reserved</p>
    </div>
    </div>
</div>
    </div>
  )
}
