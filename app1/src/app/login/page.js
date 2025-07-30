'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import custom from '../custom.module.css';
import style from '../style.module.css';
import  other from  '../other.module.css';

const Login = () => { 
    const router = useRouter();  
    return (
        <div>
        <h1>Login Page</h1>
        <p>Please enter your credentials to log in.</p>
        {/* Add your login form here */}
        <h2>Navigation throw the Link</h2>
        <Link href="/about" className="link"> About Page </Link>
        <Link href="/" className="link"> Home Page </Link>
        <h2>Navigation throw the Navigater</h2>
        <button onClick={() => router.push('/about')}>About</button>
        <button onClick={() => router.push('/')}>Home</button>

        {/* the below is the custom style from customestyle.css OR style.css based on the import order which is normal css import order */}
        <div>
            <h2 className="main">heading-2</h2>
            <h3 className="main">heading-3</h3>
            <p className="main">This is a paragraph with a custom style.</p>
        </div>

{/* module wise style */}
        <div >
            <h2 className={custom.main}>Heading 2</h2>  
            <h3 className={other.main}>Heading 3</h3>
            <p className={style.main}>This is a paragraph with a custom style.</p> 
        </div>
        </div>
    );
    }
export default Login;