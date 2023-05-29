import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TaskType = {
  id: number;
  text: string;
  completed: boolean;
  hidden?: boolean;
};

interface TodoState {
  tasks: TaskType[];
}

const initialState: TodoState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: TaskType = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    searchTask: (state, action: PayloadAction<string>) => {
      const searchText = action.payload.toLowerCase();
      state.tasks.forEach((task) => {
        const taskTextLower = task.text.toLowerCase();
        task.hidden = !taskTextLower.includes(searchText);
      });
    },
  },
});

export const { addTask, deleteTask, toggleTask, searchTask } =
  todoSlice.actions;

export default todoSlice.reducer;
