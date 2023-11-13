import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose,MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import logo from "../../assets/logoBlog.png";
import drawerpng from '../../assets/drawerPng.jpg';
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [dropDown, setDropDown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  console.log(dropDown);
  return (
    <header>
      <div className={`${styles.topHeaderArea} d-none d-lg-block`}>
        <div className="container">
          {/* Destop drawer */}
          {
            isOpen && (
              <div className={`${styles.DestopDrawer} d-none d-lg-block`}>
                <div className="d-flex justify-content-end ">
                  <div className={`${styles.mobileDrawerCloseIcon}`} onClick={() => setIsOpen(false)}><MdClose/></div>
                </div>
                <Image src={logo} alt="logo" width={170} height={50} className="mb-4"/>
                <p className="mb-4">The argument in favor of using filler text goes something like this: If you use any real content in the Consulting Process anytime you reach.</p>
                <div className={styles.drawerGallery}>
                  <Image className="rounded" src={drawerpng} alt="png" width={85} height={70}/>
                  <Image className="rounded" src={drawerpng} alt="png" width={85} height={70}/>
                  <Image className="rounded" src={drawerpng} alt="png" width={85} height={70}/>
                  <Image className="rounded" src={drawerpng} alt="png" width={85} height={70}/>
                  <Image className="rounded" src={drawerpng} alt="png" width={85} height={70}/>
                  <Image className="rounded" src={drawerpng} alt="png" width={85} height={70}/>
                </div>
                <h4>Get In Touch</h4>
                <div>
                  <div className="d-flex align-items-center mb-2">
                  <MdEmail className={styles.contactIcons}/> 
                  <a href="mailto:info@webmail.com" className="text-decoration-none text-muted">info@webmail.com</a>
                    </div>
                  <div className="d-flex align-items-center mb-2">
                  <MdPhone className={styles.contactIcons}/> 
                  <a href="tel:88899988877" className="text-decoration-none text-muted">888 999 888 77</a>
                    </div>
                  <div className="d-flex align-items-center mb-2">
                  <MdLocationOn className={styles.contactIcons}/> 
                  <a href="#" className="text-decoration-none text-muted"> 12/A, New Booston, NYC</a>
                    </div>
                  </div>
              </div>
            )
          }
          {/* Top header area */}
          <div className="d-flex align-items-center justify-content-between px-2">
            <div className="d-flex align-items-center">
              <div className={`${styles.hamburger} me-3`} onClick={() => setIsOpen(true)}>
                <GiHamburgerMenu />
              </div>
              <div className={styles.socialMediaIcons}>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <form>
              <input
                type="search"
                className={styles.searchBox}
                placeholder="Search here ..."
              />
              <button className={styles.searchButton} type="submit">
                <BiSearch />
              </button>
            </form>
          </div>
          {/* top header area end */}
        </div>
      </div>
      {/* bottom header area Start */}
      <div className={styles.bottomHeaderArea}>
        <div className="container d-flex align-items-center justify-content-between">
          <Link href='/'><Image src={logo} alt="logo" width={180} height={50} /></Link>
          {/* Destop menu bar */}
          <div className={`${styles.menuItems} d-none d-lg-flex`}>
            <div
              className="position-relative text-decoration-none "
              onMouseOver={() => setDropDown("home")}
              onMouseLeave={() => setDropDown(null)}
            >
              <span>
                Home <BiChevronDown />
              </span>

              {dropDown === "home" && (
                <div
                  className={styles.dropDown}
                  onMouseOver={() => setDropDown("home")}
                  onMouseLeave={() => setDropDown(null)}
                >
                  <Link href="/">Home - 1</Link>
                  <Link href="/">Home - 2</Link>
                  <Link href="/">Home - 3</Link>
                  <Link href="/">Home - 4</Link>
                  <Link href="/">Home - 5</Link>
                </div>
              )}
            </div>

            <Link href="/" className="text-decoration-none">
              About Us
            </Link>
            <div
              className="position-relative text-decoration-none"
              onMouseOver={() => setDropDown("features")}
              onMouseLeave={() => setDropDown(null)}
            >
              <span>
                Features <BiChevronDown />
              </span>
              {dropDown === "features" && (
                <div
                  className={styles.dropDown}
                  onMouseOver={() => setDropDown("features")}
                  onMouseLeave={() => setDropDown(null)}
                >
                  <Link href="/">features - 1</Link>
                  <Link href="/">features - 2</Link>
                  <Link href="/">features - 3</Link>
                </div>
              )}
            </div>

            <div
              className="position-relative text-decoration-none"
              onMouseOver={() => setDropDown("categories")}
              onMouseLeave={() => setDropDown(null)}
            >
              <span>
                Categories <BiChevronDown />
              </span>
              {dropDown === "categories" && (
                <div
                  className={styles.dropDown}
                  onMouseOver={() => setDropDown("categories")}
                  onMouseLeave={() => setDropDown(null)}
                >
                  <Link href="/">Blog Layout - 1</Link>
                  <Link href="/">Blog Layout - 2</Link>
                  <Link href="/">Blog Layout - 3</Link>
                </div>
              )}
            </div>
            <Link href="/" className="text-decoration-none">
              Contact
            </Link>
          </div>

          {/* Mobile & tab menu bar */}
          <div className={`${styles.menuItems} d-flex d-lg-none`}>
            <div onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu className={`${styles.mobileHamburger}`} />
            </div>
            {/* Drawer For Mobile Devices */}
            {isOpen && (
              <div className={styles.mobileDrawer}>
                <div className="d-flex justify-content-between mb-3">
                  <Image src={logo} alt="logo" width={150} height={50} />
                  <span
                    className={styles.drawerClose}
                    onClick={() => setIsOpen(false)}
                  >
                    <MdClose></MdClose>
                  </span>
                </div>
                <form className={styles.mobileSearch}>
                  <input type="search" placeholder="Search here ..." />
                  <button type="submit">
                    <BiSearch />
                  </button>
                </form>

                <div className="d-flex flex-column mt-3 border-top">
                  <div className={`${styles.drawerButton}`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Home </p>
                      <div
                        className={styles.dropDownIcon}
                        onClick={() => setDropDown(dropDown ? null : "home")}
                      >
                        <BiChevronDown />
                      </div>
                    </div>

                    {dropDown === "home" && (
                      <div className={styles.ResponsiveDropDown}>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Home - 1
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Home - 2
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Home - 3
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Home - 4
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Home - 5
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link href="/" className={`${styles.drawerButton} py-3`}>
                    About Us
                  </Link>
                  <div
                    className={`${styles.drawerButton}`}
                    onMouseOver={() => setDropDown("features")}
                    onMouseLeave={() => setDropDown(null)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Features</p>
                      <div
                        className={styles.dropDownIcon}
                        onClick={() =>
                          setDropDown(dropDown ? null : "features")
                        }
                      >
                        <BiChevronDown />
                      </div>
                    </div>
                    {dropDown === "features" && (
                      <div className={styles.ResponsiveDropDown}>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          features - 1
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          features - 2
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          features - 3
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className={`${styles.drawerButton}`}
                    onMouseOver={() => setDropDown("categories")}
                    onMouseLeave={() => setDropDown(null)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Categories</p>
                      <div
                        className={styles.dropDownIcon}
                        onClick={() =>
                          setDropDown(dropDown ? null : "categories")
                        }
                      >
                        <BiChevronDown />
                      </div>
                    </div>
                    {dropDown === "categories" && (
                      <div
                        className={styles.ResponsiveDropDown}
                        onMouseOver={() => setDropDown("categories")}
                        onMouseLeave={() => setDropDown(null)}
                      >
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Blog Layout - 1
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Blog Layout - 2
                        </Link>
                        <Link
                          href="/"
                          className={styles.responsiveDropdownButton}
                        >
                          Blog Layout - 3
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/" className={`${styles.drawerButton} py-3`}>
                    Contact
                  </Link>
                </div>

                <div className={styles.socialMediaIconsMobile}>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div
            className={`${
              isOpen ? styles.menuBackDropVisibal : styles.menuBackDrop
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
}
