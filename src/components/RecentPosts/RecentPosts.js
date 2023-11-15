import { useEffect, useState } from 'react';
import advertiseImg from '../../assets/advertisement2.jpg';
import BannerImg from '../BannerImg/BannerImg';
import CustomizeBorder from '../CustomizeBorder/CustomizeBorder';
import styles from './RecentPosts.module.css';
import { GoArrowUpRight } from "react-icons/go";
import SmallCard from '../SmallCard/SmallCard';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';

export default function RecentPosts() {
    const [blogs, setBlogsData] = useState([]);
    

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
    <div className='position-relative'>
        <div className={styles.titleArea}>
            <h4>Recent Posts</h4>
            <Button text={'View all'} link={'/'}/>
        </div>
        <CustomizeBorder/>
        <div className='row'>
            <div className='col-12 col-xxl-6 mb-4 mb-xxl-0'>
                {
                    blogs.slice(4,5).map(blog => <BannerImg key={blog.id} data={blog} imgHeight={500}/>)
                }
                
            </div>
            <div className='col-12 col-xxl-6 d-flex flex-column'>
                {
                    secBlog.map(blog => <SmallCard key={blog.id} blog={blog} reverse={true}/>)
                }
            </div>
        </div>
        {/* Advertisement section */}
        <div className='my-5'>
            <Image src={advertiseImg} alt='advertiseImg' width={880} height={120} className='img-fluid'/>
        </div>
    </div>
  )
}
