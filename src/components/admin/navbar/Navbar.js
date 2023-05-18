////admin panelindeki sol navbar
import React from 'react'
import styles from "./Navbar.module.scss"
import {FaUserCircle} from "react-icons/fa"
import {useSelector} from "react-redux"
import { selectUserName } from '../../../redux/slice/authSlice'

const Navbar = () => {
  const userName = useSelector(selectUserName)
  return (
    <div className={styles.navbar}>
      <div className={styles.user}>
        <FaUserCircle size={40} color="#fff"/>
        {userName}
      </div>
    </div>
  )
}

export default Navbar