import { Translation, useTranslation } from "react-i18next";
import { Button } from "antd";
function Nav() {
    const {t}=useTranslation()
    return (
        <div className="Nav">
            <form action="">
                <select name="type" id="cars">
                    <option value="1">Hudud</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                
                
                <input style={{marginTop: 20}} type="text" name="" id="" placeholder="vaqt(dan)"/>
                <input style={{marginTop: 20}} type="text" name="" id="" placeholder="vaqt(gacha)"/>
                <button style={{backgroundColor: '#a3b7f4', border: 'none', marginTop: 20}}>{t("Filtrlash")}</button>
            </form>
        </div>
    );
}

export default Nav;
