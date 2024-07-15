import { MdOutlineArrowOutward } from "react-icons/md";
import { Typography } from "../common";
import styles from "@/app/ui/footer/styles.module.scss";
import Link from "next/link";

export default function FooterPolicies() {
  return (
    <div className={styles.policiesContainer}>
      <Typography variant="text" size="tiny" customStyles={{ color: "#fff" }}>
        © 2024 Lucas Migliori. All rights reserved.
      </Typography>
      <Link href="/about">
        <Typography variant="text" size="tiny" customStyles={{ color: "#fff" }}>
          About me
        </Typography>
        <MdOutlineArrowOutward />
      </Link>
    </div>
  );
}
