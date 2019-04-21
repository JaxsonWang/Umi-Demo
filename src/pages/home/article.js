import { connect } from 'dva';
import { Row, Col, Tag, Skeleton } from 'antd';
import styles from './article.scss';

const IndexItem = ({ posts, loading }) => {

  return (
    <div>
      <Skeleton loading={loading} active paragraph={{ rows: 10 }}>
      <Row>
        <Col className={styles.headerTitle}>
          <h4>{posts.title}</h4>
          {
            (posts.authors ? posts.authors : []).map(item => {
              return (
                <Tag key={item.id} href="#">作者：{item.name}</Tag>
              );
            })
          }
          {
            (posts.tags ? posts.tags : []).map(item => {
              return (
                <Tag key={item.id}>标签：{item.name}</Tag>
              )
            })
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: posts.html }}/>
        </Col>
      </Row>
      </Skeleton>
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
