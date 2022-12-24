import { Box } from "@mui/system"
import TaskListTable from "./TaskListTable";
import AddTask from "./AddTask";

const TaskList = () =>{
    return(
        <Box sx={{mt:10}}>
            <AddTask />
            <TaskListTable />
        </Box>
    )
};

export default TaskList;