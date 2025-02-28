import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../Features/todoSlice';

function Todo() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todos.todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            dispatch(addTodo({ text: task }));
            setTask('');
        }
    };

    const handleRemove = (id) => {
        dispatch(removeTodo({ id }));
    };

    return (
        <>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.name}
                        <span onClick={() => handleRemove(task.id)}> X </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;