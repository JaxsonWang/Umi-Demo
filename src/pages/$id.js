import {Row, Col} from 'antd'
import styles from './$id.scss'

const IndexItem = () => {
  return (
    <div>
      <Row>
        <Col className={styles.headerTitle}>
          <h4>标题</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>内容</div>
        </Col>
      </Row>
    </div>
  );
};

export default IndexItem
