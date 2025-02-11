import { create } from 'zustand';
import { useState } from 'react';
// Membuat store Zustand
const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task, date) => set((state) => ({ tasks: [...state.tasks, { task, date }] })),
  removeTask: (index) =>
    set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
}));
export default function TodoApp() {
  const { tasks, addTask, removeTask } = useTaskStore();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const handleAddTask = () => {
    if (task.trim() && date) {
      addTask(task, date);
      setTask('');
      setDate('');
    }
  };
  return (
    <div className="p-4 w-[500px] mx-auto bg-white rounded-lg shadow-xl mt-6">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder="Add a new task"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 ml-2"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 rounded-r ml-2"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span>{item.task} - {item.date}</span>
            <button
              onClick={() => removeTask(index)}
              className="bg-red-500 text-white px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}