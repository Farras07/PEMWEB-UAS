/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Myform from '../../components/form.jsx';
import NavForm from '../../components/navForm.jsx';
import Head from 'next/head';
import styles from '../../styles/form.module.css';
import Layout from '@/layout/layout.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router.js';

export default function index() {
  const [status, setStatus] = useState('');

  const router = useRouter();

  const addAspirationHandler = async (data) => {
    const payload = {
      nama: data.nama,
      nip: data.nim,
      prodi: "B2584B32-CD06-4A9A-864F-1E2B6FA1B044",
      pt: "56D6D9C6-B16D-4744-ABA4-2BFFA25359C2",
    };

    const id = toast.loading('Loading', {
      position: toast.POSITION.TOP_CENTER,
    });

    const checkIsValidMhs = await fetch("/api/mhs", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!checkIsValidMhs.ok) {
      toast.update(id, {
        render: 'Mahasiswa tidak ditemukan ' + checkIsValidMhs.status,
        type: 'error',
        isLoading: false,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    }

    if (checkIsValidMhs.ok) {
      const response = await fetch("/api/aspiration", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.update(id, {
          render: 'error ' + response.status,
          type: 'error',
          isLoading: false,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        return;
      }

      const responseData = await response.json();
      setStatus('Aspirasi berhasil terkirim!');
      toast.update(id, {
        render: 'Aspirasi berhasil terkirim!',
        type: 'success',
        isLoading: false,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log(responseData);
      router.push('/form');
    }
  };

  return (
    <>       
        <h2>Customer Info</h2>
        <div className={`${styles.pp} input-group`}>
          <span className="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" className="form-control"/>
          <input type="text" aria-label="Last name" className="form-control"/>
        </div>
        <div className={`${styles.pp} input-group`}>
          <input type="text" aria-label="email" className="form-control"/>
          <span className="input-group-text">@gmail.com</span>
        </div>
        <div className={`${styles.pp} input-group`}>
          <span className="input-group-text">Address</span>
          <input type="text" aria-label="address" className="form-control"/>
        </div>
        <div className={`${styles.pp} input-group`}>
          <span className="input-group-text">Additional Information</span>
          <input type="text" aria-label="addinfo" className="form-control"/>
        </div>
        <div className={`${styles.pp} input-group`}>
          <span className="input-group-text">Zip/Postal</span>
          <input type="text" aria-label="postal" className="form-control"/>
        </div>

        <h2>Sizing Chart</h2>
        <div className={`${styles.sz} size`}>
          <div className="height">
            <label for="size" className="size">Height (cm)</label><br></br>
            <input type="text" className="size" id="height"/>
          </div>
          {/* <label for="size" className="size">Height (cm)</label><br></br>
          <input type="text" className="size" id="height"/><br></br> */}
          <div className="neck">
            <label for="size" className="size">Neck Size (cm)</label><br></br>
            <input type="text" className="size" id="neck"/><br></br>
          </div>
          <div className="chest">
            <label for="size" className="size">Chest (cm)</label><br></br>
            <input type="text" className="size" id="chest"/><br></br>
          </div>
          <div className="waist">
            <label for="size" className="size">Waist (cm)</label><br></br>
            <input type="text" className="size" id="waist"/>
          </div>
          <div className="arm">
            <label for="size" className="size">Arm Length (cm)</label><br></br>
            <input type="text" className="size" id="arm"/>
          </div>
        </div>

        <h2>Payment Info</h2>
        <div className={`${styles.pay} radiobutton`}>
          <div className="cod">
            <input type="radio" id="cod" name="options" value="cod" />
            <label>Cash On Delivery</label>
          </div>
          <div className="bank">
            <input type="radio" id="bank" name="options" value="bank" />
            <label>Bank Transfer</label>
          </div>
          <div className="credit">
            <input type="radio" id="credit" name="options" value="credit" />
            <label>Credit Card</label>
          </div>
        </div>
        <br></br>
        <div className={`${styles.pp} input-group`}>
          <span className="container-fluid input-group-text" >Credit Card Number</span>
          <input type="text" aria-label="postal" className="form-control"/>
        </div>
      
        <div className='button'>
          <button type="button" className="btn btn-success">Add to Cart</button>
        </div>
    </>
  );
}
