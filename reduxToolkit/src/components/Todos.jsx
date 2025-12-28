import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="mt-8">
            {/* Header */}
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
                📋 Your Todos
            </h2>

            {/* Empty State */}
            {todos.length === 0 && (
                <p className="text-center text-white/60 italic">
                    No todos yet. Add one above ✨
                </p>
            )}

            {/* Todo List */}
            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="group flex justify-between items-center
                                   px-5 py-3 rounded-xl
                                   bg-white/10 backdrop-blur-md
                                   border border-white/10
                                   shadow-md shadow-black/30
                                   transition-all duration-300
                                   hover:shadow-lg hover:scale-[1.01]"
                    >
                        {/* Todo Text */}
                        <span className="text-slate-900 text-base tracking-wide">
                            {todo.text}
                        </span>

                        {/* Delete Button */}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="w-10 h-10 flex items-center justify-center
                                       rounded-lg
                                       bg-red-500/20
                                       border border-red-500/30
                                       text-red-400
                                       transition-all duration-300
                                       hover:bg-red-500/40 hover:scale-110
                                       active:scale-95"
                            title="Delete Todo"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
