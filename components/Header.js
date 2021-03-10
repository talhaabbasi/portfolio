import React from "react"
import { makeStyles, StylesProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  root: {
    padding: "0px",
    paddingTop: "100px",
    minHeight: "20rem",
    width: "100%",
    backgroundColor: "black",
    color: "white",
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Hi, I'm Talha Abbasi
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Software Engineer
      </Typography>
    </div>
  )
}
