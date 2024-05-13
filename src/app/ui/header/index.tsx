import Logo from "@/app/ui/logo";
import Navigation from "@/app/ui/navigation";
import styles from "@/app/ui/header/styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
