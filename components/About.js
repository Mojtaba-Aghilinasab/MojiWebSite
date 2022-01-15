import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.flex}>
      <div className={styles.text}>
        <h2>
          Hello<span>!</span>
        </h2>
        <p>
          My Name is Moji. I am a Full-Stack Developer. Currently I'm a student
          of Computer Engenering. I am a part-time Freelancer.
        </p>
      </div>
      <div className={styles.data}>
        <img className={styles.pic} src="/W.jpeg" alt="moji" />
        <div className={styles.links}>
          <img src="/github.svg" />
          <img src="/Instagram.svg" />
          <img src="/linkedin.svg" />
        </div>
      </div>
    </div>
  );
}
