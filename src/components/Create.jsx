// CREATE
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { AppContext, useAppContext } from "../context/appContext";

export const Create = () => {
  const [dataUser, setDataUser] = useState({
    name: "",
    age: "",
  });

  const { createStudent } = useAppContext(AppContext);

  const onChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createStudent({ id: Date.now(), ...dataUser });
    

    setDataUser({
      name: "",
      age: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={dataUser.name}
            name="name"
            onChange={onChange}
          />
          <label>Name</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            placeholder="age"
            value={dataUser.age}
            name="age"
            onChange={onChange}
          />
          <label>Age</label>
        </div>
        <div className="d-grid mt-2">
          <Button variant="primary" size="lg" className="create" type="submit">
            <i className="fa-solid fa-circle-plus"></i>
          </Button>
        </div>
      </form>
    </>
  );
};
