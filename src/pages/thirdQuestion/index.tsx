import React from 'react';
import TodoList from './TodoList';

const App: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-10 uppercase">
        Todo List
      </h1>
      <TodoList />
    </div>
  );
};

export default App;
