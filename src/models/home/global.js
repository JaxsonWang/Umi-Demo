import { querySettings } from '@/services/home/global';

export default {
    namespace: 'settings',
    state: {
        settings: [],
        meta: []
    },
    reducers: {
        save(state, { payload: { settings, meta } }) {
            return { ...state, settings, meta };
        },
    },
    effects: {
        *fetchSettings({ payload }, { call, put, select }) {
            const settings = yield select(state => state.settings.settings);
            // 判断 state.settings 是否为空，为空获取数据
            if (Object.keys(settings).length === 0) {
                const { data } = yield call(querySettings);
                yield put({
                    type: 'save',
                    payload: {
                        settings: data.settings,
                        meta: data.meta
                    }
                });
            }
        },
    },
    // 订阅模式
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                // 获取设置数据
                dispatch({ type: 'fetchSettings' });
            });
        },
    },
};
