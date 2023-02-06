import './App.css';
import Header from './layout/header';
import Nav from './layout/nav';
import Main from './layout/main';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainlayout'><Nav/>
      <Main />
      </div>
    </div>
  );
}

export default App;
