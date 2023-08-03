import {useState, useRef, useEffect, useReducer, createContext} from 'react';
import {TodoList} from "./Todolist.js";

export function Todo(props) {
    const [edit, setEdit] = useState("Edit");
    const [editTitle, setEditTitle] = useState(props.title);
    const [editContent, setEditContent] = useState(props.content);
   
    const editF = () => {
        console.log(props.title)
        if (edit === "Edit") {

            setEdit("Save")
        } else {
            setEdit("Edit")}
    };

    const editTitleF = (e) => {
        setEditTitle(e.target.value);
    }

    const editContentF = (e) => {
        setEditContent(e.target.value)
    }
    
    return (    
                <div className="todo">
                    {edit === "Edit" ?
                        <>
                        <div className="title" id="titleId">Title: {editTitle}</div><br />
                        <div className="content2">Content: {editContent}</div><br />
                        <div>Added {props.date}</div>
                        </>
                    :
                        <>
                        <span className="titleEdit">Title: </span>
                        <input type="text" id="title" value={editTitle} onChange={editTitleF}></input>
                        
                        <span>Content: </span>
                        <input type="text" id="content" value={editContent} onChange={editContentF}></input>
                        </>
                    }
                    <button className="edit" onClick={editF}>{edit}</button>
                    <button className="delete" onClick={props.delete}>Delete</button>
               </div>
    )
}
