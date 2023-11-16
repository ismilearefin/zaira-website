import { useEffect, useState } from "react";
import CustomizeBorder from "../CustomizeBorder/CustomizeBorder";
import styles from "./HotCategories.module.css";
import HotCategoryCard from "./HotCategoryCard/HotCategoryCard";

export default function HotCategories() {
  const [hotCategoryList, sethotCategoryList] = useState([]);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/trendingNews.json");
      const data = await res.json();
      sethotCategoryList(data);
    };
    blogData();
  }, []);
  console.log(hotCategoryList);

  const list = hotCategoryList.slice(1, 5);
  return (
    <div className={styles.HotCategories}>
      <h4>Hot Categories</h4>
      <CustomizeBorder />
      <div className="mt-5 row">
        {list.map((data) => (
          <HotCategoryCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
