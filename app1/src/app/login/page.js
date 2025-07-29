'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";


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
            <br />
            <br />
            <button onClick={() => router.push('/login/loginstudent')}>Login Student</button>
            <br />
            <br />
            <button onClick={() => router.push('/login/loginteacher')}>Login Teacher</button>
        </div>
    );
    }
export default Login;