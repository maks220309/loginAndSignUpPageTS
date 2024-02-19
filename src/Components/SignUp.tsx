import { NavLink } from 'react-router-dom';
import styles from './styles/SignUp.module.css';
import { useState, useRef, ChangeEvent, FormEvent } from 'react';

export default function SignUp() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    interface RegisterObject {
        email: string;
        password: string;
        name: string;
    }

    const [email, setEmail] = useState<string>('');
    const handleChangeInputEmail = (event: ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value);
    };

    const [pass, setPass] = useState<string>('');
    const handleChangeInputPas = (event: ChangeEvent<HTMLInputElement>):void => {
        setPass(event.target.value);
    };

    const [name, setName] = useState<string>('');
    const handleChangeInputName = (event: ChangeEvent<HTMLInputElement>):void => {
        setName(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!.,])(?=.*[a-zA-Z]).{8,}$/;
        const nameRegex = /^[a-zA-Z0-9]{4,16}$/;
        if (emailRegex.test(email) && passwordRegex.test(pass) && nameRegex.test(name)) {
            let objectLogin: RegisterObject = {
                email: email,
                password: pass,
                name: name
            };
            console.log(objectLogin);
            alert('Register Success, check console');
        } else {
            if (nameRef.current && !nameRegex.test(name)) {
                nameRef.current.focus();
            }
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
            <span>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='email' onChange={handleChangeInputEmail} placeholder='Enter your email' ref={emailRef} />
                <input type='password' onChange={handleChangeInputPas} placeholder='Enter your password' ref={passwordRef} />
                <input type='text' onChange={handleChangeInputName} placeholder='Enter your name' ref={nameRef} />
                <button type='submit' className={styles.login}>Register</button>
                <NavLink to='/login' className={styles.button}>Login</NavLink>
            </form>
        </div>
    );
}
