
function List({contacts, onDelete, onUpdate}){


    const handleDelete = (id)=>{
        onDelete(id)
        // console.log(onDelete)
    }  

    const handleUpdate = (contact) =>{
        onUpdate(contact)
    }

    return(
        <table>
            <tr>
                <td>Tên</td>
                <td>Số điện thoại</td>
                <td>Hành động</td>
            </tr>
            {contacts.map((x)=>(
                <tr key={x.id}>
                    <td >
                        {x.userName}
                    </td>
                    
                    <td >
                        {x.phone}
                    </td>
                    
                    <td >
                        <button onClick={()=>(handleUpdate(x))}>Cập nhật</button>
                        <button onClick={()=>(handleDelete(x.id))}>Xóa</button>
                    </td>
                </tr>

            ))}
        </table>
    )

}

export default List