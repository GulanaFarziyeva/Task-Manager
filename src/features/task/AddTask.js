import {Box, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddTask = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt:5
      }}
    >
      <TextField
        id="standard-multiline-flexible"
        label="Add New Task"
        multiline
        variant="standard"
        sx={{ width: "50vw", mr: 2 }}
      />
        <AddCircleIcon sx={{mt:3, fontSize:'30px', color: '#6a2e2e', cursor:'pointer'}}/>
    </Box>
  );
};

export default AddTask;
