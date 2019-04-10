import { queryIndexItem } from '@/services/$id';

export default {
  namespace: 'postItem',
  state: {
    info: []
  },
  reducers: {
    save(state, { payload: { info } }) {
      return { ...state, info };
    },
  },
  effects: {
    *fetchIndexList({ payload: { postid } }, { call, put }) {
      const {data} = yield call(queryIndexItem, { postid });
      yield put({
        type: 'save',
        payload: {
          info: data
        }
      });
    },
  },
  // 订阅模式 进入`/`触发获取数据
  subscriptions: {
    setup({ dispatch, history }) {
      console.log(history)
      return history.listen(({ pathname, query }) => {
        // if (pathname === '/') {
        //   dispatch({ type: 'fetchIndexList', payload: query });
        // }
      });
    },
  },
};
