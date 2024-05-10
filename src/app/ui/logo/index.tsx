import Image from "next/image";
import styles from "@/app/ui/logo/styles.module.scss";
import Link from "next/link";

export default function Logo() {
    return (
        <Link className={styles.logo} href='/'>
            <Image 
                src="/lucasmig-logo.webp" 
                alt="Logo art" 
                width={100}
                height={100}
                />
                <span>Lucas Migliori</span>
        </Link>
    )
}