import { queryIndexList } from '@/services/home/index';

export default {
  namespace: 'index',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetchIndexList({ payload: { page = 1 } }, { call, put }) {
      const {data} = yield call(queryIndexList, { page });
      yield put({
        type: 'save',
        payload: {
          list: data.posts,
          total: data.meta.pagination.total,
          page: data.meta.pagination.page
        }
      });
    },
  },
  // 订阅模式 进入`/`触发获取数据
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetchIndexList', payload: query });
        }
      });
    },
  },
};
