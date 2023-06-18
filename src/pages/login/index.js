import { React, useEffect, useState, useRef } from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head';
import styles from '../../styles/login.module.css'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Login({data}) {
    const admin = data[0]
    const router = useRouter()
    const refUser = useRef(null)
    const refPass = useRef(null)
    const failLogin = (failCode)=>{
        if(failCode === 1){
            toast.warning('Pastikan Mengisi Input Login',{
              position:toast.POSITION.TOP_CENTER,
              theme:'dark',
              autoClose:1500,
            })
        }
        else if(failCode === 2){
            toast.warning('Username/Password Anda Salah',{
                position:toast.POSITION.TOP_CENTER,
                theme:'dark',
                autoClose:1500,
              })
        }
      }
    const login = (e)=>{
        e.preventDefault()
        if(refUser.current.value !== "" && refPass.current.value !== ""){
            if(admin.username === refUser.current.value && admin.password === refPass.current.value){
                router.push('/dashboard')
            }
            else{
                failLogin(2)
            }
        }
        else{
            failLogin(1)
        }
    }
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <div className={`${styles.container}`}>
                <ToastContainer />
                <h1 className={`${styles.h1Login}`}>LOGIN</h1>
                <form className={`${styles.form}`}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="username"
                        id="username"
                        name="username" 
                        ref={refUser}
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        ref={refPass}

                    />

                    <button type="submit" onClick={login} >Login</button>
                </form>
            </div>
        </div>
    );
}
export const getServerSideProps = async (ctx) => {  
    try {
      const res = await fetch(`http://localhost:3000/api/user`, {
        method: 'GET',
      });
      const data = await res.json();
  
      return {
        props: {
          data
        },
      };
    } catch (e) {
      return {
        notFound: true,
      };
    }
  }