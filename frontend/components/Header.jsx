import React from 'react'
import styles from '.././styles/Header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <div className={styles.Header_Container}> 
      <h3 className={styles.Header_Container_Welcome}> Welcome to the </h3>
      <h3 className={styles.Header_Container_Google}> Google Store </h3>
      </div>
    </div>
  )
}

export default Header
