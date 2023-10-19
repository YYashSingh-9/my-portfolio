import { Box, Grid, Container } from "@mui/material";
import classes from "./SkillSection.module.css";
import html from "../assets/icons/html.png";
import express from "../assets/icons/express.png";
import react from "../assets/icons/react.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import mongodb from "../assets/icons/mongodb.png";
import mui from "../assets/icons/mui.png";
import mongoose from "../assets/icons/mongoose.png";
import node from "../assets/icons/node.png";
import jwt from "../assets/icons/jwt.png";

const SkillSection = () => {
  return (
    <>
      <Box className={classes.skillDivOne}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item sm={1} lg={1} md={1}>
            <Box className={classes.logos}>
              <div className={classes.logoSlide}>
                <img src={html} />
                <img src={css} />
                <img src={js} />
                <img src={react} />
                <img src={express} />
                <img src={mongodb} />
                <img src={node} />
                <img src={mongoose} />
                <img src={jwt} />
                <img src={mui} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.divTwo}>
        <Container maxWidth="lg">
          <Box className={classes.skillDivTitles}>
            <h1>hah</h1>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SkillSection;
