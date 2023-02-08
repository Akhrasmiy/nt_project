import logo from "./logo.svg"
function Header() {
    return (
        <div className="header">
            <img src={logo} width="70px"></img>
            <div className='logo'>logo</div>
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
