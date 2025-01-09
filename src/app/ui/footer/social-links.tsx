import { socialMediaInfo } from "@/app/_data/socialMediaInfo";
import styles from "@/app/ui/footer/styles.module.scss";
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";

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
