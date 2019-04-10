import request from '@/utils/request'
import { GHOST_API_URL } from '../../config';

// 接口文档：https://docs.ghost.org/api/content/#authors

/**
 * 根据用户id获取用户数据
 * @param userid 用户ID
 * @returns {Promise<*>}
 */
export const getUserInfo = (userid) => {
  return request(`${GHOST_API_URL}/authors/${userid}`, {
    method: 'GET',
  })
};
