import CategoryLayout from "@/components/Layout/CategoryLayout";
import styles from './category.module.css';
import { useEffect, useState } from "react";
import CardTwo from "@/components/CardTwo/CardTwo";
import HotCategories from "@/components/HotCategories/HotCategories";
import Subscribe from "@/components/Subscribe/Subscribe";
import SearchBox from "@/components/SearchBox/SearchBox";
import { BiSearch } from "react-icons/bi";
import RecentNews from "@/components/RecentNews/RecentNews";



export default function CategoryPage() {
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/trendingNews.json");
      const data = await res.json();
      setTrendingBlogs(data);
    };
    blogData();
  }, []);

  const secTrendingBlog = trendingBlogs.slice(0, 6);
  
  return (
    <div className={`${styles.PostArea} container`}>
        <div className="row">
          <div className="col-12 col-xl-8">
            {
              secTrendingBlog.map(blog => <CardTwo key={blog.id}  blog={blog} reverse={false} addDetails={true}/>)
            }
            {/* Pagination */}
            <div className="d-flex justify-content-center my-4">
              <div className={styles.paginationButton}>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              </div>
            </div>
          </div>
          <aside className="col-12 col-md-7  col-xl-4 mx-auto">
            <div className="mb-5">
            <form className={styles.mobileSearch}>
                  <input type="search" placeholder="Search here ..." />
                  <button type="submit">
                    <BiSearch />
                  </button>
                </form>
            </div>
            <HotCategories/>
            <div className="mt-5">
            <Subscribe/>
            </div>
            <RecentNews/>
          </aside>
        </div>
      </div>
  )
}

CategoryPage.getLayout = function getLayout(page) {
  return (
    <CategoryLayout>
      {page}
    </CategoryLayout>
  )
}