import React from 'react';
import { createGlobalStyle } from 'styled-components';
import * as S from './style';
// eslint-disable-next-line import/no-cycle
import { AppRoutes } from './routes';
import { ColorTheme } from './components/Context';
import './style.css';

const color = {
  leight: {
    color: 'black',
    background: 'white',
  },
  dark: {
    color: 'white',
    background: 'black',
  },
}


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    color: ${color.dark.color};
    background: ${color.dark.background};
  }

  a {
    color: inherit;
    background: inherit;
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
  const [theme, setTheme] = React.useState(false);

    return (    
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <ColorTheme.Provider value={{theme, setTheme}}>
    <GlobalStyle/>
      <S.Wrapper>
        <S.Container>
          <AppRoutes />
      </S.Container>
    </S.Wrapper>
  </ColorTheme.Provider>

  );
}
 
export default App;