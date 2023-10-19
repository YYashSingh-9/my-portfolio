import { Box, Grid, Container } from "@mui/material";
import classes from "./SkillSection.module.css";
import Html5 from "../assets/icons/html.png";
import ExpressJS from "../assets/icons/express.png";
import ReactJS from "../assets/icons/react.png";
import CSS3 from "../assets/icons/css.png";
import JavaScript from "../assets/icons/js.png";
import MongoDb from "../assets/icons/mongodb.png";
import MaterialUI from "../assets/icons/mui.png";
import Mongoose from "../assets/icons/mongoose.png";
import NodeJS from "../assets/icons/node.png";
import JWT from "../assets/icons/jwt.png";
import ReactRouter from "../assets/icons/react-router.png";
import Redux from "../assets/icons/redux.png";
import ReactToastify from "../assets/icons/toastify.png";
import PostMan from "../assets/icons/postman-icon.png";
import showingHand from "../assets/my-cartoon-Final/showingHand.png";

const listItemsFE = [
  "Html5",
  "CSS3",
  "JavaScript",
  "ReactJS",
  "ReactRouter",
  "Redux",
  "Redux-toolkit",
  "ReactToastify",
];
const listItemsBE = ["ExpressJS", "NodeJS", "MongoDb", "Mongoose", "JWT"];
const listItemsOther = ["MaterialUI", "PostMan", "GitHub", "VSCode"];
const otherSkill = [
  "Business Planning",
  "Management",
  "Communication",
  "leadership",
];
const ListItem = (props) => {
  return (
    <>
      <li className={classes.listitem}>
        <h4>{props.title}</h4>
      </li>
    </>
  );
};
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
                <img src={Html5} />
                <img src={CSS3} />
                <img src={JavaScript} />
                <img src={ReactJS} />
                <img src={ExpressJS} />
                <img src={MongoDb} />
                <img src={NodeJS} />
                <img src={Mongoose} />
                <img src={JWT} />
                <img src={ReactRouter} />
                <img src={Redux} />
                <img src={ReactToastify} />
                <img src={PostMan} />
                <img src={MaterialUI} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.divTwo}>
        <Container maxWidth="lg">
          <Box className={classes.skillDivTitles}>
            <h2>Skills i possess.</h2>
            <h3>
              I believe in showing all skills which i confidently use and have
              the proper knowledge of because at last what matters is whether i
              am capable of getting the work done or not .
            </h3>
            <span>
              <h4>Following are my skills : -</h4>
            </span>
            <Box className={classes.lists}>
              <div className={classes.myImg}>
                <img src={showingHand} />
              </div>
              <div className={classes.listOne}>
                <ul>
                  <li className={classes.listitle}>Front-End</li>
                  {listItemsFE.map((el) => {
                    return <ListItem title={el} />;
                  })}
                </ul>
              </div>
              <div className={classes.listTwo}>
                <ul>
                  <li className={classes.listitle}>Back-End</li>
                  {listItemsBE.map((el) => {
                    return <ListItem title={el} />;
                  })}
                </ul>
              </div>
              <div className={classes.listThree}>
                <ul>
                  <li className={classes.listitle}>Framework,Tool & IDE</li>
                  {listItemsOther.map((el) => {
                    return <ListItem title={el} />;
                  })}
                </ul>
              </div>
              <div className={classes.listFour}>
                <ul>
                  <li className={classes.listitle}>My Extra Skills</li>
                  {otherSkill.map((el) => {
                    return <ListItem title={el} />;
                  })}
                </ul>
              </div>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SkillSection;
