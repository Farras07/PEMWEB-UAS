import Head from 'next/head';

export default function Login() {

    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <div className="container">
                <h1 className='h1-login'>LOGIN</h1>
                <form className="form">
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
