import { useRouter } from "next/router";
import styles from "./Breadcrumb.module.css";
import Link from "next/link";

export default function Breadcrumb() {
  const router = useRouter();

  const crumbs = [router.asPath].filter((crumb) => crumb !== "");

  return (
    <div className={styles.breadcrumbDiv}>
      <div className="container">
        <nav>
          <Link
            href={"/"}
            className={`${styles.breadcrumbLinks} text-secondary`}
          >
            Home
          </Link>

          {crumbs.map((crumbs) => (
            <Link
              key={crumbs}
              href={`${crumbs}`}
              className={`${styles.breadcrumbLinks}`}
            >
              Blogs
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
