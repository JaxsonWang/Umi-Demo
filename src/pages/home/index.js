import { connect } from 'dva';
import Link from 'umi/link';

import { List, Avatar, Icon, Tag } from 'antd';
import dayjs from 'dayjs'

import styles from './index.scss';

const tagList = (list) => {
  return  list.map((item) =>
    <Tag key={item.id}>{item.name}</Tag>
  );
};

const Index = ({ list, settings, loading }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      loading={loading}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={list}
      footer={<div>{ settings.description }</div>}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={!loading && <div className={styles.featureImage}><img alt="文章插图" src={item.feature_image} /></div>}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.authors[0].profile_image} />}
            title={<Link to={`/${item.slug}`}>{item.title}</Link>}
            description={
              <div>
                <Tag color="blue"><time dateTime={item.published_at}>{dayjs(item.published_at).format('YYYY-MM-DD')}</time></Tag>
                {tagList(item.tags)}
              </div>
            }
          />
          {item.excerpt}
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  const { list, total, page } = state.index;
  const { settings } = state.settings;
  return {
    list,
    total,
    page,
    settings,
    loading: state.loading.models.index,
  };
};

export default connect(mapStateToProps)(Index);
