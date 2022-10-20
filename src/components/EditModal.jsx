// EDIT MODAL
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AppContext, useAppContext } from "../context/appContext";

const Edit = ({ show, onClose, rowData }) => {
  const { id, name, age } = rowData;
  const [formData, setFormData] = useState({ id, name, age });

  const { updateStudent } = useAppContext(AppContext);

  const handleUpdate = () => {
    updateStudent(formData);
    onClose();
  };

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  return (
    <>
      <form>
        <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal updating</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter name"
                defaultValue={name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter age"
                defaultValue={age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleUpdate(rowData)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default Edit;
