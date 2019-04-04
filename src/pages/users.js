import { connect } from 'dva';
import { Button, Table, Pagination, Popconfirm, LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import styles from './users.css';
import { PAGE_SIZE } from '../constants';

/**
 * 用户列表管理
 * @param dispatch DvaJS dispatch函数 用于触发action 的函数 详解：https://dvajs.com/guide/concepts.html#dispatch-%E5%87%BD%E6%95%B0
 * @param dataSource 用户列表信息
 * @param total 总数据数量
 * @param loading 加载状态
 * @param current 当前页码
 * @returns {*}
 * @constructor
 */
function Users({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
  }

  function getUserListData() {
    dispatch({
      type: 'users/fetchUserList',
      payload: {}, // 需要传递的信息
    });
  }

  /**
   * 页码改变的回调
   * @param page 改变后的页码
   * @param pageSize 每页条数
   */
  function onChangeUserPagination(page, pageSize) {
    dispatch({
      type: 'users/fetchUserList',
      payload: {
        page: page,
      }, // 需要传递的信息
    });
  }

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '电子邮件',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '个人网站',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, { id }) => (

        <span className={styles.operation}>
          <Button>编辑</Button>
            <Popconfirm title="确定删除？" onConfirm={deleteHandler.bind(null, id)}>
               <Button>删除</Button>
            </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <LocaleProvider locale={zh_CN}>
      <div className={styles.normal}>
        <div>
          <Button type="primary" onClick={getUserListData}>获取用户数据</Button>

          <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            rowKey={record => record.id}
            pagination={false}
          />

          <Pagination
            className="ant-table-pagination"
            total={total} // 数据总数
            current={current} // 当前页数
            pageSize={PAGE_SIZE} // 每页条数
            onChange={onChangeUserPagination}
          />
        </div>
      </div>
    </LocaleProvider>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    list,
    total,
    page,
    loading: state.loading.models.users,
  };
}

export default connect(mapStateToProps)(Users);
