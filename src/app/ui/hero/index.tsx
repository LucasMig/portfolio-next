import Image from "next/image";
import styles from "@/app/ui/hero/styles.module.scss";
import Typography from "@/app/ui/common/typography";
import { Button } from "@/app/ui/common";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.section}>
      <Image
        src="/Profile-new.webp"
        alt="lucas profile picture"
        width={150}
        height={150}
      />

      <Typography
        variant="title"
        customStyles={{
          textAlign: "center",
        }}
      >
        <span>I'm Lucas,</span> a full stack developer based in Brazil.
      </Typography>

      <div className={styles.btnContainer}>
        <Button variant="outline">
          <Link href="/contact">
            Let's talk <AiOutlineArrowRight />
          </Link>
        </Button>
        <Button>
          <Link href="/projects">See my projects</Link>
        </Button>
      </div>
    </section>
  );
}
