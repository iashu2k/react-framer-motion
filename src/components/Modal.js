import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const backdropVariant = {
  intitial: { opacity: 0 },
  animate: { opacity: 1 },
};

const modal = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  

  return (
    <AnimatePresence>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdropVariant}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div className="modal"
            variants={modal}
          >
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
