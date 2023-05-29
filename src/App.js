// eslint-disable-next-line import/no-extraneous-dependencies
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Header from './components/Header'
// import Login from './components/Login';
import Bar from './components/Bar';


function App() {

  return (  
    <div className="wrapper">
      <div className="container">
          <main className="main">
            <Sidebar/>
            <div className="main__centerblock ">
              <Search/>
              <Header/>
            </div>
              {/* <Login/> */}
          </main>
        </div>
      <Bar/>
    </div>
  );
}
 
export default App;