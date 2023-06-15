import Head from 'next/head';
import styles from '../../styles/login.module.css'
export default function Login() {

    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <div className={`${styles.container}`}>
                <h1 className={`${styles.h1Login}`}>LOGIN</h1>
                <form className={`${styles.form}`}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email" 
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
