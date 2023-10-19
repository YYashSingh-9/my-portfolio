import * as React from "react";
import classes from "./Card.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card
      sx={{ maxWidth: 345, height: 450, marginLeft: 7, borderRadius: 4 }}
      className={classes.pcard}
    >
      <CardMedia sx={{ height: 200 }} image={props.img} title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "2rem",
            fontWeight: "900",
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
          className={classes.titles}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "1.4rem",
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {props.text}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button size="large">
          <a href="https://two-fragrence.netlify.app/">Visit site</a>
        </Button>
        <Button size="large">Check Repo</Button>
      </CardActions>
    </Card>
  );
}
