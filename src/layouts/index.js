import styles from './index.scss'

function BasicLayout(props) {
  return (
    <div className={styles.siteWrapper}>
      <header className={styles.normal}>
        <h4>淮城一只猫</h4>
      </header>
      <main role="role" className={`${styles.siteMain} ${styles.outer}`}>
        <div className={styles.inner}>
          {props.children}
        </div>
      </main>
    </div>
  );
}

export default BasicLayout;
