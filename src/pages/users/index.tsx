import { Box, Button, TextField } from "@mui/material";

const UserPage = () => {
  return (
    <form>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField label="First Name" required />
        <TextField label="Last Name" required />
        <TextField label="Display Name" required />
        <TextField label="Username" required />
        <TextField label="Email" required />
        <TextField label="Password" required />
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
