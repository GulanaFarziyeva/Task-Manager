import { Box } from "@mui/system"
import { useSelector } from "react-redux";

import TaskListTable from "./TaskListTable";
import AddTask from "./AddTask";
import TaskForm from "./TaskForm";

const TaskList = () =>{
    const {isOpen}= useSelector(state => state.modal);

    return(
        <Box sx={{mt:10}}>
            {isOpen  && <TaskForm />}
            <AddTask />
            <TaskListTable />
        </Box>
    )
};

export default TaskList;