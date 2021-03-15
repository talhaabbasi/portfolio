import React from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black",
  },
  button: {
    textTransform: "none",
  },
  resume: {
    color: "#37ed92",
    borderColor: "#37ed92",
    textTransform: "none",
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}></Typography>
          <a href="#about">
            <Button color="inherit" className={classes.button}>
              About
            </Button>
          </a>
          <a href="#experience">
            <Button color="inherit" className={classes.button}>
              Experience
            </Button>
          </a>
          <a href="#projects">
            <Button color="inherit" className={classes.button}>
              Projects
            </Button>
          </a>
          <a
            href="mailto:talhaabbasi1997@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="inherit" className={classes.button}>
              Contact
            </Button>
          </a>
          <a href="/Talha Abbasi's Resume.pdf" download>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.resume}
            >
              Resume
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}
