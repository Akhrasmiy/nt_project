import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SettingOutlined } from '@ant-design/icons';
import {Button, Cascader, Input, Select, Space } from 'antd';

const { Option } = Select;
const Addelem = () => {
    const { t } = useTranslation()
    const { type } = useParams();
    const titleref = useRef(null)
    const descriptionref = useRef(null)
    const imageref = useRef(null)
    const tagsref = useRef(null)
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
            "type": type,
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
        <div className='nomsiz'>
            <h1>{t("e'lon berish")}</h1>
            <label htmlFor="title">{t("Title")}</label>
            <input placeholder='Title' ref={titleref} id="title" />
            <label htmlFor="description" >{t("Description")}</label>
            <input placeholder='description' ref={descriptionref} id="description" />
            <label htmlFor="image">{t("Image")}</label>
            <input placeholder='image' id='image' ref={imageref} />
            <label htmlFor="tags">{t("Turlar")}</label>
            <select name="tags" id="tags" ref={tagsref}>
                <option value="1">pul</option>
                <option value="hujjat">hujjat</option>
                <option value="pul">pul</option>
                <option value="buyum">buyum</option>
            </select>
            <label htmlFor="category">{t("Vaqt")}</label>
            <select name="cateogry" id="category" ref={cateogryref}>
                <option value="1">bugun</option>
                <option value="2">shu hafta</option>
                <option value="3">shu oy</option>
                <option value="4">shu yil</option>
            </select>

            <Button type="primary"  className='nomsizbutton'onClick={() => {
                const data = {
                    title: titleref.current.value,
                    description: descriptionref.current.value,
                    tags: tagsref.current.value,
                    image: imageref.current.value,
                    cateogry: cateogryref.current.value,

                }
                abbos(data)
            }

            }>{t("Save")}</Button>

        </div>

    </div>
}

export default Addelem