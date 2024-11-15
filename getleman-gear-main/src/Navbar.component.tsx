import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1><span>Gentleman's Gear</span></h1>
      
        <div className={styles.links}>
          <h3 className={styles.link}>Início</h3>
          <h3 className={styles.mainLink}><span>Produto</span></h3>
          <h3 className={styles.link}>Galeria</h3>
          <h3 className={styles.link}>Sobre</h3>    
        </div>
    </nav>
  );
};
