import React from 'react'
import styles from "./NotFoundBlock.module.scss"
import Cart from '../../pages/Cart'
const NotFoundBlock = () => {
  return (
    <div>
       <h1 className={styles.root}>
        <span>😕</span>
        <br />
        Ոչինչ չգտնվեց
       </h1>
       <p className={styles.description}>Empty page</p>
  </div> 
  
  )
}

export default NotFoundBlock
