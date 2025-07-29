'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = ()=>{
    const router = useRouter();
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page of our application.</p>
            {/* Add more information about your application here */}
            <Link href="/login" className="link"> Login Page </Link>
            <Link href="/" className="link"> Home Page </Link>
            <h2>Navigate throw the Navigater</h2>
            <button onClick={ ()=> router.push('/login')}>Login </button>
            <button onClick={ ()=> router.push('/')}>Home </button>

        </div>
    );
}
export default About;
