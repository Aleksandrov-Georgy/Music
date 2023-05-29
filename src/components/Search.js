
import { CiSearch } from "react-icons/ci";
import Login from "./Login";


export default function Search() {
  return (
    <div className="header__nav">
      <div className="nav__search">
            <CiSearch style={{width: "14px", height: "14px", color: "white", marginRight: '10px'}}/>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
      </div>
      <Login/>
    </div>
  )
}
