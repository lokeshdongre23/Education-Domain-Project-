import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { allusers } from "../services/services";

function AllUsers() {
  const [users, setUsers] = useState([]);

  // const user = allusers;

  const getUSerdata = async () => {
    const user = await allusers();
    console.log(user);
    setUsers(user.data);
  };
  useEffect(() => {
    getUSerdata();
  }, []);
  // getUSerdata();
  // console.log(user);

  console.log(users);

  return (
    <>
      <div>
        <ul>
          <h1>All Users</h1>
          {users.map((elem, index) => (
            <div key={index}>
              -----------------------------------------
              <br />
              -----------------------------------------
              <li>username: {elem.uName}</li>
              <li>Email: {elem.email}</li>
              <li>Contact Number: {elem.cNo}</li>
              <li>Profession: {elem.profession}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AllUsers;
