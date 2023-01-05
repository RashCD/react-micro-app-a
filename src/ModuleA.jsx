import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState, Fragment } from "react";

function ModuleA() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Fragment>
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 140,
              backgroundColor: "secondary.main",
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, p: 2 }}
            >
              {count}
            </Typography>
            <Box justifyContent={"space-between"}>
              <Button
                variant="contained"
                sx={{ mx: 3 }}
                onClick={handleDecrement}
              >
                -
              </Button>
              Test
              <Button
                variant="contained"
                sx={{ mx: 3 }}
                onClick={handleIncrement}
              >
                +
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              minHeight: 140,
            }}
          >
            <Typography component="h4" variant="h6">
              Github:
            </Typography>
            <a href="https://www.google.com" target="_blank">
              www.google.com
            </a>
            <Typography component="h4" variant="h6">
              Website Link:
            </Typography>
            <a href={window.location.href} target="_blank">
              {window.location.href}
            </a>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ModuleA;
