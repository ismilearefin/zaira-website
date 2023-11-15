import { useEffect, useState } from "react";
import CustomizeBorder from "../CustomizeBorder/CustomizeBorder";
import styles from "./PopularPosts.module.css";
import PopularCard from "./PopularCard/PopularCard";

export default function PopularPosts() {
  const [blogs, setBlogsData] = useState([]);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/blog.json");
      const data = await res.json();
      setBlogsData(data);
    };
    blogData();
  }, []);

  const secBlog = blogs.slice(1, 5);

  return (
    <div className={styles.popularSection}>
      <h4>Popular Posts</h4>
      <CustomizeBorder />
      <div className=" mt-5 ">
        {secBlog.map((blog) => (
          <PopularCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
