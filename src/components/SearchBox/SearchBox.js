import { BiSearch } from 'react-icons/bi';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  return (
    <form className={styles.mobileSearch}>
                  <input type="search" placeholder="Search here ..." />
                  <button type="submit">
                    <BiSearch />
                  </button>
                </form>
  )
}
