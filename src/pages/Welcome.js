// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as S from '../style';



function Welcome() {  
    const userLogin = React.createRef();
    const userPass = React.createRef();

    return (
        <S.Registration>
            <S.RegistrationContent>
                <S.RegistrationLogo src="./img/Group 18542.png" alt="logo"/>

                <S.RegistrationInput ref={userLogin} type="text" placeholder="Логин"/>
                <S.RegistrationInput ref={userPass} type="password" placeholder="Пароль"/>

                <Link to="/">
                    <S.RegistrationButtonEntry onClick={() => {alert('Фейковый вход')}}>Войти</S.RegistrationButtonEntry>
                </Link>
                


                <Link to='/registration'><S.RegistrationButton>Зарегистрироваться</S.RegistrationButton></Link>              
            </S.RegistrationContent>
        </S.Registration>
    )

   
}
 
export default Welcome;







