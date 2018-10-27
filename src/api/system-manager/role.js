import axios from 'axios'

//通过Id获得子角色
export const getRolesByParentId = (parentId) => {
  return axios.get("/api/role/" + parentId)
}
