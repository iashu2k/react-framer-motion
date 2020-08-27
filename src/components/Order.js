import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      mass: 0.4,
      damping: 8,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.4
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal}) => {

  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    }, 5000)
  }, [setShowModal])



  return (
    <motion.div className="container order" variants={containerVariants} initial="initial" animate="animate">
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div variants={childrenVariants} key={topping}>{topping}</motion.div>)}
    </motion.div>
  )
}

export default Order;