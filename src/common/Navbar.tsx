import React from "react";
import { Box, AppBar, Toolbar, Container, Grid ,Button,Stack} from "@mui/material";
const Navbar: React.FC = () => {
  return (
    <Box sx={{}}>
      <AppBar>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>

              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2} >
                <Button variant="outlined">Login</Button>
                <Button variant="contained">Register</Button>
                </Stack>
                
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
