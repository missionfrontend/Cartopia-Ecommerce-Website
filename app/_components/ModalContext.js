"use client"

import { createContext, useState } from "react";


const ModalContext = createContext();
function Modal({ children }) {
  const [isShow, setisShow] = useState(false);
  const close = () => setisShow("");
  const show = setisShow;
  return (
    <ModalContext.Provider value={{ isShow, close, show }}>
      {children}
    </ModalContext.Provider>
  );
}

export function Button({ children, id }) {
  const { show } = useContext(ModalContext);
  return <div>{children}</div>;
}

export function Window({ children, id }) {
  const { isShow, close } = useContext(ModalContext);
  return <div>{children}</div>;
}


Button = Modal.Button;
Window = Modal.Window;


export default Modal;