import React from 'react'
import { useState } from "react"
import ContactImg from "../../../public/cloth.jpeg"
import Image from 'next/image'


export default function Contact(){
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  return(
    <section className='contact' id='connect'>
      <div className='container-sm'>
        <div className="align-item-center row">
          <div classname='col' md={6}>
            
            <Image src='/cloth.jpeg' alt="Contact" width={500} height={500}/>
          </div>
        </div>
      </div>
      </section>
  )
}

function index() {
  return (
    <>
      kjjkjkjkj

    </>
  )
}
