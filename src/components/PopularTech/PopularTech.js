import { useEffect, useState } from "react";
import CustomizeBorder from "../CustomizeBorder/CustomizeBorder";
import styles from "./PopularTech.module.css";
import BannerImg from "../BannerImg/BannerImg";
import PopularCard from "../PopularPosts/PopularCard/PopularCard";

export default function PopularTech() {
  const [blogs, setBlogsData] = useState([]);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/blog.json");
      const data = await res.json();
      setBlogsData(data);
    };
    blogData();
  }, []);
  const secBlog = blogs.slice(1, 6);
  return (
    <div className={styles.popularSection}>
      <h4>Popular Tech</h4>
      <CustomizeBorder />
      <div className="row mt-5">
        <div className="col-12 mb-4 ">
          {blogs.slice(4, 5).map((blog) => (
            <BannerImg key={blog.id} data={blog} imgHeight={364} />
          ))}
        </div>
        <div className="col-12 d-flex flex-column">
          {secBlog.map((blog) => (
            <PopularCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
