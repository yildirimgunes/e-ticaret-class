//// kayıtlı olmayan kulllanıcılar için kayıt sayfası
import React, {useState} from 'react'
import styles from './auth.module.scss'
import registerimg from '../../assets/register.png'
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/config"
import Loader from "../../components/loader/Loader"


const Register = () => {
  const [email,setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [cPassword, setCPassword]= useState("")

  const registerUser= (e) => {e.preventDefault();
    console.log(email, password, cPassword)
    if(password !== cPassword) {toast.error("Password do not match.")}
  }

  return (
    <>
    <section className={`container ${styles.auth}`}>
      <Card cardClass={styles.form}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <input type="text" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <input type="password" placeholder="ConfirmPassword" required value={cPassword} onChange={(e)=>setCPassword(e.target.value)}/>
          <buton type="submit" className="--btn --btn-primary --btn-block ">Register</buton>
        </form>
        <span className={styles.register}>
          <p>Already an account?</p>
          <Link to="/login">&nbsp; Login</Link>
        </span>
      </Card>
      <div className={styles.img}>
        <img src={registerimg} alt={"Login"} width="400"/>

      </div>

    </section>
    </>
    
  )
}

export default Register