import React, {useState} from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return;
        addTodo({todo, completed : false});
        setTodo("")
    }


    return (
        <form
            onSubmit={add}
            className="flex items-center gap-2 p-2 rounded-xl
                        bg-white/10 backdrop-blur-md
                        shadow-lg shadow-black/20
                        transition-all duration-300 hover:shadow-xl"
            >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full px-4 py-2 rounded-lg
                        bg-white/20 text-white placeholder-white/60
                        border border-white/20
                        outline-none
                        transition-all duration-300
                        focus:bg-white/30
                        focus:ring-2 focus:ring-green-400
                        focus:shadow-lg focus:shadow-green-500/30"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button
                type="submit"
                className="px-4 py-2 rounded-lg
                        bg-gradient-to-r from-green-400 to-green-600
                        text-white font-semibold
                        shadow-md shadow-green-500/40
                        transition-all duration-300
                        hover:scale-105 hover:shadow-lg
                        active:scale-95"
            >
                ➕ Add
            </button>
        </form>

    );
}

export default TodoForm;
