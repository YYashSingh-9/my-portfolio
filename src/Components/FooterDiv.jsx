import classes from "./FooterDiv.module.css";
import titleImg from "../assets/footertitle.png";
import footerHeadImg from "../assets/FOOTER.png";
import { Box, Container, Grid } from "@mui/material";

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
          >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className={classes.titleimg}>
                <img src={footerHeadImg} />
              </Box>
              <Box lassName={classes.Subtitleimg}>
                {/* <img src={titleImg} /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterDiv;
