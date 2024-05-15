import { BsTwitterX, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import styles from "@/app/ui/footer/styles.module.scss";
import { Typography } from "@/app/ui/common";
import { socialMediaInfo } from "@/app/_data/socialMediaInfo";

const socialIconMap = {
  twitter: BsTwitterX,
  linkedin: BsLinkedin,
  instagram: BsInstagram,
  youtube: BsYoutube,
};

export default function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      {socialMediaInfo.map((socialMedia) => {
        const Icon =
          socialIconMap[socialMedia.name as keyof typeof socialIconMap];

        return (
          <li key={socialMedia.name}>
            <Link href={socialMedia.url} target="_blank">
              <Icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
