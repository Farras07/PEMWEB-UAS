import {React,useRef} from 'react'
import styles from '../styles/editProduct.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function EditProducts({data}) {
    const refPrice = useRef(null)
  return (
    <section className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>Edit Order</h1>
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
                        <input ref={refPrice} type="number" className="form-control" placeholder='0' aria-label="Price" aria-describedby="basic-addon2"/>
                    </div>
                    <div className={`${styles.submit} input-group mb-3`}>
                    <input  type="submit" className="form-control bg-success" aria-describedby="basic-addon2"/>
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