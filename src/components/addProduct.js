import {React,useRef} from 'react'
import styles from '../styles/addProduct.module.css'
import Link from 'next/link'
export default function AddProduct() {
    const refName = useRef(null)
    const refPrice = useRef(null)
    const refCategory = useRef(null)
    const refType = useRef(null)
    const refTime = useRef(null)
    const add =()=>{
        if(refName.current.value !== "" && refPrice.current.value !== "" &&
         refCategory.current.value !== "" && refType.current.value !== "" && refTime.current.value !== ""){
            const productName = refName.current.value
            const price = refPrice.current.value
            const category = refCategory.current.value
            const image = `/products/${refName.current.value}.avif`
            const productType = refType.current.value
            const processingTime = `${refTime.current.value} Days`
            const productData = {
                productName,
                price,
                category,
                image,
                productType,
                processingTime 
            }
            saveProduct(productData)
            console.log('berhasil')
         }
    }
    const saveProduct = async(items)=>{
        await fetch("/api/product", {
          method: "POST",
          body: JSON.stringify(items),
          headers: {
            "Content-Type": "application/json",
          },
        })
      }
  return (
    <section className={`${styles.container}`}>
        <h1 className={`${styles.h1}`}>Add Order</h1>
        <div className={`${styles.conButton}`}>
            <Link href='/dashboard/products' className={`${styles.linkMenu}`}>List Menu</Link>
        </div>
        <section className={`${styles.commentSection} pt-3`}>
            <div className={`${styles.contInput}`}>
                <div className={`${styles.name} input-group mb-3`}>
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
                </div>
            </div>
        </section>
    </section>
  )
}
// {orderData.map((orderData, i) => (orderData.processStatus === 'Waiting Confirmation' ? (
//     <article key={i} className={`${styles.cardComment}`} >
//         <div className={`${styles.contCommentProfile} d-flex justify-content-center`} onClick={()=>clickedLink(orderData._id)}>
//         <div className={`${styles.commentProfile}`}>
//             <h3 className={`${styles.h3} text-white text-center`}>{orderData.nameCustomer}</h3>
//             <p className='text-white'>{orderData.email}</p>
//         </div>
//         </div>
//         <div className={`${styles.commentContainer}`}>
//             <div className="title mb-1">
//                 <h3 className={`${styles.h3} mb-3`}>Customer Info</h3>
//             </div>
//             <div className={`${styles.detail}`}>
//                 <p className={`${styles.pComment}`}>Address : {orderData.address}</p>
//                 <p className={`${styles.pComment}`}>Zip Code : {orderData.zipCode}</p>
//                 <p className={`${styles.pComment}`}>Date Order : {orderData.dateOrder}</p>
//                 <p className={`${styles.pComment}`}>Date Request : {orderData.dateRequest}</p>
//             </div>
//         </div>

//         <div className={`${styles.actionBtn}`}>

//         <span onClick={() => processOrder(orderData._id)} className={`${styles.unpinButton}`}><Image alt='Accept' src='/icons/check.svg' width={25} height={25} /></span>
//         <span onClick={() => refuseOrder(orderData._id)} className={`${styles.deleteButton}`}><Image alt='Refuse' src='/icons/cross.svg' width={25} height={25} /></span>

//         </div>

//     </article>
// ) : null))}