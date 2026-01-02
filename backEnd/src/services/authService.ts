/**
 * this is the service whic is use store the session id
 */

// const sessionIdUserMap = new Map();
import jwt from "jsonwebtoken";

const secret = "Lokesh123";

// const setUser = (id: any, user: any) => {
// sessionIdUserMap.set(id, user);
//   console.log("user from service", user);
// };

const setUser = (user: any) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      cNo: user.cNo,
      profession: user.profession,
    },
    secret
  );
};

// const getUser = (id: any) => {
//   // return sessionIdUserMap.get(id);
// };

const getUser = (token: any) => {
  return jwt.verify(token, secret);
};

export default { setUser, getUser };
