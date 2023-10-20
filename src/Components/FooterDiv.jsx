import classes from "./FooterDiv.module.css";
import titleImg from "../assets/footertitle.png";
import footerHeadImg from "../assets/FOOTER.png";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const FooterDiv = () => {
  return (
    <>
      <Box className={classes.mainFooterDiv}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
            spacing={5}
          >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.titleimg}>
                <img src={footerHeadImg} />
              </Box>
              <Box className={classes.Subtitleimg}>
                <img src={titleImg} />
              </Box>
            </Grid>
            <Container maxWidth="lg">
              <Box sx={{ width: "100%" }} className={classes.socials}>
                <Stack direction="row" justifyContent={"center"} spacing={4}>
                  <Button color="secondary" endIcon={<InstagramIcon />}>
                    You can follow me here..
                  </Button>
                  <Button color="success" endIcon={<LinkedInIcon />}>
                    We can connect here..
                  </Button>
                </Stack>
                <Stack direction="row" justifyContent={"center"} spacing={1}>
                  <Button color="secondary" endIcon={<TwitterIcon />}>
                    I am here too..
                  </Button>
                  <Button color="success" endIcon={<GoogleIcon />}>
                    Or you can mail me..
                  </Button>
                </Stack>
              </Box>
            </Container>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterDiv;
