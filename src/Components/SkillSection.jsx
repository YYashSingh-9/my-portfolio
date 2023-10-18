import { Box, Grid } from "@mui/material";
import classes from "./SkillSection.module.css";
import icon1 from "../assets/icons/";
const SkillSection = () => {
  return (
    <>
      <Box className={classes.skillDiv}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Box className={classes.logos}>
              <div className={classes.logoSlide}>
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
                <img />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SkillSection;
