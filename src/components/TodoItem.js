import React from "react"

const TodoItem = ({ item, index, deleteTodoItem, isDone }) => {
    return (
    <div className="task-list">
        <div className="list-item">
            <div className={item.done ? "task-done" : ""}>
            {item.todo}
            </div>
        </div>

        <div className="buttons">
        <button className="list-btn" onClick={() => isDone(index)}>Done</button>
            <button className="delete-btn" onClick={() => deleteTodoItem(index)}>X</button>
        </div>

    </div>
    )}

export default TodoItem