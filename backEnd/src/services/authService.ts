/**
 * this is the service whic is use store the session id
 */

const sessionIdUserMap = new Map();

const setUser = (id: any, user: any) => {
  sessionIdUserMap.set(id, user);
  //   console.log("user from service", user);
};

const getUser = (id: any) => {
  return sessionIdUserMap.get(id);
};

export default { setUser, getUser };
