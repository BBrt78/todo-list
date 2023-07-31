import {useState, useRef, useEffect, useReducer, createContext} from 'react';
import {TodoList} from "./Todolist.js";


export function Todo(props) {
    const [edit, setEdit] = useState("Edit");
    const [delete1, setDelete1] = useState(false);
   
    const editF = () => {
        if (edit === "Edit") {
            setEdit("Save")
        } else {
            setEdit("Edit")}
    };

    // const deleteTodo = () => {
    //    delete1 === false ? setDelete1(true) : setDelete1(false);
    // };
    
    return (<>
            {props.deleteClick === false ?
                <>
                <div className="todo">
                    {edit === "Edit" ?
                        <>
                        <div className="title" id="titleId">Title: {props.title}</div><br />
                        <div className="content2">Content: {props.content}</div><br />
                        <div>Added {props.date}</div>
                        </>
                    :
                        <>
                        <span className="titleEdit">Title: </span>
                        <input type="text" id="title" value={props.title} ></input>
                        
                        <span>Content: </span>
                        <textarea 
                            className="contentEdit" 
                            id="content"
                             
                            value={props.content}>
                        </textarea>
                        </>
                    }
                    <button className="edit" onClick={editF}>{edit}</button>
                    <button className="delete" onClick={props.delete}>Delete</button>
                </div>
                </>
            :
            <></>
            }
        </>
    )
}
