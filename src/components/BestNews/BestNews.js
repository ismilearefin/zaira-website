import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import CustomizeBorder from '../CustomizeBorder/CustomizeBorder';
import styles from './BestNews.module.css';
import CardTwo from '../CardTwo/CardTwo';

export default function BestNews() {
    const [trendingBlogs, setTrendingBlogs] = useState([]);


  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/trendingNews.json");
      const data = await res.json();
      setTrendingBlogs(data);
    };
    blogData();
  }, []);
  

  
  const secTrendingBlog = trendingBlogs.slice(0,4);
  return (
    <div className='position-relative'>
        <div className={styles.titleArea}>
            <h4>Weekly Best News</h4>
            <Button text={'View all'} link={'/'}/>
        </div>
        <CustomizeBorder/>
        <div className='mt-5'>
            {
                secTrendingBlog.map(blog => <CardTwo key={blog.id} blog={blog} reverse={true} addDetails={true}/>)
            }
        </div>
    </div>
  )
}
