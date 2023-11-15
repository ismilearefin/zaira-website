import Image from "next/legacy/image";
import styles from "./HeroCard.module.css";
import Link from "next/link";

import { AiOutlineCalendar } from "react-icons/ai";

import { useState } from "react";

export default function HeroCard({ blog }) {
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div className="position-relative col-12">
      <div
        className={`position-relative ${styles.bannerPostThumb}`}
        onMouseOver={() => setHoverEffect(true)}
        onMouseLeave={() => setHoverEffect(false)}
      >
        <div className={`position-relative ${styles.mainImg} overflow-hidden`}>
          <Image
            src={blog?.img}
            alt="img"
            layout="fill"
            className={styles.imageCard}
          />

          <div
            className={`overlay position-absolute w-100 h-100 ${styles.overlay}`}
          />
        </div>
        <div className={`${styles.bannerPostContent} position-absolute `}>
          <Link href={"/"}>{blog?.category}</Link>
          <h4
            className={`${
              hoverEffect ? styles.hoverEffect : styles.initialState
            }`}
          >
            {blog?.title}
          </h4>
          <div
            className={`${styles.infoDiv} d-flex align-items-center justify-content-start`}
          >
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
    </div>
  );
}
