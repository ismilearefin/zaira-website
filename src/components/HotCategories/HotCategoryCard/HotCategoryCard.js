import Image from "next/legacy/image";
import styles from "./HotCategoryCard.module.css";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

export default function HotCategoryCard({ data }) {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <Link
      href={"/"}
      className={`${styles.main} position-relative mb-2 col-12 rounded text-decoration-none d-flex justify-content-between p-4`}
      style={{ backgroundImage: `url(${data?.img})`, backgroundSize: "cover" }}
      onMouseOver={()=>setHoverEffect(true)} 
      onMouseLeave={()=>setHoverEffect(false)}
    >
      <span className={`${!hoverEffect ? styles.categoryName :styles.hoverEffectText} `}>{data?.category}</span>
      <span>
        <GoArrowUpRight className={`${!hoverEffect ? styles.icon : styles.iconHoverEffect} fs-3 text-white`} />
      </span>
    </Link>
  );
}
