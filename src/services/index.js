import request from '@/utils/request'
import {getParam} from '@/utils/reqTools'

import {GHOST_API_URL, GHOST_CONTENT_API_KEY} from '@/../config'

export function queryIndexList({ page = 1 }) {

  const query = getParam({
    key: GHOST_CONTENT_API_KEY,
    limit: 'all',
    include: 'tags,authors'
  });

  return request(`${GHOST_API_URL}/posts/?${query}`, {
    method: 'GET',
  })
}
