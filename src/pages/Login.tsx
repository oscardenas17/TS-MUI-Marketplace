import React from "react";
import { Container, Button } from "@mui/material";

const Login:React.FC<{}>= () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 9 }}>
        <Button variant="contained">Login</Button>
      </Container>
    </>
  );
};

export default Login;
