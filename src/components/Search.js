import Login from "./Login";
import * as S from '../style';


export default function Search() {
  return (
    <S.SearchHeaderNav>
      <S.SearchNavSearch>
            <S.SearchNavIcon/>
            <S.SearchInputText type="search" placeholder="Поиск" name="search"/>
      </S.SearchNavSearch>
      <Login/>
    </S.SearchHeaderNav>
  )
}
