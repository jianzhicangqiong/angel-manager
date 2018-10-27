import axios from 'axios'

//通过Id删除用户
export const getRolesByParentId = (parentId) => {
  return axios.get("/api/role/" + parentId)
}
