import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import taskListSlice from "../features/task/taskSlice";
import modalSlice from "../features/modal/modalSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        taskList: taskListSlice,
        modal: modalSlice
    }
});

export default store;