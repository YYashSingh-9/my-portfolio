import { Box, Container, Grid } from "@mui/material";
import img1 from "../assets/Two_fragrence.png";
import img2 from "../assets/nulltitile.png";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import classes from "./MyProjects.module.css";
import Card from "./Utils/Card";
const MyProjects = () => {
  const text1 =
    "WithSmooth and amazing functionalities , this e-com is a full stack web app made with MERN stack with 60+ features and task of a e-com web app";
  const text2 =
    "App is under construction will be live soon.. good things take time. Once the app will be live i will share it on my socials, for that you can follow me.";
  return (
    <>
      <Box className={classes.mainPDiv} id="my-work">
        <Container maxWidth="lg">
          <Box className={classes.subMain}>
            <Box className={classes.headTitle}>
              <h2>Projects i made..</h2>
            </Box>
            <Box className={classes.cardDiv}>
              <Grid
                container
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1}
              >
                <Grid item lg={6}>
                  <Box>
                    <Card
                      img={img1}
                      text={text1}
                      title={"Two Fragrence"}
                      repoLink={"https://github.com/YYashSingh-9/ordinary-site"}
                      demoLink={"https://two-fragrence.netlify.app/"}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <Box>
                    <Card
                      img={img2}
                      text={text2}
                      title={"Live soon"}
                      repoLink={null}
                      demoLink={null}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.noteDiv}>
              <NotificationImportantIcon
                sx={{ color: "#F18B3E ", fontSize: 25 }}
              />
              <h3>
                IMPORTANT : - Backend of these projects are hosted on 'Render'
                so the initial load may take some seconds , but once it is
                loaded then you would feel that it's worth the wait .
              </h3>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MyProjects;
