import { Grid, Row, Col } from 'react-flexbox-grid';

import styles from './index.scss';

function BasicLayout(props) {
  return (
    <div>
      <Row>
        <Col className={styles.normal}>
          淮城一只猫
        </Col>
      </Row>
      <Grid>
        <Row>
          <Col>
            {props.children}
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default BasicLayout;
