

import { Routes, Route } from "react-router-dom";
import MainPage from "./mainpage";
import Addelem from "./components/AddElem";
import SignIn from "./layout/SignIn";
import SignUp from "./layout/SignUp";

function App() {
  // console.log(inputref.current.value)
  return (
    <div className='App'>


      {/* routers  */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addelem" element={<Addelem />} />
      </Routes>
    </div>
  );
}

export default App;