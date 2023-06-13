// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyle } from 'styled-components';

import * as S from './style';
import './style.css';
// import Search from './components/Search';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header'
// import Bar from './components/Bar';
import { AppRoutes } from './routes';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
    
  }
  
  ul li {
    list-style: none;
  }
   
  html,
  body {
    width: 100%;
    height: 100vh;
    font-family: 'StratosSkyeng', sans-serif;
    background-color: #383838;
  }
`

function App() {

  return (
    <>
      <GlobalStyle/>  
        <S.Wrapper>
          <S.Container>
            <AppRoutes/>
              {/* <S.Main>
                <Sidebar/>
                {/* <S.MainCenterblock>
                  <Search/>
                  <Header/>
                </S.MainCenterblock> */}
                  {/* <Login/> */}
              {/* </S.Main>  */}
            </S.Container>
      </S.Wrapper>
    </>
  );
}
 
export default App;