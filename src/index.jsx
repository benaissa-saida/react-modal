import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Modal } from "./lib";

function App() {
  const [open, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <Modal title="Hello world" isOpened={open} closeModal={closeModal} />
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
