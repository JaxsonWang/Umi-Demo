import request from '@/utils/request'
import {getParam} from '@/utils/reqTools'

import {GHOST_API_URL, GHOST_CONTENT_API_KEY} from '@/../config'

export function queryIndexItem({ postID }) {

  const query = getParam({
    key: GHOST_CONTENT_API_KEY
  });

  return request(`${GHOST_API_URL}/posts/${postID}/?${query}`, {
    method: 'GET',
  })
}
