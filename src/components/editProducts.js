import {React,useRef,useState} from 'react'
import styles from '../styles/editProduct.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function EditProducts({data}) {
    const [productData,setProductData]= useState(data)
    const refPrice = useRef(null)
    console.log(data)
    const updateSuccess = ()=>{
        toast.success('Berhasil Update Harga',{
          position:toast.POSITION.TOP_CENTER,
          theme:'dark',
          autoClose:1500,
        })
      }
    const priceHandler = (event) => {
        const updatedProductData = { ...productData, price: event.target.value };
        setProductData(updatedProductData);
    }
    const updateProduct=async(id)=>{
        
        await fetch(`/api/product/${id}`, {
            method: "PUT",
            headers:{
              "Content-Type" : "application/json",
            },
            body: JSON.stringify({price: productData.price})
          })
          console.log('berhasil')
          updateSuccess()
    }
  return (
    <section className={`${styles.container}`}>
        <ToastContainer />
        <h1 className={`${styles.h1}`}>Edit Product</h1>
        <div className={`${styles.conButton}`}>
            <Link href='/dashboard/products' className={`${styles.linkMenu}`}>List Menu</Link>
        </div>
        <section className={`${styles.commentSection} pt-3 `}>
            <div className={`${styles.image}`}>
                <div className={`${styles.mainDesc} pt-1`}>
                    <Image src={data.image} alt={data.productName} width={250} height={320} className={`${styles.dataimg}`}/>
                    <h4 className={`${styles.proname}`}>{data.productName} </h4>
                    <h4 className={`${styles.procat}`}>{data.category}</h4>
                    <h4 className={`${styles.process}`}>Process Time : {data.processingTime}</h4>
                    <div className={`${styles.price} input-group mb-3`}>
                        <span className="input-group-text" id="basic-addon2">IDR</span>
                        <input ref={refPrice} type="number" className="form-control" value={productData.price} aria-label="Price" aria-describedby="basic-addon2" onChange={()=>priceHandler(event)}/>
                    </div>
                    <div className={`${styles.submit} input-group mb-3`}>
                    <input onClick={()=>updateProduct(data._id)} type="submit" className="form-control" aria-describedby="basic-addon2"/>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

{/* <div className={`${styles.name} input-group mb-3`}>
    <span className={`input-group-text`}>Product name</span>
    <input ref={refName} type="text" aria-label="Product Name" className={`${styles.input} form-control`}/>
</div>
<div className={`${styles.price} input-group mb-3`}>
    <span className="input-group-text" id="basic-addon2">IDR</span>
    <input ref={refPrice} type="number" className="form-control" placeholder='0' aria-label="Price" aria-describedby="basic-addon2"/>
</div>
<div className={`${styles.category} input-group mb-3`}>
    <span className="input-group-text" id="basic-addon2">Category</span>
    <input ref={refCategory} type="text" className="form-control" aria-label="Category" aria-describedby="basic-addon2"/>
</div>
<div className={`${styles.type} input-group mb-3`}>
    <span className="input-group-text" id="basic-addon2">Product Type</span>
    <input ref={refType} type="text" className="form-control" aria-describedby="basic-addon2"/>
</div>
<div className={`${styles.time} input-group mb-3`}>
    <span className="input-group-text" id="basic-addon2">Processing Time</span>
    <input ref={refTime} type="number" className="form-control" aria-describedby="basic-addon2"/>
    <span className="input-group-text" id="basic-addon2">Day(s)</span>
</div>
<div className={`${styles.submit} input-group mb-3`}>
    <input onClick={add} type="submit" className="form-control" aria-describedby="basic-addon2"/>
</div> */}