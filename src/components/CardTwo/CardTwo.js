import Image from "next/image";
import styles from "./CardTwo.module.css";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { RxCountdownTimer } from "react-icons/rx";
import Button from "../Button/Button";

export default function CardTwo({ blog, reverse, addDetails }) {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <div className="col-12">
      <div
        className={`row d-flex justify-content-between mb-4 mb-xxl-0 ${
          reverse && "align-items-center flex-row-reverse  "
        } `}
      >
        <div
          className="position-relative col-12 col-xxl-6 mb-4"
          onMouseOver={() => setHoverEffect(true)}
          onMouseLeave={() => setHoverEffect(false)}
        >
          <div className={`${styles.imageBox}`}>
            <Image
              src={blog?.img}
              alt="img"
              width={480}
              height={340}
              className={`${styles.image} rounded`}
            />
          </div>
        </div>
        <div className={`${styles.contentBox} col-12 col-xxl-6`}>
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
            className={`${styles.infoDiv} d-flex align-items-center justify-content-start`}
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
          {addDetails && (
            <div className="my-2">
              <p className={styles.detailsText}>{blog?.details}</p>
            </div>
          )}
          <Button text={"read more"} link={"/"} />
        </div>
      </div>
    </div>
  );
}
