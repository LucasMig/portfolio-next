import Image from "next/image";
import styles from "@/app/ui/logo/styles.module.scss";
import Link from "next/link";
import { LogoProps } from "@/app/ui/logo/definitions";
import { Typography } from "@/app/ui/common";

export default function Logo({ customTextColor }: LogoProps) {
  return (
    <Link className={styles.logo} href="/">
      <Image
        src="/lucasmig-logo.webp"
        alt="Logo art"
        width={100}
        height={100}
      />
      <Typography variant="span" customStyles={{ color: customTextColor }}>
        Lucas Migliori
      </Typography>
    </Link>
  );
}
