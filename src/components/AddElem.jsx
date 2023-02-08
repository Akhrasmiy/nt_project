import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addelem = () => {
    const titleref = useRef(null)
    const descriptionref = useRef(null)
    const imageref = useRef(null)
    const tagsref = useRef(null)
    const typeref = useRef(null)
    const cateogryref = useRef(null)
    const navigate = useNavigate()
    function abbos(data) {
        console.log(data)
        const src = "http://188.225.31.249:3001/findings"
        axios.post(src, {
            // "title": data.title,

            "title": data.title,
            "user": 2,
            "cateogry": data.cateogry,
            "type": data.type,
            "description": data.description,
            "image": "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80",
            "tags": [
                data.tags
            ]
        }
        ).then((response => {
            if (response.status === 201) { navigate('/') }
        }))
    }

    return <div className="addFed">
        <div style={{ backgroundColor: '#e7f3e5', width: 300, height: 600, textAlign: 'center', color: 'green', margin: 'auto', marginTop: 50, padding: 50 }}>
            <h1>Qo'shish</h1>
            Title:
            <div style={{ marginTop: 30 }}>
                <input style={{ width: 300 }} placeholder='Title' ref={titleref} />
            </div>
            Description:
            <div style={{ marginTop: 30 }}>
                <input style={{ width: 300 }} placeholder='Description' ref={descriptionref} />
            </div>
            Image Url:
            <div style={{ marginTop: 30 }}>
                <input style={{ width: 300 }} placeholder='Image' ref={imageref} />
            </div>
            Topdim/Yoqotdim:
            <div style={{ marginTop: 30 }}>
                <select style={{ width: 300 }} name="type" id="" ref={typeref}>
                    <option value="Topdim">Topib oldim</option>
                    <option value="Yuqotdim">Yoqotdim</option>
                </select>
            </div>
            Nima narsa:
            <div style={{ marginTop: 30 }}>
                <select style={{ width: 300 }} name="tags" id="" ref={tagsref}>
                    <option value="1">Pul</option>
                    <option value="Hujjat">Hujjat</option>
                    <option value="Pul">Pul</option>
                    <option value="Buyum">Buyum</option>
                </select>
            </div>
            Qachon:
            <div style={{ marginTop: 30 }}>
                <select style={{ width: 300 }} name="cateogry" id="" ref={cateogryref}>
                    <option value="1">Bugun</option>
                    <option value="2">Shu hafta</option>
                    <option value="3">Shu oy</option>
                    <option value="4">Shu yil</option>
                </select>
            </div>



            <button style={{backgroundColor: 'green', marginTop: 20, color: 'white', border: 'none', paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20}} onClick={() => {
                const data = {
                    title: titleref.current.value,
                    description: descriptionref.current.value,
                    tags: tagsref.current.value,
                    image: imageref.current.value,
                    cateogry: cateogryref.current.value,
                    type: typeref.current.value
                    // type:typeref.current.value
                }
                abbos(data)
            }

            }>Save</button>

        </div>

    </div>
}

export default Addelem