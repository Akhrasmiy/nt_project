
import Regester from "./components/regester";
import { Routes, Route } from "react-router-dom";
import MainPage from "./mainpage";
import Addelem from "./components/AddElem";
function App() {
  // console.log(inputref.current.value)
  return (
    <div className='App'>


      {/* routers  */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addelem/:type" element={<Addelem />} />
        <Route path="/regester" element={<Regester />} />
      </Routes>
    </div>
  );
}

export default App;
