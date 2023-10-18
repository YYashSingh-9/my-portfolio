import classes from "./Header.module.css";
import img1 from "../assets/my-cartoon-Final/laughing.png";
import { Box, Container } from "@mui/material";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <>
      <div className={classes.divOne}>
        <Grid
          Container
          spacing={1}
          sx={{
            backgroundColor: "red",
            marginRight: "10px",
            paddingTop: "200px",
          }}
        >
          <Grid item lg={1} sx={{ maxWidth: "500px", backgroundColor: "pink" }}>
            <Box className={classes.Imgbox}>
              <div>
                <img src={img1} />
              </div>
              <div>
                <img src={img1} />
              </div>
              <div>
                <img src={img1} />
              </div>
              <div>
                <img src={img1} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;
