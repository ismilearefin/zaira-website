import Link from 'next/link';
import styles from './Button.module.css';
import { GoArrowUpRight } from 'react-icons/go';

export default function Button({text, link}) {
  return (
    <Link href={link} className={styles.buttondesign} >{text} <span><GoArrowUpRight style={{ fontSize: `18px`, color:'#f4796c' }}/></span></Link>
  )
}
