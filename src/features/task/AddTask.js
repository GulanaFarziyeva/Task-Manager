import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";


import { openModal} from "../modal/modalSlice";

const AddTask = () => {
  const dispatch = useDispatch();

  return (
    <Box component="form" noValidate autoComplete="off">
      <Button
        variant="contained"
        sx={{
          background: "#6a2e2e !important",
          fontSize: "12px",
          py: 1.4,
          width: "90%",
          margin: "50px 5% 0 5%",
          fontWeight: 500,
          letterSpacing: "1px",
        }}
        onClick = {() => dispatch(openModal())}
      >
        Add New Task
      </Button>
    </Box>
  );
};

export default AddTask;
