import classes from "./FooterDiv.module.css";
import titleImg from "../assets/footertitle.png";
import footerHeadImg from "../assets/FOOTER.png";
import { Box, Container, Grid } from "@mui/material";
import { socialOne, socialTwo } from "./Utils/socials";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
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
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box
                className={classes.socials}
                sx={{ backgroundColor: "red", height: 50 }}
              >
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                  <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterDiv;
