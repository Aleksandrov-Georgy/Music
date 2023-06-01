import { useState } from "react";
import * as S from '../style';



export default function Sidebar() {
    // eslint-disable-next-line prefer-const
    let [leftMenu, setLeftMenu] = useState(false);

  return (
    <S.Nav>
            <S.LogoImage src="img/logo.png" alt="logo"/>       
            <S.BurgerLineIcon onClick={() => {setLeftMenu(leftMenu = !leftMenu)}}/>

        <S.NavBurger>
            {leftMenu && (
                    <S.MenuList>
                        <S.MenuItem><S.MenuLink href="http://">Главное</S.MenuLink></S.MenuItem>
                        <S.MenuItem><S.MenuLink href="http://">Мой плейлист</S.MenuLink></S.MenuItem>
                        <S.MenuItem><S.MenuLink href="http://">Войти</S.MenuLink></S.MenuItem>
                    </S.MenuList>
            )}
        </S.NavBurger>     
    </S.Nav>
  )


}

