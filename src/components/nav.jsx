import React from 'react'
import { useState, useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav(props) {

  const [ham, setHam] = useState(false)
 
  return (

    <nav className={`${styles.navBarDashboard} d-flex`}>

      <div className={`${styles.logoContainer} `}>
        <div className={`${styles.divNavText}`}>
        <article className={`${styles.logo}`}>
                <Image src='/icons/logo.svg' alt= 'logo' width={110} height={110}/>
            </article>
        </div>

      </div>

      {(props.page === 'dashboard' ? <NavDashboard /> : <NavListMenu props={props} ham={ham} setHam={setHam} />)}

    </nav>

  )
}

function NavListMenu({ props, ham, setHam }) {

  return (

    <>

      <ul className={`${styles.ulNav} ${props.page === 'home' ? '' : styles.ulNavWhite} d-flex ${ham ? styles.show : ''}`}>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li className={`${props.page === 'home' ? '' : styles.ulHide}`}><Link href="#about" className={styles.link}>About</Link></li>
        <li><Link href="#contact" className={styles.link}>Contact</Link></li>
        <li className={`${props.page === 'home' ? '' : styles.ulHide}`}><Link href="/login" className={styles.link}>Login</Link></li>
      </ul>

      <div onClick={() => setHam(!ham)} className={`${styles.hamNav} d-flex flex-column`}>
        <span className={`${styles.an11} ${props.page === 'home' ? styles.bgWhite : styles.bgBlack} ${ham ? styles.an1 : ''} `}></span>
        <span className={`${styles.an22} ${props.page === 'home' ? styles.bgWhite : styles.bgBlack} ${ham ? styles.an2 : ''}`}></span>
        <span className={`${styles.an33} ${props.page === 'home' ? styles.bgWhite : styles.bgBlack} ${ham ? styles.an3 : ''}`}></span>
      </div>

    </>

  )
}

function NavDashboard() {

  const refCon = useRef(null)
  const refButton = useRef(null)
  const [isClicked, setIsClicked] = useState(true)
  const router = useRouter()

  async function logOutHandler(e) {

    e.preventDefault()
    // cookie.remove('token')
    router.push('/login')

  }

  const showLogoutButton = (a) => {

    console.log(a)
    setIsClicked(!a)
    console.log(a)

    if (!a) {
      refButton.current.style.display = 'none'
      refCon.current.style.backgroundColor = 'transparent'
      refCon.current.style.boxShadow = 'none'
      
    } else {
      refButton.current.style.display = 'flex'
      refCon.current.style.backgroundColor = 'rgb(255, 255, 255)'
      refCon.current.style.boxShadow = ''

    }

  }

  return (

    <div className={`${styles.profileSection} d-flex flex-column justify-content-between`}>

      <div ref={refCon} className={`${styles.profileContainer} d-flex flex-column`} onClick={() => showLogoutButton(isClicked)}>

        <div className={`${styles.profileSec} d-flex align-items-center justify-content-center`}>
          <div className={`${styles.profileImage} me-3`}>
            <Image className={styles.profileLogo} alt='logo' src='/profile.svg' width={30} height={30} />
          </div>
          <p>Administrator</p>
        </div>

        <div ref={refButton} className={`${styles.logoutContainer} text-light`}>
          <Link className={styles.logoutText} onClick={logOutHandler} href='/login'>Logout</Link>
        </div>

      </div>

    </div>

  )
}
