import { React, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../layout/layout';
import styles from '../../../styles/productDetail.module.css';
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail({ product }) {
  const [choseSize, setChoseSize] = useState(false);
  const [addItems,setAddItems] = useState(0)
  const refs = useRef([]);
  const refQuantity = useRef(null);
  const addOrderSuccess = ()=>{
    toast.success('Berhasil Menambahkan Item Ke Cart',{
      position:toast.POSITION.TOP_CENTER,
      theme:'dark',
      autoClose:1500,
    })
  }
  const handleFailSendOrder=()=>{
    toast.warning('Anda Belum Mengisi Size atau Quantity',{
      position:toast.POSITION.TOP_CENTER,
      theme:'dark',
      autoClose:1500,
    })
  }
  const addHandler=(productId,productName,price,refs,quantity,image)=>{
    if(refs[0].value !== "" && refs[1].value !== "" && refs[2].value !== "" && refs[3].value !== "" && refs[4].value !== "" && quantity !== ""){
      if(window.localStorage.getItem('order') === null){
        window.localStorage.setItem('order',JSON.stringify([]))
        console.log('hei')
      }
      const dataLocal = JSON.parse(window.localStorage.getItem('order'))
      const orderData = {
        productId,
        productName,
        price,
        quantity,
        image,
        size:{
          height: refs[0].value,
          neck: refs[1].value,
          chest: refs[2].value,
          waist: refs[3].value,
          arm: refs[4].value
        }
      }
      dataLocal.push(orderData)
      window.localStorage.setItem('order',JSON.stringify(dataLocal))
      setAddItems(addItems+1)
      addOrderSuccess()
    }
    else{
      handleFailSendOrder()
    }
  }
  return (
    <Layout lengthChange={addItems}>
      <ToastContainer />
      <div className={`${styles.contentDetail} d-flex `} key={product._id}>
        <div className={`${styles.leftPanel} d-flex flex-column align-items-center`}>
          <Image src={product.image} alt='item' width={400} height={560} className={`${styles.prdimg}`} />
        </div>
        <div className={`${styles.rightPanel}`}>
          <div className={`${styles.productDesc} d-flex flex-column justify-content-between `}>
            <div className='productCol'>
              <h3 className={`${styles.productName}`}>{product.productName}</h3>
              <h5 className={`${styles.col}`}>{product.category}</h5>
            </div>
            <div className={`${styles.priceCon}`}>
              <h5 className={`${styles.price}`}>Rp. {product.price}</h5>
            </div>
            <div className='size'>
              <p>Size : </p>
              <div className={`${styles.sizeCon} d-flex justify-content-between`}>
                <div className={`${styles.Size}`}>
                  <label htmlFor="height">Height (cm)</label>
                  <input ref={ref =>refs.current[0]=ref} type="number" id='height' name='height' required/>
                </div>
                <div className={`${styles.Size}`}>
                  <label htmlFor="neck">Neck Size (cm)</label>
                  <input ref={ref =>refs.current[1]=ref} type="number" id='neck' name='neck' required/>
                </div>
                <div className={`${styles.Size}`}>
                  <label htmlFor="chest">Chest Size (cm)</label>
                  <input ref={ref =>refs.current[2]=ref} type="number" id='chest' name='chest' required/>
                </div>
                <div className={`${styles.Size}`}>
                  <label htmlFor="waist">Waist Size (cm)</label>
                  <input ref={ref =>refs.current[3]=ref} type="number" id='waist' name='waist' required/>
                </div>
                <div className={`${styles.Size}`}>
                  <label htmlFor="arm">Arm Length (cm)</label>
                  <input ref={ref =>refs.current[4]=ref} type="number" id='arm' name='arm' required/>
                </div>
              </div>
            </div>
            <div className={`${styles.orderQuantity} d-flex flex-column`}>
              <label htmlFor='quantity'>Quantity :</label>
              <input ref = {refQuantity} type='number' id='quantity' name='quantity' maxLength='3' max='999' min='0' placeholder='0' />
            </div>
            <div className={`${styles.orderButton} d-flex justify-content-center align-items-center`} onClick={()=>{
              const quantity = refQuantity.current.value
              addHandler(product._id,product.productName,product.price,refs.current,quantity,product.image)
            }}>
              Add To Cart</div>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const id = ctx.params.productId;

  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: 'GET',
    });
    const data = await res.json();

    return {
      props: {
        product: data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}