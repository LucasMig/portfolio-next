import Logo from "@/app/ui/logo";
import styles from "@/app/ui/footer/styles.module.scss";
import FooterPolicies from "@/app/ui/footer/footer-policies";
import FooterInfo from "@/app/ui/footer/footer-info";
import SocialLinks from "@/app/ui/footer/social-links";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo invertTextColor={true} />
      <hr />
      <FooterInfo />
      <SocialLinks />
      <hr />
      <FooterPolicies />
    </footer>
  );
}
