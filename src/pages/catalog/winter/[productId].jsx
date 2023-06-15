import { React, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../layout/layoutDetail';
import styles from '../../../styles/productDetail.module.css';
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetail({ product }) {
  const [choseSize, setChoseSize] = useState(null);
  const refs = useRef([]);
  const refQuantity = useRef(null);
  const handleFailSendOrder=()=>{
    toast.warning('Anda Belum Mengisi Size atau Quantity',{
      position:toast.POSITION.TOP_CENTER,
      theme:'dark',
      autoClose:1500,
    })
  }
  const addHandler=(name,price,size,quantity)=>{
    if(size !== null || quantity !== ''){
      if(window.localStorage.getItem('order') === null){
        window.localStorage.setItem('order',JSON.stringify([]))
        console.log('hei')
      }
      const dataLocal = JSON.parse(window.localStorage.getItem('order'))
      const orderData = {
        name,
        price,
        size,
        quantity
      }
      dataLocal.push(orderData)
      window.localStorage.setItem('order',JSON.stringify(dataLocal))
    }
    else{
      handleFailSendOrder()
    }
  }
  useEffect(() => {
    product.sizeAvailable.map((size, index) => {
      if (size === choseSize) {
        refs.current[index].style.background = 'rgb(182, 182, 182)';
        
      } else {
        refs.current[index].style.background = 'none';
      }
    });
  }, [choseSize, product.sizeAvailable]);

  return (
    <Layout>
      <ToastContainer />
      <div className={`${styles.contentDetail} d-flex `} key={product._id}>
        <div className={`${styles.leftPanel} d-flex flex-column align-items-center`}>
          <Image src={product.image} alt='item' width={500} height={800} />
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
                {product.sizeAvailable.map((size, index) => {
                  return (
                    <button
                      ref={(el) => (refs.current[index] = el)}
                      className={`${styles.sizeButton} d-flex justify-content-center align-items-center`}
                      key={size}
                      value={size}
                      onClick={() => {
                        setChoseSize(size);
                      }}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.orderQuantity} d-flex flex-column`}>
              <label htmlFor='quantity'>Quantity :</label>
              <input ref = {refQuantity} type='number' id='quantity' name='quantity' maxLength='3' max='999' min='0' placeholder='0' />
            </div>
            <div className={`${styles.orderButton} d-flex justify-content-center align-items-center`} onClick={()=>{
              const quantity = refQuantity.current.value
              addHandler(product.productName,product.price,choseSize,quantity)
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