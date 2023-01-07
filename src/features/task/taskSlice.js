import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  taskList: []
};


export const  taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);
      state.taskList = [...state.taskList, 
          action.payload
      ]
    }
  }
});


export const {addTask} = taskListSlice.actions;
export default taskListSlice.reducer;