import React from 'react'


const SingIn = () => {
    return <div style={{ backgroundColor: '#e7f3e5', width: 300, height: 500, textAlign: 'center', color: 'green', margin: 'auto', marginTop: 50, padding: 50 }}>
        <h1>Ro'yxatdan o'tish</h1>

        <form style={{ textAlign: 'left' }}>
            <div style={{ marginTop: 30 }}>
                Ism
                <br />
                <input style={{ width: 300 }} />
            </div>
            <div style={{ marginTop: 30 }}>
                Familiya
                <br />
                <input style={{ width: 300 }} />
            </div>
            <div style={{ marginTop: 30 }}>
                Telefon raqami
                <br />
                <input style={{ width: 300 }} />
            </div>
            <div style={{ marginTop: 30 }}>
                Parol
                <br />
                <input style={{ width: 300 }} />
            </div>
            <div style={{ marginTop: 30 }}>
                Parol tasdiqlash
                <br />
                <input style={{ width: 300 }} />
            </div>

        </form>
    </div>
}

export default SingIn