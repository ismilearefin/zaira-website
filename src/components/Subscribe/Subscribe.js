import CustomizeBorder from "../CustomizeBorder/CustomizeBorder";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

import styles from "./Subscribe.module.css";
import SidebarNewsLetter from "../SidebarNewsLetter/SidebarNewsLetter";

const SocialMediaLinks = [
  {
    id: 1,
    name: "facebook",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    name: "twitter",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    name: "instagram",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    name: "Youtube",
    icon: <FaYoutube />,
  },
  {
    id: 5,
    name: "Linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    id: 6,
    name: "pinterest",
    icon: <FaPinterestP />,
  },
];

export default function Subscribe() {
  return (
    <div className={styles.SubscribeSection}>
      <h4>Subscribe & Followers</h4>
      <CustomizeBorder />

      <div className={`position-relative mt-5  row ${styles.socialicons}`}>
        {SocialMediaLinks.map((link) => (
          <SocialMediaLink key={link.id} icon={link.icon} text={link.name} />
        ))}
      </div>
    </div>
  );
}
