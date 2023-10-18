import classes from "./Header.module.css";
import img1 from "../assets/my-cartoon-Final/laughing.png";
import img2 from "../assets/my-cartoon-Final/working.png";
import img3 from "../assets/my-cartoon-Final/idea.png";
import img4 from "../assets/my-cartoon-Final/crossFingers.png";
import img5 from "../assets/my-cartoon-Final/ThumbsUp.png";
import titleImg from "../assets/title.png";
import subtitleImg from "../assets/subtitle.png";

import { AppBar, Box, Container, Tooltip, Paper } from "@mui/material";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <>
      <div className={classes.divOne}>
        <Box>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item lg={1} md={1} sm={1}>
              <AppBar
                position="static"
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
              >
                <Box className={classes.Navbar}>
                  <div className={classes.navIcon}>
                    <Tooltip
                      title={
                        <h3 className={classes.tooltipDesignH3}>My Page</h3>
                      }
                    >
                      <img src={img1} />
                    </Tooltip>
                  </div>
                  <div className={classes.navIcon}>
                    <Tooltip
                      title={
                        <h3 className={classes.tooltipDesignH3}>My Skills</h3>
                      }
                    >
                      <img src={img5} />
                    </Tooltip>
                  </div>
                  <div className={classes.navIcon}>
                    <Tooltip
                      title={
                        <h3 className={classes.tooltipDesignH3}>My Work</h3>
                      }
                    >
                      <img src={img2} />
                    </Tooltip>
                  </div>
                  <div className={classes.navIcon}>
                    <Tooltip
                      title={
                        <h3 className={classes.tooltipDesignH3}>
                          My Information
                        </h3>
                      }
                    >
                      <img src={img4} />
                    </Tooltip>
                  </div>
                  <div className={classes.navIcon}>
                    <Tooltip
                      title={
                        <h3 className={classes.tooltipDesignH3}>
                          My Contact info
                        </h3>
                      }
                    >
                      <img src={img3} />
                    </Tooltip>
                  </div>
                </Box>
              </AppBar>
            </Grid>
            <Grid item lg={1} md={1} sm={1} marginTop={10}>
              <Box className={classes.headerImgs}>
                <div className={classes.title}>
                  <img src={titleImg} />
                </div>
                <div className={classes.Subtitle}>
                  <img src={subtitleImg} />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Header;
