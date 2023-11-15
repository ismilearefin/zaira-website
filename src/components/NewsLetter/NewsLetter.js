import Link from 'next/link';
import styles from './NewsLetter.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function NewsLetter() {
  return (
    <div className={styles.newLetter}>
        <div className="container">
          <div className="row">
          <div className="col-xl-3 text-center mb-3 mb-xl-0">
            <h2>Get Our Latest News & Update</h2>
          </div>
          <div className="col-xl-6 d-flex justify-content-center align-items-center mb-4 mb-xl-0">
          <form className=" d-block d-lg-flex align-item-center justify-content-center">
            <input type="text" placeholder="Name" className={`${styles.input}  me-1`}/>
            <input type="email" placeholder="E-mail" className={`${styles.input}  me-1`}/>
            <button className={`${styles.SubmitButton} col-4`}>Submit Now</button>
          </form>
          </div>
          <div className="col-xl-3 d-flex justify-content-center align-items-center">
            <p className={`${styles.newslatterTitle} mb-0 me-2`}>Follow Us:</p>
            <div className={styles.socialIcons}>
              <Link href={'/'}><FaFacebookF></FaFacebookF></Link>
              <Link href={'/'}><FaTwitter></FaTwitter></Link>
              <Link href={'/'}><FaInstagram></FaInstagram></Link>
              <Link href={'/'}><FaLinkedinIn></FaLinkedinIn></Link>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}
