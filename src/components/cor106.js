import "./Classes.css";
import Cor106 from "./Images/cor106.jpeg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AssignmentLateIcon from "@material-ui/icons/AssignmentLate";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import FolderIcon from "@material-ui/icons/Folder";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
  fullgrid: {
    paddingLeft: 500,
    paddingTop: 10,
  },
  semigrid: {
    paddingLeft: 0,
    paddingTop: 10,
    maxwidth: 100,
  },
  footer: {},
  row: {
    paddingBottom: 30,
  },
});

function createData(topic: string, lecture: string, seminar: string) {
  return { topic, lecture, seminar };
}

const rows = [
  createData("Computing", "Monday - 12.15", "Friday - 10.15"),
  createData("Python", "Monday - 14.15", "Thursday - 14.15"),
  createData("React", "Tuesday - 08.15", "Wednesday - 10.15"),
];

export default function Cor1006() {
  const classes = useStyles();
  return (
    <div classname="classes">
      <Grid container>
        <Grid item xs="6" className={classes.fullgrid}>
          <Grid container>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Cor106}
                  title="Course 106"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cor 106 - Course 6
                  </Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton>
                  <AnnouncementIcon />
                </IconButton>
                <IconButton>
                  <AssignmentLateIcon />
                </IconButton>
                <IconButton>
                  <FolderIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs="2" className={classes.semigrid}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Next topic</TableCell>
                  <TableCell align="center">Next Lecture</TableCell>
                  <TableCell align="center">Next Seminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.topic}
                    </TableCell>
                    <TableCell align="center">{row.lecture}</TableCell>
                    <TableCell align="center">{row.seminar}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
