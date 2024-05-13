import { MdOutlineArrowOutward } from "react-icons/md";
import { Typography } from "../common";
import styles from "@/app/ui/footer/styles.module.scss";
import Link from "next/link";

export default function FooterPolicies() {
  return (
    <div className={styles.policiesContainer}>
      <Typography variant="text" size="tiny" invertTextColor>
        © 2021 Lucas Migliori. All rights reserved.
      </Typography>
      <Link href="/about">
        <Typography variant="text" size="tiny" invertTextColor>
          About me
        </Typography>
        <MdOutlineArrowOutward />
      </Link>
    </div>
  );
}
