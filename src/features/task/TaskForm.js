import { Button, TextField, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from './taskSlice'

import theme from "../../theme/theme";
import { closeModal } from "../modal/modalSlice";
import { useState } from "react";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data))
    return data;
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "40%",
        backgroundColor: "#eceff1",
        p: 4,
        position: "absolute",
        zIndex: 999,
        top: "50%",
        left: " 50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "8px",
        boxShadow: "#6a2e2e 0px 2px 8px 0px",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{ display: "flex", mb: 5, px: 1, justifyContent: "space-between" }}
      >
        <Typography
          textAlign="center"
          sx={{
            fontWeight: 300,
            fontSize: theme.typography.textLg,
            color: theme.palette.main,
          }}
        >
          Add New Task
        </Typography>
        <CloseIcon
          sx={{ color: theme.palette.main, cursor: "pointer" }}
          onClick={() => dispatch(closeModal())}
        />
      </Box>

      <TextField
        sx={{ mb: 1, color: theme.palette.main }}
        id="outlined-multiline-flexible"
        label="Title"
        value={data}
        onChange={setData}
        {...register("Title", { required: true })}
        aria-invalid={errors.Title ? "true" : false}
      />
      {errors.Title?.type === "required" && (
        <p
          role="alert"
          style={{
            color: theme.palette.danger,
            fontSize: theme.typography.textMd,
          }}
        >
          Title is required
        </p>
      )}

      <TextField
        sx={{ mt: 5, mb: 1 }}
        id="outlined-number"
        label="Deadline"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("date", { required: true })}
        aria-invalid={errors.date ? "true" : "false"}
      />
      {errors.date?.type === "required" && (
        <p
          role="alert"
          style={{
            color: theme.palette.danger,
            fontSize: theme.typography.textMd,
          }}
        >
          Deadline is required
        </p>
      )}

      <TextField
        sx={{ mb: 1, mt: 5 }}
        id="outlined-multiline-flexible"
        label="Description"
        invalid=""
        multiline
        {...register("Description", { required: true })}
        aria-invalid={errors.Description ? "true" : "false"}
      />
      {errors.Description?.type === "required" && (
        <p
          role="alert"
          style={{
            color: theme.palette.danger,
            fontSize: theme.typography.textMd,
          }}
        >
          Description is required
        </p>
      )}

      <Button
        variant="contained"
        type="submit"
        sx={{
          mt: 2,
          alignSelf: "flex-end",
          fontSize: theme.typography.textXS,
          backgroundColor: theme.palette.main,
          py: 1,
          width: "150px",
        }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
