import React, { useState } from 'react'

export const AddTodo = ({addTodo},props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be blank")
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className ={`container my-3 text-${props.mode}`}>
            <h3>Add a Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3" >
                    <label htmlFor="title"  className="form-label">Task Title</label>
                    <input type="text" value={title} style={{color:props.mode==='dark'?'white':'#2F2F30',backgroundColor:props.mode==='dark'?'#2F2F30':'white'}} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3" >
                    <label htmlFor="desc"  className="form-label">Description of task</label>
                    <input type="text" value={desc} style={{color:props.mode==='dark'?'white':'#2F2F30',backgroundColor:props.mode==='dark'?'#2F2F30':'white'}} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
