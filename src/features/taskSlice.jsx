import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialTask = [];
export const taskSlice = createSlice({
  name: "task",
  initialState: { value: initialTask },
  reducers: {
    addTask: (state, action) => {
      const toDo = {
        id: nanoid(),
        name: action.payload,
        checked: false,
        editable: false,
      };
      state.value.push(toDo);
    },
    taskChecked: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload ? { ...task, checked: !task.checked } : task
      );
    },
    taskDelete: (state, action) => {
      state.value = state.value.filter(
        (task) => task.id !== action.payload || !task.checked
      );
    },
    editTask: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload
          ? { ...task, editable: !task.editable }
          : task
      );
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      state.value = state.value.map((task) => {
        return task.id === id
          ? { ...task, name: text, editable: !task.editable }
          : task;
      });
    },
  },
});

export const { addTask, taskChecked, taskDelete, editTask, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
