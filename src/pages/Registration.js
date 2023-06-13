/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from '../style';


function Registration() {  
    const textLogin = React.createRef();
    const textPass = React.createRef();
    const textPassDouble = React.createRef();
    

    function SignIn() { 
        const login = textLogin.current.value;
        const pass = textPass.current.value;
        const doublePass = textPassDouble.current.value;

        // Временное решение, поке нет бэкэнда
        if(pass === doublePass) {
            alert('регистрация прошла успешно');
            localStorage.setItem('login', login);
            localStorage.setItem('pass', pass);
            
        } else {
            alert('Пароли не совпадают!')
        }
    }

    // eslint-disable-next-line prefer-const
    const [button, setButton] = useState('');
  

    return (
        <S.Registration>
            <S.RegistrationContent>
                <S.RegistrationLogo src="./img/Group 18542.png" alt="logo"/>
                
                <S.RegistrationInput ref={textLogin} placeholder="Логин"/>
                    <S.RegistrationInput ref={textPass} type="password" placeholder="Пароль"/>
                    <S.RegistrationInput ref={textPassDouble}  type="password" placeholder="Повторите пароль"/>

                    <button onClick={() => {setButton(!button)}}>{button ? 'зарегистрирован' : 'не зарегистрирован'}</button>
                    {button && 
                        <Link to='/'>
                            <S.RegistrationButtonSign type='button' onClick={() => {SignIn()}} >Зарегистрироваться</S.RegistrationButtonSign>
                        </Link>
                    }
                    
                    

            </S.RegistrationContent>
        </S.Registration>
    )
}
 
export default Registration;







