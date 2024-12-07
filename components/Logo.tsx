import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <span className={styles.logo_first_letter}>The Chapters of Mojnu</span>
    </div>
  );
};

export default Logo;
