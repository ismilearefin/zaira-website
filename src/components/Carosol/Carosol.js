import { useEffect, useState } from "react";
import Slider from "react-slick";
import BannerImg from "../BannerImg/BannerImg";

export default function Carosol() {
  const [blogs, setBlogsData] = useState([]);
  

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/blog.json");
      const data = await res.json();
      setBlogsData(data);
    };
    blogData();
  }, []);
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          autoplay: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <div className="my-5">
      <Slider {...settings}>
        {blogs.map((blog) => (
          <BannerImg key={blog.id} data={blog} imgHeight={570} />
        ))}
      </Slider>
    </div>
  );
}
