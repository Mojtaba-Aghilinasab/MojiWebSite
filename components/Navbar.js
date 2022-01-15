import styles from '../styles/Navbar.module.css';
export default function Navbar() {
  return (
    <div className={styles.flex}>
      <a href="/">
        <h1 className={styles.logo}>
          M<span>.</span>Aghili
        </h1>
      </a>
      <ul className={styles.navLinks}>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        {/* <li>
          <a href="#Portfolio">Portfolio</a>
        </li> */}
        <li>
          <a href="#Resume">Resume</a>
        </li>
        {/* <li>
          <a href="#ContactMe">Contact Me</a>
        </li> */}
      </ul>
    </div>
  );
}
