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
  const mailFn = (e) => {
    e.preventDefault();
    window.location.href = "mailto:yyashsngh@gmail.com";
  };
  return (
    <>
      <Box className={classes.mainFooterDiv} id="my-contact">
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.titleimg}>
                <img src={footerHeadImg} />
              </Box>
              <Box className={classes.Subtitleimg}>
                <img src={titleImg} />
              </Box>
            </Grid>
            <Container sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <Box className={classes.socials}>
                <Stack
                  direction="row"
                  justifyContent={"center"}
                  spacing={4}
                  mr={4}
                >
                  <Button color="secondary" endIcon={<InstagramIcon />}>
                    <a href="https://www.instagram.com/yashwardhanm_singh/">
                      You can follow me here..
                    </a>
                  </Button>
                  <Button color="success" endIcon={<LinkedInIcon />}>
                    <a href="https://www.linkedin.com/in/yashwardhanm-singh-083064291/">
                      We can connect here..
                    </a>
                  </Button>
                </Stack>
                <Stack direction="row" justifyContent={"center"} spacing={1}>
                  <Button color="secondary" endIcon={<TwitterIcon />}>
                    <a href="https://twitter.com/Yash__9999">I am here too..</a>
                  </Button>
                  <Button color="success" endIcon={<GoogleIcon />}>
                    <a onClick={mailFn}>Or you can mail me..</a>
                  </Button>
                </Stack>
              </Box>
              <Box sx={{ textAlign: "center", fontSize: 15 }} mt={15}>
                <footer>
                  <h4 style={{ fontWeight: 500, color: "#F18B3E" }}>
                    If link error - yyashsngh@gmail.com
                  </h4>
                  <h3>
                    Feel free to contact me , we never know how close we are to
                    <span className={classes.myname}> gold.</span>
                  </h3>
                  <small>
                    Copyright © 2023 This site is property of
                    <span className={classes.myname}> _Yashwardhan Singh</span>
                  </small>
                </footer>
              </Box>
            </Container>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterDiv;
