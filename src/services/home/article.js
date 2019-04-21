import request from '@/utils/request'
import { getParam } from '@/utils/reqTools'

import { GHOST_API_URL, GHOST_CONTENT_API_KEY } from '@/../config'

const query = getParam({
  key: GHOST_CONTENT_API_KEY,
  include: 'tags,authors'
});

export function queryIndexItem(slug) {
  return request(`${GHOST_API_URL}/posts/slug${slug}/?${query}`, {
    method: 'GET',
  })
}
