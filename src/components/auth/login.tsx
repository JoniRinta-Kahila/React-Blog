import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseServices from '../../firebase/firebaseServices';
import styles from './login.module.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { useLoginPopupStateContext } from './loginPopupContextProvider';

interface LoginProps {
}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = FirebaseServices.getAuthInstance();

  const setPopupState = useLoginPopupStateContext().setState;

  const handleLogin = (event: React.FormEvent<HTMLInputElement>) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setPopupState(false);
      })
      .catch(error => {
        console.log(error.code, error.message);
        return event.preventDefault();
      })
  }
  
  return (
    <div className={styles.container}>

      <div className={styles.loginForm}>
        <div className={styles.flexRow}>
          <label className={styles.label} htmlFor='username'>
            <AiOutlineUser style={{width:'12px', height:'13px'}} color='grey' />
          </label>
          <input
            id='username'
            className={styles.input}
            placeholder='Username'
            type='text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.flexRow}>
          <label className={styles.label} htmlFor='password'>
            <BiKey style={{width:'15px', height:'15px'}} color='grey' />
          </label>
          <input
            id='password'
            className={styles.input}
            placeholder='Password'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <input
          className={styles.submit}
          type='submit'
          value='LOGIN'
          onClick={(event) => handleLogin(event)}
        />
      </div>
      
    </div>
  )
}

export default Login;