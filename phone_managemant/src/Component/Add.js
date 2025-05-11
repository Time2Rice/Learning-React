import { useEffect, useState } from "react"

function Add({sendtoApp, currentUpdate, isEdit, onCancel}){
    const [formData,setFormData] = useState({
        userName:'',
        phone:''
    })

    const initData = {
        userName:'',
        phone:''
    }

    useEffect(()=>{
        if(currentUpdate){
            setFormData({
                "userName":currentUpdate.userName,
                "phone":currentUpdate.phone
            })
        }
    },[currentUpdate])

    const handleChange = (e)=>{
            const {name,value} = e.target
            setFormData((prev)=>({...prev,[name]:value}))
            // console.log(formData);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        sendtoApp(formData);
        setFormData(initData)
        // console.log(sendtoApp)
    }

    const handleCancel = ()=>{
        setFormData(initData);
        onCancel(false)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Nhập tên</label>
                <input 
                    name="userName"
                    type="text"
                    value={formData.userName}
                    onChange={handleChange}
                />

                <label>Nhập số điện thoại</label>
                <input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {isEdit?<button type="submit" >Cập nhật</button> :<button type="submit">Thêm</button> }
                {isEdit && <button type="button" onClick={handleCancel}>Hủy bỏ</button>}
            </form>
        </>
    )
}

export default Add