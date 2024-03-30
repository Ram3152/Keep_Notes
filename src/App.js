import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import CreateNode from "./CreateNode";
import Note from "./Note";
function App() {
const [additem,setitem]=useState([]);
  const addnote=(note)=>{
  setitem((prev)=>{
    return [...prev,note];

  });

  }
  const ondelete=(id)=>{
    setitem((prev)=>{
      return prev.filter((currdata,index)=>{
        return id!==index;
      })
    })
  };
  return (
    <div className="App">
   
   <Header/>
   <CreateNode passNote={addnote}/>
 {
  additem.map((val,index)=>{
   return   <Note  
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  delete={ondelete} />
  })
 };
<Footer/>
    </div>
  );
}

export default App;
