import axios from 'axios'


// 用户登录
export const checkUser = params => {
  // 添加请求头
  return axios.post("/api/auth/token", params, {
    headers: {
      'Content-Type':'application/json'
    }
  });
}

