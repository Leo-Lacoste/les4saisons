import React, { useState } from "react";
import "./Modal.css";

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if (!isOpen)
    return (
      <button className="Modal-button" onClick={toggle}>
        Et après ?
      </button>
    );
  return (
    <div className="Modal-root">
      <div className="Modal-main">
        <div className="Modal-content">{children}</div>
        <div className="Modal-actions">
          <button className="Modal-button" onClick={toggle}>
            OK, je vais être patient...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
