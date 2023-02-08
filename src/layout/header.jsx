import logo from "./logo.png"
function Header() {
    return (
        <div className="header">
            <img src={logo} width="100px" height="100px"></img>
            <div className="header-nav">
                <ul>
                    <li>Topib oldim</li>
                    <li>yoqotdim</li>
                    <li>kirish</li>
                    <li>Ruyhatdan otish</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
