import Rootlayout from "@/components/Layout/Rootlayout";
import styles from '../styles/Home.module.css';
import HeroSection from "@/components/HeroSection/HeroSection";
import AdBannerArea from "@/components/AdBannerArea/AdBannerArea";


export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection/>
      <AdBannerArea/>
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