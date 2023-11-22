import { useRouter } from "next/router";
import styles from "./Breadcrumb.module.css";
import Link from "next/link";

export default function Breadcrumb() {
  const router = useRouter();

  
  const paths = [router.asPath].filter((crumb) => crumb !== "");
  const crumbs = paths[0].split("/").filter((crumb) => crumb !== "");
  const routeNames = crumbs.map((crumb) => decodeURIComponent(crumb));

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

          {routeNames.map((crumbs) => (
            <Link
              key={crumbs}
              href={`${crumbs}`}
              className={`${styles.breadcrumbLinks}`}
            >
             {crumbs}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
