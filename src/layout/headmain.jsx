import { useState } from 'react';
 
function Headmain() {
    const [state, setState] = useState(true)
    return (
        <div className="headMain">
            <div className="header-nav">
                <ul>
                    <input type="text" placeholder="Qidiruv" className='mainHeadInput' />
                    <button className={("btnhead",state ? "activbtnmain" : "")} onClick={() => setState(true)}>Topilmalar</button>
                    <button className={("btnhead",!state ? "activbtnmain" : "")} onClick={() => setState(false)}>yoqotmalar</button>
                </ul>
            </div> 
            
        </div>
    );
}

export default Headmain;