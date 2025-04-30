import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUser } from "../api/services/useUser";

const UserPage = () => {
  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      displayName: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Form Data: (JSON)", data);
    createUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField label="First Name" required {...register("firstName")} />
        <TextField label="Last Name" required {...register("lastName")} />
        <TextField label="Display Name" required {...register("displayName")} />
        <TextField label="Username" required {...register("username")} />
        <TextField label="Email" required {...register("email")} />
        <TextField
          label="Password"
          required
          {...register("password")}
          type="password"
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default UserPage;
