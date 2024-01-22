import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        'tasks': []
    },
    reducers: {
        addTask: (state, action) => {
            state['tasks'].push({text: action.payload.text, status: action.payload.status});
        },
        changeStatus: (state, action) => {
            state['tasks'][action.payload.index].status = action.payload.status;
        }
    }
});

export const { addTask, changeStatus } = tasksSlice.actions;
export default tasksSlice.reducer;