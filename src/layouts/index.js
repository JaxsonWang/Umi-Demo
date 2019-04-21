import { connect } from 'dva';
import Link from 'umi/link';
import styles from './index.scss'

const BasicLayout = ({ children, settings }) => {
  return (
    <div className={styles.siteWrapper}>
      <header className={styles.normal}>
        <h4>{<Link to={`/`}>{settings.title}</Link>}</h4>
        <h6>{settings.description}</h6>
      </header>
      <main role="role" className={`${styles.siteMain} ${styles.outer}`}>
        <div className={styles.inner}>
          {children}
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { settings } = state.settings;
  return {
    settings,
    loading: state.loading.models.settings,
  };
};

export default connect(mapStateToProps)(BasicLayout);