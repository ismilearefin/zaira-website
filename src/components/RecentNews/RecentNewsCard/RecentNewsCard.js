import { useState } from 'react';
import styles from './RecentNewsCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { PiUserCircleLight } from 'react-icons/pi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RxCountdownTimer } from 'react-icons/rx';
import Button from '@/components/Button/Button';

export default function RecentNewsCard({ blog,image }) {
    const [hoverEffect, setHoverEffect] = useState(false);
    return (
      <div className="col-12 mb-2">
        <div
          className={`row d-flex justify-content-between flex-column mb-4 mb-xxl-0`}
        >
          <div
            className="position-relative col-12 mb-4"
            onMouseOver={() => setHoverEffect(true)}
            onMouseLeave={() => setHoverEffect(false)}
          >
            {
                image && (
                    <div className={`${styles.imageBox}`}>
              <Image
                src={blog?.img}
                alt="img"
                width={330}
                height={220}
                className={`${styles.image} rounded`}
              />
            </div>
                )
            }
          </div>
          <div className={`${styles.contentBox} col-12`}>
            <Link href={"/"} className={styles.categoryButton}>
              {blog?.category}
            </Link>
            <h4
              className={`${
                hoverEffect ? styles.hoverEffect : styles.initialState
              }`}
            >
              {blog?.title}
            </h4>
            <div
              className={`${styles.infoDiv} d-flex align-items-center justify-content-start mb-2`}
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
              <Link
                href="/"
                className={`${styles.info} d-flex align-items-center text-decoration-none`}
              >
                <RxCountdownTimer className="fs-5" />
                <span>{blog?.min} mins</span>
              </Link>
            </div>
            <Button text={"read more"} link={"/"} />
          </div>
        </div>
      </div>
    );
}
