'use client'
import { useEffect, useState } from 'react';
import { PiUserCircleLight } from 'react-icons/pi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RxCountdownTimer } from 'react-icons/rx';
import styles from './HeroSection.module.css'
import Image from 'next/legacy/image';
import Link from 'next/link';
import HeroCard from './HeroCard/HeroCard';
import BannerImg from '../BannerImg/BannerImg';

export default function HeroSection() {
    const [blogs, setBlogsData] = useState([]);
    const [hoverEffect , setHoverEffect] = useState(false);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/blog.json");
      const data = await res.json();
      setBlogsData(data);
    };
    blogData();
  }, []);
  // console.log(blogs.slice(0,1))
  const secBlog = blogs.slice(1,4);
  return (
    <section className={styles.heroSection}>
        <div className={`${styles.bannerSection} container row mx-auto`}>
            <div className='col-12 col-lg-8'>
              {
                blogs.slice(0,1).map(blog =>(
                <BannerImg key={blog.id} data={blog} imgHeight={615}/>
                ))
              }
            </div>
            <div className={`${styles.cardSection} col-12 col-lg-4 row`} >
              {
                secBlog.map(blog => <HeroCard key={blog.id} blog={blog}/>)
              }
            </div>
        </div>

    </section>
  )
}




  