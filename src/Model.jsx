import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CrudApp = () => {
  const [items, setItems] = useState([]); // List of items
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [currentItem, setCurrentItem] = useState({ id: null, name: '' }); // Current item for add/edit
  const [isEditing, setIsEditing] = useState(false); // Toggle between add and edit modes

  // Open modal to add a new item
  const handleAdd = () => {
    setIsEditing(false);
    setCurrentItem({ id: null, name: '' });
    setShowModal(true);
  };

  // Open modal to edit an existing item
  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
    setShowModal(true);
  };

  // Handle saving the item (add or update)
  const handleSave = () => {
    if (isEditing) {
      // Update item
      setItems(items.map((item) => (item.id === currentItem.id ? currentItem : item)));
    } else {
      // Add new item
      setItems([...items, { ...currentItem, id: Date.now() }]);
    }
    setShowModal(false);
  };

  // Handle deleting an item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>CRUD Operation in React with Modal</h2>
      <Button onClick={handleAdd} className="mb-3">
        Add New Item
      </Button>

      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <div>
              <Button variant="warning" size="sm" onClick={() => handleEdit(item)}>
                Edit
              </Button>{' '}
              <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Add/Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Item' : 'Add New Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={currentItem.name}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CrudApp;
