import { NavLink } from 'react-router-dom';
import styles from './styles/Login.module.css';
import { useState, useRef, ChangeEvent, FormEvent } from 'react';

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    interface LoginObject {
        email: string;
        password: string;
    }

    const [email, setEmail] = useState<string>('');
    const handleChangeInputEmail = (event: ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value);
    };

    const [pass, setPass] = useState<string>('');
    const handleChangeInputPas = (event: ChangeEvent<HTMLInputElement>):void => {
        setPass(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!.,])(?=.*[a-zA-Z]).{8,}$/;
        if (emailRegex.test(email) && passwordRegex.test(pass)) {
            let objectLogin: LoginObject = {
                email: email,
                password: pass
            };
            console.log(objectLogin);
            alert('Login Success, check console');
        } else {
            if (passwordRef.current && !passwordRegex.test(pass)) {
                passwordRef.current.focus();
            }
            if (emailRef.current && !emailRegex.test(email)) {
                emailRef.current.focus();
            }
        }
    };

    return (
        <div className={styles.container}>
            <span>Login</span>
            <form onSubmit={handleSubmit}>
                <input type='email' onChange={handleChangeInputEmail} placeholder='Enter your email' ref={emailRef} />
                <input type='password' onChange={handleChangeInputPas} placeholder='Enter your password' ref={passwordRef} />
                <button type='submit' className={styles.login}>Login</button>
                <NavLink to='/' className={styles.button}>Register</NavLink>
            </form>
        </div>
    );
}
