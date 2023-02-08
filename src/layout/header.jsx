import logo from "./logo.png"
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <img src={logo} width="100px" height="100px"></img>
            <div className="header-nav">
                <ul>
                    <li><Link  to="/addelem">Topib oldim</Link></li>
                    <li><Link  to="/addelem">yoqotdim</Link></li>
                    <li>kirish</li>
                    <li>Ruyhatdan otish</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
