
import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialTask = []
export const taskSlice = createSlice({
    name: "task",
    initialState: initialTask,
    reducers: {
        addTask: (state, action) => {
            const toDo = {
                id: nanoid(),
                name: action.payload,
                checked: false
            }
            state.push(toDo)
        },
        getText: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addTask } = taskSlice.actions
export default taskSlice.reducer