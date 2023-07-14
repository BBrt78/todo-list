import {useState, useRef, useEffect, useReducer, createContext} from 'react';
import {TodoList} from "./Todolist.js";


export function Todo(props) {
    const [edit, setEdit] = useState("Edit");
    const [delete1, setDelete1] = useState(false);
    const [titleEditValue, setTitleEditValue] = useState(props.title);
    const [contentEditValue, setContentEditValue] = useState(props.content)

    const editF = () => {
        if (edit === "Edit") {
            setEdit("Save")
        } else {
            setEdit("Edit")}
    };

    const changeTitle = (e) => {
        setTitleEditValue(e.target.value)
    };
    const changeContent = (e) => {
        setContentEditValue(e.target.value)
    };
    const delete1F = () => {
       delete1 === false ? setDelete1(true) : setDelete1(false);
    };

    return (<>
        
            {delete1 === false ?
                <>
                <div className="todo">
                    {edit === "Edit" ?
                        <>
                        <div className="title" id="titleId">Title: {titleEditValue}</div><br />
                        <div className="content2">Content: {contentEditValue}</div><br />
                        <div>Added {props.date}</div>
                        </>
                    :
                        <>
                        <span className="titleEdit">Title: </span>
                        <input type="text" id="title" value={titleEditValue} onChange={changeTitle}></input>
                        
                        <span>Content: </span>
                        <textarea 
                            className="contentEdit" 
                            id="content"
                            onChange={changeContent} 
                            value={contentEditValue}>
                        </textarea>
                        </>
                    }
                    <button className="edit" onClick={editF}>{edit}</button>
                    <button className="delete" onClick={delete1F}>Delete</button>
                </div>
                </>
            :
            <></>
            }
        </>
    )
}
