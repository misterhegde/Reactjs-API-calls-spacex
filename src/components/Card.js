import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: "90%",
    margin: "10px auto",
    // border: 0,
    padding: "20px 0",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 6px 0 rgba(0, 0, 0, 0.25)",
  },
  bullet: {
    display: "inline-block",
    margin: "2px 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography> */}
        {/* <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p" className={classes.title}>
          Title: {props.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
          event date: {props.eventDate}
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
          Flight number: {props.flightNumber}
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
          Details: {props.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
