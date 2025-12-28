import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`group flex items-center gap-3 px-4 py-3 rounded-xl
                        border border-white/10
                        backdrop-blur-md
                        transition-all duration-300
                        shadow-md shadow-black/30
                        hover:shadow-lg hover:scale-[1.01]
                        ${todo.completed
                            ? "bg-green-400/20 text-white/60"
                            : "bg-white/10 text-white"
                        }`}
        >
            {/* Checkbox */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
                className="w-5 h-5 accent-green-500 cursor-pointer
                           transition-transform duration-200
                           group-hover:scale-110"
            />

            {/* Todo Text */}
            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                className={`w-full bg-transparent outline-none
                            text-base
                            transition-all duration-300
                            ${todo.completed ? "line-through text-white/50" : ""}
                            ${isTodoEditable
                                ? "border-b border-green-400 focus:border-green-500"
                                : "border-b border-transparent"
                            }`}
            />

            {/* Edit / Save Button */}
            <button
                onClick={() => {
                    if (todo.completed) return;
                    isTodoEditable ? editTodo() : setIsTodoEditable(true);
                }}
                disabled={todo.completed}
                className="w-9 h-9 flex items-center justify-center rounded-lg
                           bg-white/10 backdrop-blur-md
                           border border-white/10
                           text-lg
                           transition-all duration-300
                           hover:bg-green-500/20 hover:scale-110
                           disabled:opacity-40 disabled:cursor-not-allowed"
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            {/* Delete Button */}
            <button
                onClick={() => deleteTodo(todo.id)}
                className="w-9 h-9 flex items-center justify-center rounded-lg
                           bg-white/10 backdrop-blur-md
                           border border-white/10
                           text-lg
                           transition-all duration-300
                           hover:bg-red-500/30 hover:scale-110"
            >
                🗑️
            </button>
        </div>
    );
}

export default TodoItem;
