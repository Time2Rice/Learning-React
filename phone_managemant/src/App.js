import { useState } from 'react';
import './App.css';
import Add from './Component/Add';
import List from './Component/List';

function App() {
  const [contacts,setContacts] = useState([])
  const [currentUpdate, setCurrentUpdate] = useState(null)
  const [isEdit,setIsEdit] = useState(false)

  const handleData = (newContact)=>{

    if(isEdit){
      setContacts((prev)=>(prev.map((x)=>(x.id === currentUpdate.id?{...x,...newContact}:x))))
      setIsEdit(false)

    }else{
      const newData = {...newContact,id: Date.now()}
      // console.log(newData)
      setContacts((prev)=>([...prev,newData]))
      // console.log(contacts)
    }
  }

  const handleDelete = (id) =>{
    setContacts(()=>(contacts.filter((contact)=>(contact.id !== id))))
    // console.log(contacts)
  }

  const handleUpdate = (contact)=>{
    setCurrentUpdate(contact)
    setIsEdit(true)
    // console.log(contact);
    
  }

  const handleCancel = ()=>{
    setIsEdit(false)
  }

  return (
    <div className="App">
        <Add sendtoApp={handleData} currentUpdate = {currentUpdate} isEdit={isEdit} onCancel={handleCancel}/>
        <List contacts={contacts} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
