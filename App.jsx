import { useState } from 'react'
import React from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  const addTask = () => {

    if (newTask.trim() !== '') {

      setTasks([...tasks, newTask])

      setNewTask('')

    }

  }

  const removeTask = (index) => {

    setTasks(tasks.filter((_, i) => i !== index))

  }

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
<h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
<div className="flex gap-2 mb-4">
<input

          type="text"

          value={newTask}

          onChange={(e) => setNewTask(e.target.value)}

          placeholder="Digite uma tarefa"

          className="border rounded px-2 py-1"

        />
<button

          onClick={addTask}

          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
>

          Adicionar
</button>
</div>
<ul className="w-full max-w-md">

        {tasks.map((task, index) => (
<li

            key={index}

            className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
>
<span>{task}</span>
<button

              onClick={() => removeTask(index)}

              className="text-red-500 hover:text-red-700"
>

              Remover
</button>
</li>

        ))}
</ul>
</div>

  )

}

export default App
 