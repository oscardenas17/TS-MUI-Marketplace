import React from "react";
import { Container, Button } from "@mui/material";

const Home:React.FC<{}>= () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 9 }}>
        <Button variant="contained">Home</Button>
      </Container>
    </>
  );
};

export default Home;
