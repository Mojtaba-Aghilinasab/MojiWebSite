import styles from '../styles/Resume.module.css';
export default function Resume() {
  return (
    <div id="Resume" className={styles.resume}>
      <h2 className={styles.title}>
        <span>#</span>Resume
      </h2>
      <div className={styles.exp}>
        <h2 className={styles.exp_title}>
          Exp<span>.</span>
        </h2>
        <div className={styles.exp_detail}>
          <h4 className={styles.exp_year}>
            2020 <span>-</span> Current
          </h4>
          <h4 className={styles.exp_company}>Boomim</h4>
          <p className={styles.exp_data}>
            I worked as a Front-end Develeper in Boomim startUp. I used React.js
            for the landing page.
          </p>
        </div>
      </div>
      <div className={styles.exp}>
        <h2 className={styles.exp_title}>
          Edu<span>.</span>
        </h2>
        <div className={styles.exp_detail}>
          <h4 className={styles.exp_year}>
            2018 <span>-</span> 2022
          </h4>
          <h4 className={styles.exp_company}>Computer Engenering</h4>
          <p className={styles.edu_uni}>Payamenoor University</p>
        </div>
      </div>
    </div>
  );
}
