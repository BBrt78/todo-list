import './App.css';
import {useState, useRef, useEffect, useReducer, createContext, useContext} from 'react';
import {TodoList} from "./Todolist.js";
import {Todo} from "./Todo.js";

function App() {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [sortSymbol, setSortSymbol] = useState("▽");
   let sortedList = [];
   const [todoList, setTodoList] = useState(TodoList);
   const [editClick, setEditClick] = useState(false);
   const [deleteClick, setDeleteClick] = useState(false);
   const newTitle = (e) => {
		setTitle(e.target.value);
   };
   const newContent = (e) => {
		setContent(e.target.value);
   };
   const addTodo = () => {
	if (title, content) {
		const newTodo = {
			title: title,
			content: content,
			date: new Date(Date.now()).toLocaleString()
		}
		todoList.push(newTodo);
		setTitle("");
		setContent("");
		console.log(todoList)
	}};

	const sortChange = () => {
		if(sortSymbol === "▽") {
			sortedList = todoList.sort((a, b) => (a.date < b.date) ? 1 : -1);
			setTodoList(sortedList)
			setSortSymbol("△")
		} else {
			sortedList = todoList.sort((a, b) => (a.date > b.date) ? 1 : -1);
			setTodoList(sortedList)
			setSortSymbol("▽")
		}
		console.log(TodoList)
	};

	const editTodo = () => {
		if(editClick === false) {
			setEditClick(true)
		} else {
			setEditClick(false)
		}
    }
	
    const deleteTodo = (todo) => {
		setTodoList(todoList.filter((todo, index) => index !== todo.key))
	}
	
    return (
        <div className="container">
				<span className="todoListTitle">To Do List</span>
				
					<span className="newTodoTitle">New To Do</span>
						<label htmlFor="title" className="titleTitle">Title:</label>
						<input type="text" id="title" onChange={newTitle} value={title} className="inputTitle"></input>
						<br />
						<label htmlFor="content" className="contentTitle">Content:</label>
						<input type="text" id="content" onChange={newContent} value={content} className="content">
						</input>
					<button id="add" onClick={addTodo} className="addBtn">Add</button>

						<span className="listTitle">List:</span><br />
						<span className="sortTitle">Sort by date</span>
						<button className="sortSymbol" onClick={sortChange} value={sortSymbol}>{sortSymbol}</button>
					<div>
						{todoList.map((todo, key) => (
								<Todo 
									key={key}
									title={todo.title}
									content={todo.content}
									date={todo.date}
									edit={editTodo}
									delete={deleteTodo}
									editClick={editClick}
									deleteClick={deleteClick}
								/>
						))}
					</div>
		</div>
    )
}
export default App;
