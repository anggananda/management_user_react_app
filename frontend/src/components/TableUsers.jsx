import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteDataUsers } from "../utils/dataServices";

const TableUsers = ({ results }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
      setDatas(results);
  }, [results]);

  const handleClick = async (id) => {
    const con = window.confirm("Yakin mau menghapus data ini?");
    if (con) {
      try {
        await deleteDataUsers(id);
        setDatas(datas.filter(data => data.id !== id))
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <div className="mt-8">
      <table className="border w-[80%] mx-auto">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-4 border border-[rgba(0,0,0,0.4)]">Name</th>
            <th className="p-4 border border-[rgba(0,0,0,0.4)]">Age</th>
            <th className="p-4 border border-[rgba(0,0,0,0.4)]">Address</th>
            <th className="p-4 border border-[rgba(0,0,0,0.4)]">Status</th>
            <th className="p-4 border border-[rgba(0,0,0,0.4)]">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr
              key={data.id}
              className={`${index % 2 !== 0 && "bg-slate-200"}`}
            >
              <td className="p-4 border border-[rgba(0,0,0,0.4)]">
                {data.name}
              </td>
              <td className="p-4 border border-[rgba(0,0,0,0.4)] text-center">
                {data.age}
              </td>
              <td className="p-4 border border-[rgba(0,0,0,0.4)]">
                {data.address}
              </td>
              <td className="p-4 border border-[rgba(0,0,0,0.4)]">
                {data.status}
              </td>
              <td className="p-4 border border-[rgba(0,0,0,0.4)] text-center">
                <Link
                  to={`/update/${data.id}`}
                  className="px-3 py-2 rounded-md bg-green-800 hover:bg-green-600 text-white"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleClick(data.id)}
                  className="px-3 ml-2 py-[0.4rem] rounded-md bg-red-800 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
