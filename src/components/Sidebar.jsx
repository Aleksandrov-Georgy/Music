import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import {ColorTheme} from "./Context";
import  * as S from '../style';



export default function Sidebar() {

  const [leftMenu, setLeftMenu] = React.useState(false);
  const [themeImg, setThemeImg] = React.useState(false);
  const {theme, setTheme} = React.useContext(ColorTheme);

  const replaceTheTheme = () => {
    setThemeImg(!themeImg);
    setTheme(!theme);     
  }
    

  return (
    
      <S.Nav >
            <Link to='/'>
              <S.LogoImage src="img/logo.png" alt="logo"/>
            </Link>
              <S.BurgerLineIcon onClick={() => {setLeftMenu(!leftMenu)}}/>

          <S.NavBurger >
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
                      <S.Theme onClick={replaceTheTheme}> 
                            {!themeImg ? (
                                <img style={{'background': 'rgb(28, 28, 28)'}} src="img\icon\BlackTheme.svg"  alt="theme"/>
                                ) : (
                                <img src="img\icon\WhiteTheme.svg"  alt="theme"/>
                              )}
                      </S.Theme>
                
            </S.MenuList>
              )}
          </S.NavBurger>     
      </S.Nav>
      
  )

}

