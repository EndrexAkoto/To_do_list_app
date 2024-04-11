import React from 'react'
import './App.css'

// Import other components
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
      </header>
      <main>
        {/* Render TodoList component */}
        <TodoList />
      </main>
    </div>
  )
}

export default App
