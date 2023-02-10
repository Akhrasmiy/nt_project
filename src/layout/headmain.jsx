import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getlanguagefromlocalstorage, setlanguagetolocalstorage } from '../utils/storage';
function Headmain() {
    const [state, setState] = useState(true)
    const [lan, setlan] = useState(getlanguagefromlocalstorage())

    const { t, i18n } = useTranslation()
    
    function handleselect(e) {
        console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
        setlanguagetolocalstorage(e.target.value)
        setlan(e.target.value)
    }

    useEffect(() => {
        const language = getlanguagefromlocalstorage()
        i18n.changeLanguage(language)
    }, [])

    return (
        <div style={{ backgroundColor: '#d8d8d8', textAlign: "center" }} className="headMain">
            <div className="header-nav">
                <ul>
                    <input type="text" placeholder="Qidiruv" className='mainHeadInput' />
                    <button className={("btnhead", state ? "activbtnmain" : "")} onClick={() => setState(true)}>{t("Topilmalar")}</button>
                    <button className={("btnhead", !state ? "activbtnmain" : "")} onClick={() => setState(false)}>{t("Yoqotmalar")}</button>
                    <select name="" id="" onChange={handleselect} value={lan}>
                        <option value="uz">uz</option>
                        <option value="en">en</option>
                    </select>
                </ul>
            </div>
        </div>
    );
}

export default Headmain;