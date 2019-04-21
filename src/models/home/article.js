import { queryIndexItem } from '@/services/home/article';

export default {
  namespace: 'postItem',
  state: {
    posts: []
  },
  reducers: {
    save(state, { payload: { posts } }) {
      return { ...state, posts };
    },
  },
  effects: {
    *fetchIndexItem({ payload: postid }, { call, put }) {
      const { data } = yield call(queryIndexItem, postid);
      yield put({
        type: 'save',
        payload: {
          posts: data.posts[0]
        }
      });
    },
  },
  // 订阅模式
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname !== '/') {
          // 获取文章数据
          dispatch({ type: 'fetchIndexItem', payload: pathname });
        }
      });
    },
  },
};
