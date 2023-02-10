
import Regester from "./components/regester";
import { Routes, Route } from "react-router-dom";
import MainPage from "./mainpage";
import Addelem from "./components/AddElem";
import SignIn from "./components/signIn";
function App() {
  // console.log(inputref.current.value)
  return (
    <div className='App'>


      {/* routers  */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addelem/:type" element={<Addelem />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
