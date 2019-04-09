import request from '@/utils/request'

console.log()

export function queryUserList({ page = 1 }) {
  return request(`${process.env.GHOST_API_URL}/ghost/api/v2/content/posts/?key=${process.env.GHOST_API_KEY}`);
}
