import styles from './blogDetails.module.css';
// react Slick Css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/legacy/image';
import  { useEffect, useState } from 'react'
import { PiUserCircleLight } from 'react-icons/pi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import BannerImg from '@/components/BannerImg/BannerImg';
import SidebarNewsLetter from '@/components/SidebarNewsLetter/SidebarNewsLetter';
import PopularPosts from '@/components/PopularPosts/PopularPosts';
import DeatilsPageLayout from '@/components/Layout/DeatilsPageLayout';

export default function BlogsDetail() {
  const [BlogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/trendingNews.json");
      const data = await res.json();
      setBlogDetails(data);
    };
    blogData();
  }, []);
  
  const Details = BlogDetails.slice(0, 1);
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='container'>
        <h1 className='my-5'>{Details[0]?.title}</h1>
        {/* Image Section */}
        <div className='position-relative'>
        <Image src={Details[0]?.img} alt='Main Image' width={1200} height={600} layout='responsive' className={styles.imgSection}></Image>
        <div className={styles.infoSec}>
          <div className='d-flex justify-content-center '>
          <div className={`${styles.info} rounded shadow py-3 px-4  d-flex align-items-center text-decoration-none bg-light`}>
            <PiUserCircleLight className='fs-5'/>
            <span >{Details[0]?.author}</span>
          </div>
          <div className={`${styles.info} ms-1 rounded shadow py-3 px-4 d-flex align-items-center text-decoration-none bg-light `}>
            <AiOutlineCalendar className='fs-5'/>
            <span >{Details[0]?.date}</span>
          </div>
          </div>
        </div>
        </div>

        <div className={`${styles.PostArea} container`}>
        <div className="row">
          <div className="col-12 col-xl-8">
            {/* Blog Details Sections */}
            <p>{Details[0]?.details}</p>

            <div className='row gy-3  align-items-center justify-content-between '>
              <div className='col-md-8 d-flex '>
              <Link href={"/"} className={styles.tagsButton}>
                Health
              </Link>
                  <Link href={"/"} className={styles.tagsButton}>
                Education
              </Link>
                  <Link href={"/"} className={styles.tagsButton}>
                Money
              </Link>
              </div>
              <div className={`${styles.socialIcons} col-md-4 `}>
              <Link href={'/'}><FaFacebookF></FaFacebookF></Link>
              <Link href={'/'}><FaTwitter></FaTwitter></Link>
              <Link href={'/'}><FaInstagram></FaInstagram></Link>
              <Link href={'/'}><FaLinkedinIn></FaLinkedinIn></Link>
            </div>
            </div>
            <div className={styles.nextButtons}>
              <button><BsChevronLeft /> PREVIOUS POST</button>
              <button>NEXT POST <BsChevronRight /></button>
            </div>

            {/* Recent Posts */}
            <div className={styles.recentPostSec}>
              <div className={styles.recentPostTitls}>
              <h4>WHATS GOING ON ?</h4>
              <h1>RECENT NEWS & PRESS RELEASES</h1>
              </div>
              <div>
              <Slider {...settings}>
                {
                  BlogDetails.map(blog => <BannerImg key={blog?.id} data={blog} imgHeight={400} />)
                }
              </Slider>
              </div>
            </div>
          </div>
          <aside className="col-12 col-md-7  col-xl-4 mx-auto">
            <PopularPosts />
            <SidebarNewsLetter/>
          </aside>
        </div>
      </div>

        
    </div>
  )
}


BlogsDetail.getLayout = function getLayout(page) {
  return (
    <DeatilsPageLayout>
      {page}
    </DeatilsPageLayout>
  )
}