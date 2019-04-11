import { connect } from 'dva';
import {Row, Col} from 'antd'
import styles from './$id.scss'

const IndexItem = ({ posts, loading }) => {
  
  const createMarkup = () => {
    return {__html: posts.html};
  }

  return (
    <div>
      <Row>
        <Col className={styles.headerTitle}>
          <h4>{posts.title}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={createMarkup()}/>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { posts } = state.postItem;
  return {
    posts,
    loading: state.loading.models.postItem,
  };
};

export default connect(mapStateToProps)(IndexItem);