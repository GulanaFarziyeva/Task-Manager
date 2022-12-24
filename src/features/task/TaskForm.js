import { Button, TextField, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import "../../assets/style/index.css";

const TaskForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "150px auto 0 auto",
        width: "40%",
        backgroundColor: "#fff",
        p: 4,
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{ display: "flex", mb: 5, px: 1, justifyContent: "space-between" }}
      >
        <Typography
          textAlign="center"
          sx={{ fontWeight: 600, fontSize: "20px", color: "#616A6B" }}
        >
          Add New Task
        </Typography>
        <Button>
          <CloseIcon sx={{ color: "#d63447" }} />
        </Button>
      </Box>

      <TextField
        sx={{ mb: 1 }}
        id="outlined-multiline-flexible"
        label="Title"
        {...register("Title", { required: true })}
        aria-invalid={errors.Title ? "true" : false}
      />
      {errors.Title?.type === "required" && (
        <p role="alert" style={{ color: "#d63447", fontSize: "14px" }}>
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
        <p role="alert" style={{ color: "#d63447", fontSize: "14px" }}>
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
        <p role="alert" style={{ color: "#d63447", fontSize: "14px" }}>
          Description is required
        </p>
      )}

      <Button
        variant="contained"
        type="submit"
        sx={{ mb: 2, width: "120px", alignSelf: "flex-end" }}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
