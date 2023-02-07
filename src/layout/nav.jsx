
function Nav() {
    return (
        <div className="Nav">
            <form action="">
                <select style={{margin: 10}} name="cars" id="cars">
                    <option value="1">Hudud</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select style={{margin: 10}} name="cars" id="cars">
                    <option value="1">Category</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input style={{margin: 10}} type="text" name="" id="" placeholder="Vaqt (dan)"/>
                <input style={{margin: 10}} type="text" name="" id="" placeholder="Vaqt (gacha)"/>
                <button style={{backgroundColor: '#a0b6f1', padding: 5, color: '#d2ddf3', margin: 10}} className="button">Filtrlash</button>
            </form>
        </div>
    );
}

export default Nav;
