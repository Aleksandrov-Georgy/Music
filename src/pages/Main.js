import * as S from '../style';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'


// eslint-disable-next-line import/prefer-default-export
export function Main() {
    return(
        <S.Main>
            <Sidebar/>
            <S.MainCenterblock>
            <Search/>
            <Header/>
            </S.MainCenterblock>
            {/* <Login/> */}
        </S.Main>
    )
}

