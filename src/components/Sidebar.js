import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from '../style';



export default function Sidebar() {
    const [leftMenu, setLeftMenu] = useState(false);

  return (
    <S.Nav>
            <S.LogoImage src="img/logo.png" alt="logo"/>       
            <S.BurgerLineIcon onClick={() => {setLeftMenu(!leftMenu)}}/>

        <S.NavBurger>
            {leftMenu && (
              <S.MenuList>
                <Link to='/'>
                  <S.MenuItem><S.MenuLink href="http://">Главное</S.MenuLink></S.MenuItem>
                </Link>
                <Link to='/mytracks'>
                  <S.MenuItem><S.MenuLink href="http://">Мой плейлист</S.MenuLink></S.MenuItem>
                </Link> 
                <Link to='/welcome'>
                  <S.MenuItem><S.MenuLink href="http://">Войти</S.MenuLink></S.MenuItem>
                </Link>

          </S.MenuList>
            )}
        </S.NavBurger>     
    </S.Nav>
  )


}

