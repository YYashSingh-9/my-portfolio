import { Box, Container, Grid } from "@mui/material";
import classes from "./MyProjects.module.css";

const MyProjects = () => {
  return (
    <>
      <Box className={classes.mainPDiv}>
        <Container maxWidth="lg">
          <Grid container direction={"column"} justifyContent={"center"}>
            <Grid item>
              <Box className={classes.headTitle}></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MyProjects;
