import Rootlayout from "@/components/Layout/Rootlayout";
import styles from '../styles/Home.module.css';
import HeroSection from "@/components/HeroSection/HeroSection";
import AdBannerArea from "@/components/AdBannerArea/AdBannerArea";
import EditorChoice from "@/components/EditorChoice/EditorChoice";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import TrendingNews from "@/components/TrendingNews/TrendingNews";
import advertisement3 from '../assets/advertisement03.jpg';
import Image from "next/image";
import Subscribe from "@/components/Subscribe/Subscribe";



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
          <aside className="col-12 col-lg-4">
              <Subscribe />
          </aside>
        </div>
      </div>
      {/* advertisement section */}
      <div className="container">
          <Image src={advertisement3} alt="advertisement3" width={1290} height={200} className="img-fluid"/>
      </div>
      {/* carousel section */}
      <div className="border">
        Carosol
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