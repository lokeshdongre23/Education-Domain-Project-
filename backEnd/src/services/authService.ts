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
// create of the jwt token

const setUser = (user: any) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      cNo: user.cNo,
      profession: user.profession,
      role: user.role,
    },
    secret
  );
};

// const getUser = (id: any) => {
//   // return sessionIdUserMap.get(id);
// };
// this is use to veryfy the jwt secrate
const getUser = (token: any) => {
  return jwt.verify(token, secret);
};

export default { setUser, getUser };
