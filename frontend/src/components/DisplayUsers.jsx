import React, { useState } from "react";
import SearchUser from "./SearchUser";
import TableUsers from "./TableUsers";

const DisplayUsers = () => {
  const [result, setResult] = useState([]);
  return (
    <div>
        <h1 className="text-center text-2xl font-bold uppercase my-8">Data User</h1>
      <SearchUser setResult={setResult}/>
      <TableUsers results={result}/>
    </div>
  );
};

export default DisplayUsers;
