'use client'
import { useEffect, useState } from 'react';
import { PiUserCircleLight } from 'react-icons/pi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RxCountdownTimer } from 'react-icons/rx';
import styles from './HeroSection.module.css'
import Image from 'next/legacy/image';
import Link from 'next/link';
import HeroCard from './HeroCard/HeroCard';

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
                  <div key={blog.id} className='position-relative'>
                    <div className={`position-relative ${styles.bannerPostThumb}`} 
                    onMouseOver={()=>setHoverEffect(true)} 
                    onMouseLeave={()=>setHoverEffect(false)}>
                      <div className={`position-relative ${styles.mainImg} overflow-hidden`}>
                        <Image src={blog.img} alt='img' layout='fill' className={styles.bannerImg} />
                        <div className={`overlay position-absolute w-100 h-100 ${styles.overlay}`} />
                      </div>
                      <div className={`${styles.bannerPostContent} position-absolute `}>
                        <Link href={'/'}>{blog.category}</Link>
                        <h4 className={`${hoverEffect ? styles.hoverEffect : styles.initialState}`}>{blog.title}</h4>
                        <div className={`${styles.infoDiv} d-flex align-items-center justify-content-start flex-wrap`}>
                          <Link href='/' className={`${styles.info} d-flex align-items-center text-decoration-none`}>
                            <PiUserCircleLight className='fs-5'/>
                            <span >BY {blog.author}</span>
                          </Link>
                          <Link href='/' className={`${styles.info} d-flex align-items-center text-decoration-none`}>
                            <AiOutlineCalendar className='fs-5'/>
                            <span >{blog.date}</span>
                          </Link>
                          <Link href='/' className={`${styles.info} d-flex align-items-center text-decoration-none`}>
                            <RxCountdownTimer className='fs-5'/>
                            <span >{blog?.min} mins</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
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




  