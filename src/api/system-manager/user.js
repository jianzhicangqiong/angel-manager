
import axios from 'axios'
// 获得用户列表
export const getUsers = (currentPage, pageSize) => {
  return axios.get("/api/user?currentPage="+currentPage+"&pageSize="+pageSize);
};

//通过Id删除用户
export const deleteUserById = userId => {
  return axios.delete("/api/user/" + userId);
}


