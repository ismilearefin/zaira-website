import Image from "next/image";
import styles from "./CardThree.module.css";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { PiUserCircleLight } from "react-icons/pi";
import { useState } from "react";

export default function CardThree({ blog }) {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <div className="position-relative col-12 col-lg-6 col-xl-4 mb-4 mb-xxl-0">
      <div
        className={`position-relative ${styles.bannerPostThumb} mb-2`}
        onMouseOver={() => setHoverEffect(true)}
        onMouseLeave={() => setHoverEffect(false)}
      >
        <div className={`position-relative ${styles.mainImg} overflow-hidden`}>
          <Image
            src={blog?.img}
            alt="img"
            width={276}
            height={200}
            // layout="fill"
            className={styles.imageCard}
          />

          <div
            className={`overlay position-absolute w-100 h-100 ${styles.overlay}`}
          />
        </div>
        <Link href={"/"} className={styles.CardButton}>
          {blog?.category}
        </Link>
      </div>
      <div className={`${styles.bannerPostContent}`}>
        <h4
          className={`${
            hoverEffect ? styles.hoverEffect : styles.initialState
          }`}
        >
          {blog?.title}
        </h4>
        <div
          className={`${styles.infoDiv} d-flex  d-xxl-flex align-items-center justify-content-start`}
        >
          <Link
            href="/"
            className={`${styles.info} d-flex align-items-center text-decoration-none`}
          >
            <PiUserCircleLight className="fs-5" />
            <span>BY {blog?.author}</span>
          </Link>
          <Link
            href="/"
            className={`${styles.info} d-flex align-items-center text-decoration-none`}
          >
            <AiOutlineCalendar className="fs-5" />
            <span>{blog?.date}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
