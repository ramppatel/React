import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
        // console.log("Todo : ", todo);
        setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
        prev.map((todo) =>
            todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
    );
};

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  // for getting todos
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
        setTodos(todos);
    }
  }, []);

  // for storing todos in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]
                        flex items-center justify-center px-4 py-10">

          <div
            className="w-full max-w-2xl
                      bg-white/10 backdrop-blur-xl
                      rounded-2xl
                      shadow-2xl shadow-black/40
                      border border-white/10
                      p-6 text-white
                      transition-all duration-300
                      hover:shadow-blue-500/20"
          >

            {/* Title */}
            <h1 className="text-3xl font-extrabold text-center mb-8 tracking-wide">
              📝 Manage Your Todos
            </h1>

            {/* Todo Form */}
            <div className="mb-6">
              <TodoForm />
            </div>

            {/* Todo List */}
            <div className="flex flex-col gap-3">
              {todos.length === 0 && (
                <p className="text-center text-white/50 italic">
                  No todos yet. Start by adding one 🚀
                </p>
              )}

              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="w-full
                            transition-all duration-300
                            hover:scale-[1.01]"
                >
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>

          </div>
        </div>
    </TodoContextProvider>
  )
}

export default App
