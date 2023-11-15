import Rootlayout from "@/components/Layout/Rootlayout";
// react Slick Css file
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Home.module.css';
import HeroSection from "@/components/HeroSection/HeroSection";
import AdBannerArea from "@/components/AdBannerArea/AdBannerArea";
import EditorChoice from "@/components/EditorChoice/EditorChoice";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import TrendingNews from "@/components/TrendingNews/TrendingNews";
import advertisement3 from '../assets/advertisement03.jpg';
import sidebarAd from '../assets/sidebarAd.jpg';
import Image from "next/image";
import Subscribe from "@/components/Subscribe/Subscribe";
import HotCategories from "@/components/HotCategories/HotCategories";
import PopularPosts from "@/components/PopularPosts/PopularPosts";
import Carosol from "@/components/Carosol/Carosol";
import BestNews from "@/components/BestNews/BestNews";
import PopularTech from "@/components/PopularTech/PopularTech";



export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection/>
      <AdBannerArea/>
      <EditorChoice/>
      {/* Trending Post Area */}
      <div className={`${styles.PostArea} container`}>
        <div className="row">
          <div className="col-12 col-xl-8">
            <RecentPosts />
            <TrendingNews />
          </div>
          <aside className="col-12 col-xl-4">
              <Subscribe />
              <HotCategories/>
              <PopularPosts/>
          </aside>
        </div>
      </div>
      {/* advertisement section */}
      <div className="container">
          <Image src={advertisement3} alt="advertisement3" width={1290} height={200} className="img-fluid"/>
      </div>
      {/* carousel section */}
      <div>
        <Carosol></Carosol>
      </div>
      {/* Weekly Best News */}
      <div className={`${styles.PostArea} container`}>
        <div className="row">
          <div className="col-12 col-xl-8">
            <BestNews></BestNews>
          </div>
          <aside className="col-12 col-xl-4 ">
              <Image src={sidebarAd} alt="img" width={330} height={408} className="mb-5" />
              <PopularTech></PopularTech>
          </aside>
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