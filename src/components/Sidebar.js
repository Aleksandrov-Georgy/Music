import { HiBars3 } from "react-icons/hi2";
// import { useState } from "react";


export default function Sidebar() {
    // eslint-disable-next-line prefer-const
    // let [leftMenu, setLeftMenu] = useState(false);

  return (


    <nav className="nav">
        
            <img className="logo__image" src="img/logo.png" alt="logo"/>       

            {/* <HiBars3 className="burger__line-icon" onClick={() => {setLeftMenu(leftMenu = !leftMenu)}}/>
        <div className="nav__burger">
            {leftMenu && (
                <div className="main__nav">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="http://" className="menu__link" >Главное</a></li>
                        <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                        <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
                    </ul>
                </div>
            )}
        </div> */}


        <HiBars3 className="burger__line-icon"/>
            
                <div className="main__nav">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                        <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                        <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
                    </ul>
                </div>
            


    </nav>
  )


}

