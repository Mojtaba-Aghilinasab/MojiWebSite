import styles from '../styles/Skills.module.css';
export default function Skills() {
  return (
    <div id="Skills">
      <div className={styles.skills}>
        <h2 className={styles.title}>
          <span>#</span>Skills
        </h2>
        <div className={styles.skills_imgs_flex}>
          <img className={styles.skill_img} src="/html.png" alt="html" />
          <img className={styles.skill_img} src="/css.png" alt="css" />
          <img className={styles.skill_img} src="/sass.png" alt="sass" />
          <img className={styles.skill_img} src="/js.png" alt="js" />
          <img className={styles.skill_img} src="/ts.png" alt="ts" />
          <img className={styles.skill_img} src="/reactjs.png" alt="reactjs" />
          <img className={styles.skill_img} src="/nodejs.png" alt="nodejs" />
          <img className={styles.skill_img} src="/go.png" alt="go" />
          <img className={styles.skill_img} src="/python.png" alt="python" />
          <img className={styles.skill_img} src="/mongodb.png" alt="mongodb" />
          <img className={styles.skill_img} src="/mysql.png" alt="mysql" />
          <img
            className={styles.skill_img}
            src="/postgresql.png"
            alt="postgresql"
          />
          <img className={styles.skill_img} src="/git.png" alt="git" />
          <img className={styles.skill_img} src="/docker.png" alt="docker" />
          <img className={styles.skill_img} src="/bash.png" alt="bash" />
          <img className={styles.skill_img} src="/vim.png" alt="vim" />
        </div>
      </div>
    </div>
  );
}
