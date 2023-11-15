import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import CustomizeBorder from '../CustomizeBorder/CustomizeBorder';
import styles from './TrendingNews.module.css';
import CardTwo from '../CardTwo/CardTwo';
import CardThree from '../CardThree/CardThree';

export default function TrendingNews() {
    const [trendingBlogs, setTrendingBlogs] = useState([]);


  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/trendingNews.json");
      const data = await res.json();
      setTrendingBlogs(data);
    };
    blogData();
  }, []);
  

  const trendingBlog = trendingBlogs.slice(0,1);
  const secTrendingBlog = trendingBlogs.slice(1,4);
  return (
    <div className='position-relative'>
        <div className={styles.titleArea}>
            <h4>Trending News</h4>
            <Button text={'View all'} link={'/'}/>
        </div>
        <CustomizeBorder/>
        <div className='mb-4 mb-xxl-0'>
            <CardTwo blog={trendingBlog[0]} reverse={false} addDetails={true}/>
        </div>
        <div className='row justify-content-center'>
          {
            secTrendingBlog.map(blog => <CardThree key={blog.id} blog={blog}/>)
          }
        </div>
    </div>
  )
}
