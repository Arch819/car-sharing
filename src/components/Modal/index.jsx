import { useEffect } from "react";
import { createPortal } from "react-dom";
import { BackdropModalStyle } from "./Modal.styled";

function Modal({ children, closeModal }) {
  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", closeESC);

    return () => {
      document.removeEventListener("keydown", closeESC);
      document.body.style.overflow = "auto";
      document.body.style.width = "100%";
    };
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.width = "calc(100% - 10px)";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.width = "100%";
    };
  }, []);

  const handleClickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const modal = (
    <BackdropModalStyle onClick={handleClickBackdrop}>
      {children}
    </BackdropModalStyle>
  );

  return createPortal(modal, document.getElementById("modal"));
}

export default Modal;
