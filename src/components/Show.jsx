// SHOWS
import React, { useState } from "react";
import { AppContext, useAppContext } from "../context/appContext";
import Edit from "./EditModal";

const Show = () => {
  const { students } = useAppContext(AppContext);
  const [rowData, setRowData] = useState({});
  const { deleteStudent } = useAppContext(AppContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (student) => {
    setRowData(student);
    setShow(true);
  };

  const handleDelete = (student) => {
    deleteStudent(student);
  };

  return (
    <>
      <table className="table table-dark table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th scope="row">1</th>
              <td>{student.name} </td>
              <td>{student.age}</td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-info"
                    onClick={() => handleShow(student)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Edit show={show} onClose={handleClose} rowData={rowData} />
    </>
  );
};

export default Show;
