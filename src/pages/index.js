import Rootlayout from "@/components/Layout/Rootlayout";
import styles from '../styles/Home.module.css';
import HeroSection from "@/components/HeroSection/HeroSection";
import AdBannerArea from "@/components/AdBannerArea/AdBannerArea";
import EditorChoice from "@/components/EditorChoice/EditorChoice";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import TrendingNews from "@/components/TrendingNews/TrendingNews";



export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection/>
      <AdBannerArea/>
      <EditorChoice/>
      {/* Trending Post Area */}
      <div className={`${styles.trendingPostArea} container`}>
        <div className="row">
          <div className="col-12 col-lg-8">
            <RecentPosts />
            <TrendingNews />
          </div>
          <div className="col-12 col-lg-4">2</div>
        </div>
      </div>
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