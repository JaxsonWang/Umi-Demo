/**
 * GET请求参数格式化
 * @param data 请求参数
 * @returns {string}
 */
export const getParam = (data) => {
  return Object.keys(data).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])).join('&');
}
