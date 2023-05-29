// TodoList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaRegTrashAlt } from 'react-icons/fa';
import { GrFormAdd } from 'react-icons/gr';
import { BiSearchAlt } from 'react-icons/bi';

import { RootState } from '../../redux/store';
import {
  addTask,
  deleteTask,
  toggleTask,
  searchTask,
} from '../../redux/features/todoSlice';

const TodoList: React.FC = () => {
  const [taskText, setTaskText] = useState('');

  const tasks = useSelector((state: RootState) =>
    state.todo.tasks.filter((task) => !task.hidden)
  );

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  const handleSearchTask = (searchText: string) => {
    dispatch(searchTask(searchText));
  };

  return (
    <div className="w-[90%] md:w-[50%] mx-auto bg-gray-900/20 p-5 rounded-md">
      <div className="md:flex md:justify-between">
        <div className="w-full md:w-[60%] flex justify-between mb-4 md:mb-0">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="w-[80%] md:w-[66%] py-2 px-3 bg-gray-200 inner__shadow border border-gray-300 rounded-md outline-none focus-within:border-gray-400"
            placeholder="Add new task"
          />
          <button
            onClick={handleAddTask}
            className="py-2 px-3 rounded-md font-medium bg-gray-300 hover:bg-gray-400 hover:drop-shadow-lg transition-all duration-300 flex gap-1 items-center drop-shadow-md"
          >
            <GrFormAdd /> <span className="hidden md:flex">Add Task</span>
          </button>
        </div>

        <div className="relative">
          <BiSearchAlt className="absolute left-2 top-3 text-lg text-gray-400" />
          <input
            type="text"
            placeholder="Search Task"
            className="w-full md:w-[200px] py-2 px-3 pl-8 bg-gray-200 inner__shadow border border-gray-300 rounded-md outline-none focus-within:border-gray-400"
            onChange={(e) => handleSearchTask(e.target.value)}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-3 mt-6">
        {tasks.length === 0 ? (
          <p className="bg-gray-300 rounded-md p-3 drop-shadow-md">
            Your to-do list is currently empty.
          </p>
        ) : (
          tasks
            .slice()
            .reverse()
            .map((task) => (
              <li
                key={task.id}
                className={`${
                  task.completed
                    ? 'line-through bg-gray-400 opacity-70 drop-shadow-none'
                    : ''
                } bg-gray-200 rounded-md p-3 drop-shadow-md flex justify-between`}
              >
                <label className="flex items-center gap-4 cursor-pointer hover:opacity-70">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                  />
                  <span className={` text-lg font-medium`}>{task.text}</span>
                </label>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="p-1 rounded-md font-medium bg-transparent text-gray-500 hover:text-red-500 transition-all duration-300 "
                >
                  <FaRegTrashAlt />
                </button>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
