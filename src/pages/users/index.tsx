import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUser, deleteUser, updateUser } from "../api/services/useUser";
import { useEffect, useState } from "react";
import { getUserById } from "../api/services/useUser";
import { useRouter } from "next/router";

const UserPage = () => {
  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm({
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    if (!userId) {
      createUser(data);
    } else {
      updateUser(userId, data);
    }
    router.push("/");
  };

  const handleDelete = () => {
    if (userId) {
      deleteUser(userId);
      router.push("/");
    }
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
        <TextField
          label="First Name"
          required
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          InputLabelProps={{
            shrink: !!user?.firstName || !!watch("firstName"),
          }}
        />
        <TextField
          label="Last Name"
          required
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          InputLabelProps={{ shrink: !!user?.lastName || !!watch("lastName") }}
        />
        <TextField
          label="Display Name"
          required
          {...register("displayName")}
          error={!!errors.displayName}
          helperText={errors.displayName?.message}
          InputLabelProps={{
            shrink: !!user?.displayName || !!watch("displayName"),
          }}
        />
        <TextField
          label="Username"
          required
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
          InputLabelProps={{ shrink: !!user?.username || !!watch("username") }}
        />
        <TextField
          label="Email"
          required
          {...register("email")}
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          InputLabelProps={{ shrink: !!user?.email || !!watch("email") }}
        />
        <TextField
          label="Password"
          required
          {...register("password")}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          InputLabelProps={{ shrink: !!user?.password || !!watch("password") }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: userId ? "space-between" : "flex-end",
            gap: "1rem",
          }}
        >
          {userId ? (
            <Button
              variant="outlined"
              color="error"
              hidden={false}
              onClick={handleDelete}
            >
              Delete
            </Button>
          ) : null}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <Button variant="outlined" onClick={() => router.push("/")}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default UserPage;
