import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUser } from "../api/services/useUser";
import { useEffect, useState } from "react";
import { getUserById } from "../api/services/useUser";
import { useRouter } from "next/router";

const UserPage = () => {
  const { handleSubmit, reset, register, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      displayName: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const userId = router.query.userId as string;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (userId) {
      getUserById(userId).then((userData) => {
        reset(userData?.data);
        setUser(userData?.data);
      });
    }
  }, [userId, reset]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Form Data: (JSON)", data);
    createUser(data);
  };

  console.log("watch", watch());
  console.log("user", user);

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
        <TextField
          label="First Name"
          required
          {...register("firstName")}
          InputLabelProps={{
            shrink: !!user?.firstName || !!watch("firstName"),
          }}
        />
        <TextField
          label="Last Name"
          required
          {...register("lastName")}
          InputLabelProps={{ shrink: !!user?.lastName || !!watch("lastName") }}
        />
        <TextField
          label="Display Name"
          required
          {...register("displayName")}
          InputLabelProps={{
            shrink: !!user?.displayName || !!watch("displayName"),
          }}
        />
        <TextField
          label="Username"
          required
          {...register("username")}
          InputLabelProps={{ shrink: !!user?.username || !!watch("username") }}
        />
        <TextField
          label="Email"
          required
          {...register("email")}
          InputLabelProps={{ shrink: !!user?.email || !!watch("email") }}
        />
        <TextField
          label="Password"
          required
          {...register("password")}
          type="password"
          InputLabelProps={{ shrink: !!user?.password || !!watch("password") }}
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
