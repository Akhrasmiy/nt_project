import logo from "./logo.png"
import { Link } from "react-router-dom";
function Header() {
    
    return (
        <div className="header">
            <img src={logo} width="100px" height="100px" alt="topilma rasmi"></img>
            <div className="header-nav">
                <ul>
                    <li><Link  to="/addelem/topidim">Topib oldim</Link></li>
                    <li><Link  to="/addelem/yoqotdim">yoqotdim</Link></li>
                    <li>kirish</li>
                    <li><Link  to="/regester">Ruyhatdan otish</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
