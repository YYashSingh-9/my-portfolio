import { Box, Container, Grid } from "@mui/material";
import classes from "./AboutMe.module.css";
import gossip from "../assets/my-cartoon-Final/gossip.png";
const AboutMe = () => {
  return (
    <>
      <Box className={classes.aboutmeSection}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            className={classes.parentDiv}
          >
            <Grid item lg={3} md={3} sm={6}>
              <Box className={classes.myImgTwo}>
                <img src={gossip} />
              </Box>
            </Grid>
            <Grid item lg={9} md={9} sm={6}>
              <Box className={classes.titleNtext}>
                <h2>I wanna say this about me..</h2>
                <span>
                  <p>
                    This will be short and crisp , i am a full stack web
                    developer but getting a job is not the main cause of me
                    being a developer .. First is i love tech and building stuff
                    also i believe that this skill is power with this i can
                    create products or services which can make a dent on this
                    planet. <br />
                    <br />
                    As you might have already seen my skills section so you know
                    what i know and use but apart from that i am ..
                    <span className={classes.highlightedText}>
                      <h1>
                        more which makes me stand our from the crowd which
                        are...
                      </h1>
                    </span>
                    <br />
                    <br />
                    1. I am excellent in business planning and product planning.
                    <br />
                    2. I like to work on detailing like minute details also.
                    <br />
                    3. Real world problem solving and converting it into a
                    product / service.
                    <br />
                    4. I take control and lead.
                    <br />
                    5. I am a very good in communication and management.
                    <br />
                  </p>
                </span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutMe;
