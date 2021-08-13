import createRequest from "../fetchData";

const request = createRequest('/jf-platform-api/mng/');

export const getUserList = () => {
  return request.get({
    url: '/auth/menu/user_list'
  })
};

export const postLogin = () => {
  return request.post({
    url: '/login'
  })
};

