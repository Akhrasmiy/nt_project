import { useState } from 'react';
 
function Headmain() {
    const [type, settype] = useState(true)
    return (
        <div className="headMain">
            <div className="header-nav">
                <ul>
                    <input type="text" placeholder="Qidiruv" className='mainHeadInput' />
                    <button className={("btnhead",type ? "activbtnmain" : "")} onClick={() => settype(true)}>Topilmalar</button>
                    <button className={("btnhead",!type ? "activbtnmain" : "")} onClick={() => settype(false)}>yoqotmalar</button>
                </ul>
            </div> 
            
        </div>
    );
}

export default Headmain;