import Link from "next/link";
import styles from './SocialMediaLink.module.css';


export default function SocialMediaLink({icon,text}) {
  return (
    <div className=" col-12 col-lg-6 px-0">
        <Link href={'/'} className={`${styles.SocialMediaLink}`}><span>{icon}</span> {text}</Link>
    </div>
  )
}
