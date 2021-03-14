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
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}></Typography>
          <a href="#about">
            <Button color="inherit">About</Button>
          </a>
          <a href="#experience">
            <Button color="inherit">Experience</Button>
          </a>
          <a href="#projects">
            <Button color="inherit">Projects</Button>
          </a>
          <a
            href="mailto:talhaabbasi1997@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="inherit">Contact</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}
