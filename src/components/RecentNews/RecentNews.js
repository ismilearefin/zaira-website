import { useEffect, useState } from 'react';
import CustomizeBorder from '../CustomizeBorder/CustomizeBorder';
import styles from './RecentNews.module.css';
import RecentNewsCard from './RecentNewsCard/RecentNewsCard';

export default function RecentNews() {
  const [hotCategoryList, sethotCategoryList] = useState([]);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/trendingNews.json");
      const data = await res.json();
      sethotCategoryList(data);
    };
    blogData();
  }, []);
  // console.log(hotCategoryList);

  const list = hotCategoryList.slice(1, 5);
  return (
    <div className={styles.main}>
         <h4>Recent News</h4>
      <CustomizeBorder />
    <div className='mt-5'>
      {
        list.map((blog,i) => <RecentNewsCard key={blog.id} blog={blog} image={i===0 ? true : false}/>)
      }
      
      </div>
    </div>
  )
}
