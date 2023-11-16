import { MdOutlineArrowOutward } from 'react-icons/md';
import styles from './SidebarNewsLetter.module.css';

export default function SidebarNewsLetter() {
  return (
    <div className={styles.sidebarNewsLetter}>
        <h4>Daily Newsletter</h4>
        <p>Get all the top stories from Blogs to keep track.</p>
        <form className="position-relative">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className={styles.input}
          />
          <button className={styles.inputIcon}>
            <MdOutlineArrowOutward />
          </button>
        </form>
      </div>
  )
}
