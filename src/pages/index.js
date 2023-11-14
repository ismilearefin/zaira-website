import Rootlayout from "@/components/Layout/Rootlayout";
import styles from '../styles/Home.module.css';
import HeroSection from "@/components/HeroSection/HeroSection";
import AdBannerArea from "@/components/AdBannerArea/AdBannerArea";
import EditorChoice from "@/components/EditorChoice/EditorChoice";



export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection/>
      <AdBannerArea/>
      <EditorChoice/>
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