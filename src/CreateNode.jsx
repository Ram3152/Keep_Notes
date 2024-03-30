import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNode=(props)=>{
    const [expand,setexpand]=useState(false);
    const[note,setNote]=useState({
        title:"",
        content:"",
    });

    const update = (event) => {
        const { value, name } = event.target;
        setNote((prevdata) => {
          return {
            ...prevdata,
            [name]: value,
          };
        });
      };
      
    const addevent=()=>{
      props.passNote(note);
      setNote({
        title:"",
        content:"",
      })
    };
    const expandit=()=>{
        setexpand(true);
    }
    const compress=()=>{
        setexpand(false);
    }
    return (
        <>
        <div className='main'     onDoubleClick={ compress}>
        <form >
         {  expand? <input type="text" name='title'  placeholder='Title' autoComplete='off'  value={note.title} onChange={update}/>:null}
            <textarea name="content" id="" cols=" " rows=" " value={note.content}   onChange={update} onClick={expandit} 
        
            placeholder='Write a note....'></textarea>
         {expand ? <Button  onClick={addevent}><AddIcon className='plug_sign'/></Button> :null}
        </form> </div>
        </>
    );
}
export default CreateNode;