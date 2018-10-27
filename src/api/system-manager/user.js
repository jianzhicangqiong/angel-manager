
import axios from 'axios'
// 获得用户列表
export const getUsers = (currentPage, pageSize) => {
  return axios.get("/api/user?currentPage="+currentPage+"&pageSize="+pageSize, {
    headers: {
      "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1NDE2Njk2MzEsInN1YiI6InJvb3QiLCJjcmVhdGVkIjoxNTM5MDc3NjMxODMxfQ.ds0M5wEmu2p35nwOyOXYvDIyKGdYHHPd-4PxpE1P8-u1OOOOJ5bvmoBZIE15E49YSqOZvajkFUY5LlNovGel7g"
    }
  });
};

//通过Id删除用户
export const deleteUserById = userId => {
  return axios.delete("/api/user/" + userId);
};


