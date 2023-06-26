import * as S from '../style';
import Search from '../components/Search';
// eslint-disable-next-line import/no-cycle
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// eslint-disable-next-line import/prefer-default-export
export function Main() {  
   

    return(
        
            <S.Main >
                <Sidebar />
                <S.MainCenterblock>
                    <Search />9
                    <Header />
                </S.MainCenterblock>
            {/* <Login/> */}
            </S.Main>

    )
}