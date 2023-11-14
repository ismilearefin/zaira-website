import { useEffect, useState } from 'react';
import BannerImg from '../BannerImg/BannerImg';
import CustomizeBorder from '../CustomizeBorder/CustomizeBorder';
import styles from './RecentPosts.module.css';
import { GoArrowUpRight } from "react-icons/go";
import SmallCard from '../SmallCard/SmallCard';

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
            <button>VIEW ALL <span><GoArrowUpRight style={{ fontSize: `18px` }}/></span></button>
        </div>
        <CustomizeBorder/>
        <div className='row'>
            <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
                {
                    blogs.slice(4,5).map(blog => <BannerImg key={blog.id} data={blog} imgHeight={500}/>)
                }
                
            </div>
            <div className='col-12 col-lg-6 d-flex flex-column'>
                {
                    secBlog.map(blog => <SmallCard key={blog.id} blog={blog} reverse={true}/>)
                }
            </div>
        </div>
    </div>
  )
}
