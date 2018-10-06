
import axios from 'axios'
// 获得用户列表
export const getUsers = () => {
  return axios.get("/api/user");
};

//通过Id删除用户
export const deleteUserById = userId => {
  return axios.delete("/api/user/" + userId);
}


