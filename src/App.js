import { createGlobalStyle } from 'styled-components';
import * as S from './style';
import './style.css';
import { AppRoutes } from './routes';



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }

  a {
    color: inherit;
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
  }
`;



function App() {

    return (    
        
<>
<GlobalStyle />
  <S.Wrapper>
  <S.Container>
  <AppRoutes />
</S.Container>
</S.Wrapper></>
     
  );
}
 
export default App;