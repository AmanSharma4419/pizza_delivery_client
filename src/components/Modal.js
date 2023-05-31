import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const contentStyle = {
  maxWidth: "600px",
  width: "90%",
};
const Modal = ({ title, isOpen, onClick, img, desc, onClose }) => {
  return (
    <Popup
      trigger={
        <button className="font-semibold hover:underline mt-1"> Know More... </button>
      }
      modal
      contentStyle={contentStyle}
    >
      <div className="modal flex flex-col justify-center items-center">
        <div className="header"> {title}</div>
        <img className="w-52 h-52 rounded-full" src={img} alt="pizza." />
        <div className="content">{desc}</div>
      </div>
    </Popup>
  );
};

export default Modal;
