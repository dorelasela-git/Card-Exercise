import {useRef, useState} from "react";
import './ToDoList.css'
const ToDoList = () => {
    const [toDos, setToDos] = useState([]);
    const [name, setName] = useState('');
    const [deadline, setDeadline] = useState('');
    const [search, setSearch] = useState('')
    let inputRef = useRef();
    const handleAdd = () => {
        const newTask = {
            id: Date.now(),
            name: name,
            deadline: deadline
        }
        setToDos([...toDos, newTask]);
        setName('');
        setDeadline('');
        inputRef.current.focus();
    }
        const nameChangeHandler = (event) => {
            setName(event.target.value)
        }
        const deadlineChangeHandler = (event) => {
            setDeadline(event.target.value)
        }
        const handleDeleteTodo = (id) => {
            const deleteToDo = toDos.filter(todo => todo.id !== id)
            console.log(id)
            setToDos(deleteToDo);
        }
    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    const filter = toDos.filter(to => to.name.toLowerCase().includes(search.toLowerCase()));

    const sortedTodos = filter.sort((a, b) =>
        a.deadline.localeCompare(b.deadline)
    );
        return (
            <div className="card">
                <h1 className="card__title">List of To-Dos</h1>
                <div className="card__form">
                    <label>Name of Task:</label>
                    <input
                        ref={inputRef}
                        type="text"
                        value={name}
                        onChange={nameChangeHandler}
                    />
                    <label>Deadline:</label>
                    <input
                        type="date"
                        value={deadline}
                        onChange={deadlineChangeHandler}
                    />
                    <button className="sign-up" type="button" onClick={handleAdd}>Add</button>
                </div>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}
                />
                <ul className="card__content">
                    {sortedTodos.map(todo => (
                        <li key={todo.id}>
                            <div className="card__form">
                                <div>{todo.name}</div>
                                <h1>{todo.deadline}</h1>
                            </div>
                            <button
                                className=".card__form button"
                                type="button"
                                onClick={() => {handleDeleteTodo(todo.id)}}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
};
export default ToDoList;