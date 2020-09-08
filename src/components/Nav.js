import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navbar-dark bg-dark">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/history" className="text-white">
              {" "}
              <Button color="inherit"> History</Button>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/payload" className="text-white">
              <Button color="inherit"> Payloads</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
