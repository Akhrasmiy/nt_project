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
        <div>
            <input placeholder='Title' ref={titleref} />
            <input placeholder='description' ref={descriptionref} />
            <input placeholder='image' ref={imageref} />

            <select name="type" id="" ref={typeref}>
                <option value="Topdim">topib oldim</option>
                <option value="Yuqotdim">Yoqotdim</option>
                
            </select>

            <select name="tags" id="" ref={tagsref}>
                <option value="1">pul</option>
                <option value="hujjat">hujjat</option>
                <option value="pul">pul</option>
                <option value="buyum">buyum</option>
            </select>
            <select name="cateogry" id="" ref={cateogryref}>
                <option value="1">bugun</option>
                <option value="2">shu hafta</option>
                <option value="3">shu oy</option>
                <option value="4">shu yil</option>
            </select>



            <button onClick={() => {
                const data = {
                    title: titleref.current.value,
                    description: descriptionref.current.value,
                    tags: tagsref.current.value,
                    image: imageref.current.value,
                    cateogry: cateogryref.current.value,
                    type:typeref.current.value
                    // type:typeref.current.value
                }
                abbos(data)
            }

            }>Save</button>

        </div>

    </div>
}

export default Addelem