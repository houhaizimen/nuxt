let baseUrl
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:3000'
} else {
  // 正式环境
  baseUrl = 'https://' + location.hostname + '/'
}

export default {
  baseUrl
}