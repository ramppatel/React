import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice"

function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <form
            onSubmit={addTodoHandler}
            className="mt-12 flex items-center gap-3
                       bg-white/10 backdrop-blur-lg
                       p-4 rounded-2xl
                       border border-white/10
                       shadow-xl shadow-black/30
                       transition-all duration-300
                       hover:shadow-indigo-500/30"
        >
            {/* Input */}
            <input
                type="text"
                placeholder="✍️ Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2 rounded-xl
                           bg-gray-900/70 text-white
                           placeholder-gray-400
                           border border-gray-700
                           outline-none
                           transition-all duration-300
                           focus:ring-2 focus:ring-indigo-500
                           focus:border-indigo-500
                           focus:bg-gray-900"
            />

            {/* Button */}
            <button
                type="submit"
                className="px-6 py-2 rounded-xl
                           bg-gradient-to-r from-indigo-500 to-purple-600
                           text-white font-semibold
                           shadow-md shadow-indigo-500/40
                           transition-all duration-300
                           hover:scale-105 hover:shadow-lg
                           active:scale-95"
            >
                ➕ Add
            </button>
        </form>
    );
}

export default AddTodo;
