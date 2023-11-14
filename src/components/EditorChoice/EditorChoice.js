import { useEffect, useRef, useState } from 'react';
import styles from './EditorChoice.module.css';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import SmallCard from '../SmallCard/SmallCard';
import Slider from "react-slick";
// react Slick Css file
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CustomizeBorder from '../CustomizeBorder/CustomizeBorder';


export default function EditorChoice() {
    const [blogs, setBlogsData] = useState([]);
    // const [hoverEffect , setHoverEffect] = useState(false);
    const SliderRef = useRef(null);

  useEffect(() => {
    const blogData = async () => {
      const res = await fetch("/blog.json");
      const data = await res.json();
      setBlogsData(data);
    };
    blogData();
  }, []);

  const editorChoiceBlog = blogs.slice(1,blogs.length);

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 770,
        settings: {
            infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.EditorChoiceSection}>
        <div className='container'>
            <div className='d-flex align-items-center justify-content-between position-relative mb-5'>
                <h4 className={styles.title}>Editors Choice</h4>
                <div className='d-none d-md-flex align-items-center justify-content-center'>
                    <button className={`${styles.arrowButton} me-1`} onClick={()=>SliderRef.current.slickPrev()}><FaArrowLeft /></button>
                    <button className={styles.arrowButton} onClick={()=>SliderRef.current.slickNext()}><FaArrowRight /></button>
                </div>
                <CustomizeBorder></CustomizeBorder>
                {/* <div className={styles.sectionTitleLine}></div> */}
            </div>
            <div className='row'>
                <Slider {...settings} ref={SliderRef}>
                    {
                        editorChoiceBlog.map(blog => <SmallCard key={blog.id} blog={blog}/>)
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}
