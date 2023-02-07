import './App.css';
import Header from './layout/header';
import Nav from './layout/nav';
import Main from './layout/main';
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div className="App">
      <Header />
      <div className='mainlayout'><Nav/>
      <Main />
      
      </div>
      <div className="hbp">
                <Link className="btnVoted" to="/addelem">Add Elem</Link>
            </div>
    </div>
    
  );
}

export default MainPage;

