# mik-modal

### installation

`npm install mik-modal`

### Usage

```javascript
import { useState } from "react";
import Modal from "mik-modal/dist/Modal";

function Example() {
  const [open, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Hello Modal</h1>
      <Modal title="Hello world" isOpened={open} closeModal={closeModal} />
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
}
```
