import request from '@/utils/request'
import { getParam } from '@/utils/reqTools'

import { GHOST_API_URL, GHOST_CONTENT_API_KEY } from '@/../config'

const query = getParam({
  key: GHOST_CONTENT_API_KEY,
  limit: 'all',
  include: 'tags,authors'
});

export function queryIndexList({ page = 1 }) {
  return request(`${GHOST_API_URL}/posts/?${query}`, {
    method: 'GET',
  })
}
