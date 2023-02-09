import "./App.css";
import Header from "./layout/header";
import Nav from "./layout/nav";
import Main from "./layout/main";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
function MainPage() {
  const { t }=useTranslation()
  return (
    <div className="MainPage">
       <p>{t("SayHello")}</p>
      <Header />
      <div className="mainlayout">
        <Nav />
        <Main />
      </div>
      <div className="hbp"></div>
    </div>
  );
}

export default MainPage;
