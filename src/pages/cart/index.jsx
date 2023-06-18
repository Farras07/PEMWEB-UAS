import {React,useEffect,useState,useRef} from 'react'
import Layout from '@/layout/layout'
import styles from '../../styles/cart.module.css'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function Index({credit}) {
  const [itemsCart, setItemsCart] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [changeCart,setChangeCart] = useState(0)
  const refFirstName = useRef(null)
  const refLastName = useRef(null)
  const refEmail = useRef(null)
  const refAddress = useRef(null)
  const refZipCode = useRef(null)
  const refDate = useRef(null)
  const refCredit = useRef(null)
  const refQuantity = useRef([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(window.localStorage.getItem('order'));
      setItemsCart(cart);      
    }
  }, []);
  useEffect(() => {
    if (itemsCart) {
      let total = 0;
      itemsCart.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalCost(total);
    }
  }, [itemsCart]);

  const addOrderSuccess = ()=>{
    toast.success('Berhasil Menambahkan Pesanan',{
      position:toast.POSITION.TOP_CENTER,
      theme:'dark',
      autoClose:1500,
    })
  }
  const handleFailSendOrder=(failOrderCode)=>{
    if(failOrderCode === 1){
      toast.warning('Isi Info Customer Dengan Benar !',{
        position:toast.POSITION.TOP_CENTER,
        theme:'dark',
        autoClose:1500,
      })
    }
    else if(failOrderCode === 2){
      toast.warning('Saldo Credit Anda Kurang!',{
        position:toast.POSITION.TOP_CENTER,
        theme:'dark',
        autoClose:1500,
      })
    }
  }

  const quantityHandler=(index,event)=>{
    const updatedItems = itemsCart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: event.target.value };
      }
      return item;
    });
    window.localStorage.setItem('order',JSON.stringify(updatedItems))
    setItemsCart(updatedItems);
    if(refQuantity.current[index].value === '0'){
      const filteredItems = itemsCart.filter((_, i) => i !== index);
      refQuantity.current.splice(index, 1);
      setItemsCart(filteredItems)
      setChangeCart(changeCart+1)
      window.localStorage.setItem('order',JSON.stringify(filteredItems))
    }
  }
  const saveOrder = async(items)=>{
    await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const makeOrder = () => {
    console.log(refDate.current.value)
    if (refCredit.current.value === credit[0].creditID && 
      refFirstName.current.value !== "" && refEmail.current.value !== "" && refAddress.current.value !== "" && refZipCode.current.value !== "" && refDate.current.value !== "") {
      if (totalCost <= credit[0].saldo) {
        const nameCustomer = refFirstName.current.value+refLastName.current.value
        const email = `${refEmail.current.value}@gmail.com`
        const address = refAddress.current.value
        const zipCode = refZipCode.current.value
        const dateRequest = refDate.current.value
        const dateOrder = Date.now()
        const updatedItems = itemsCart.map((item) => ({
          ...item,
          status: 'Working On'
        }));
        const orderData = {
          nameCustomer,
          email,
          address,
          zipCode,
          processStatus: 'Waiting Confirmation',
          dateOrder,
          dateRequest,
          items: updatedItems
        }
        saveOrder(orderData)
        addOrderSuccess()
      } else {
        handleFailSendOrder(2)
      }
    } else {
      handleFailSendOrder(1)
    }
  };
  
  return (
    <Layout lengthChange={changeCart}>
      <ToastContainer />
      <section className={`${styles.container}`}>
        <section className={`${styles.leftPanel}`}>
          <h3>Customer Info</h3>
          <div className={`${styles.name} input-group mb-3`}>
            <span className={`input-group-text`}>First and last name</span>
            <input ref={refFirstName} type="text" aria-label="First name" placeholder="First Name" className={`${styles.input} form-control`}/>
            <input ref={refLastName} type="text" aria-label="Last name" placeholder="Last Name" className={`${styles.input} form-control`}/>
          </div>
          <div className={`${styles.email} input-group mb-3`}>
            <input ref={refEmail} type="text" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2"/>
            <span className="input-group-text" id="basic-addon2">@gmail.com</span>
          </div>
          <div className={`${styles.address} input-group mb-3`}>
            <span className="input-group-text" id="basic-addon2">Address</span>
            <input ref={refAddress} type="text" className="form-control" placeholder="Your Address" aria-label="Your Address" aria-describedby="basic-addon2"/>
          </div>
          <div className={`${styles.Zip} input-group mb-3`}>
            <span className="input-group-text" id="basic-addon2">Zip/Postal Code</span>
            <input ref={refZipCode} type="text" className="form-control" placeholder="Your Zip/Postal Code" aria-label="Your Zip/Postal Code" aria-describedby="basic-addon2"/>
          </div>
          <div className={`${styles.credit} input-group mb-3`}>
            <span className="input-group-text" id="basic-addon2">Credit Card ID</span>
            <input ref={refCredit} type="text" className="form-control" placeholder="Your Credit Card ID" aria-label="Your Credit Card ID" aria-describedby="basic-addon2"/>
          </div>
          <div className={`${styles.date} input-group mb-5`}>
            <span className="input-group-text" id="basic-addon2">Date Request</span>
            <input ref={refDate} type="date" className="form-control" aria-describedby="basic-addon2"/>
          </div>
          <div className={`${styles.total} mb-4`}>
            <h4>Total : {totalCost}</h4>
          </div>
          <div className={`${styles.checkoutButton} d-flex align-items-center justify-content-center mb-3`} onClick={makeOrder}>Checkout</div>
        </section>
        <section className={`${styles.rightPanel}`}>
          <h3>Your Cart</h3>
          {itemsCart === null ? (<h3>Keranjang Kosong</h3>):(
            <div className={`${styles.cartItems}`}>
              {itemsCart.map((item,index)=>{
                return(
                  <article className={`${styles.product} mb-3`} key={item.productId}>
                    <section className={`${styles.top} mb-3 d-flex`}>
                      <article className={`${styles.image}`}>
                        <figure>
                          <Image src={item.image} width={70} height={100} alt={item.productName}/>
                        </figure>
                        <figcaption>{item.productName}</figcaption>
                      </article>
                      <article className={`${styles.size}`}>
                        <div className={`${styles.height} ${styles.sizeItem}`}>
                          <p><strong>Height (cm):</strong> {item.size.height}</p>
                        </div>
                        <div className={`${styles.neck} ${styles.sizeItem}`}>
                          <p><strong>Neck (cm):</strong> {item.size.neck}</p>
                        </div>
                        <div className={`${styles.chest} ${styles.sizeItem}`}>
                          <p><strong>Chest (cm):</strong> {item.size.chest}</p>
                        </div>
                        <div className={`${styles.waist} ${styles.sizeItem}`}>
                          <p><strong>Waist (cm):</strong> {item.size.waist}</p>
                        </div>
                        <div className={`${styles.height} ${styles.sizeItem}`}>
                          <p><strong>Arm (cm):</strong> {item.size.arm}</p>
                        </div>
                      </article>
                      <article className={`${styles.price}`}>
                        <h5>Price : </h5>
                        <h6>{item.price}</h6>
                      </article>
                    </section>
                    <section className={`${styles.bottom}`}>
                      <h5><strong>Quantity</strong></h5>
                      <input ref = {ref=>refQuantity.current[index]=ref} type='number' className ={`${styles.inputQuantity}`} maxLength='3' max='999' min='0' value={item.quantity} onChange={()=>quantityHandler(index,event)} />
                    </section>
                  </article>
                )
              })}
            </div>
          )}
        </section>
      </section>
    </Layout>
  )
}
export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/credit');
    const data = await res.json(); // Parse the response as JSON

    return {
      props: {
        credit: data, // Use the parsed data
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};