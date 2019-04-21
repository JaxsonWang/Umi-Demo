import request from '@/utils/request'
import { getParam } from '@/utils/reqTools'

import { GHOST_API_URL, GHOST_CONTENT_API_KEY } from '@/../config'

const query = getParam({
    key: GHOST_CONTENT_API_KEY
});

export function querySettings() {
    return request(`${GHOST_API_URL}/settings/?${query}`, {
        method: 'GET',
    })
}
