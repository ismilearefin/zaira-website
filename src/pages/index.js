import Rootlayout from "@/components/Layout/Rootlayout";
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Hello</h1>
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <Rootlayout>
      {page}
    </Rootlayout>
  )
}