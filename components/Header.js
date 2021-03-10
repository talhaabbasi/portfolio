import React from "react"
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const useStyles = makeStyles(() => ({
  root: {
    padding: "0px",
    paddingTop: "100px",
    minHeight: "20rem",
    width: "100%",
    backgroundColor: "black",
    color: "white",
  },
  icon: {
    textAlign: "center",
    marginRight: "10px",
    cursor: "pointer",
  },
}))

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center">
        Hi, I'm Talha Abbasi
      </Typography>
      <Typography variant="h6" align="center">
        Software Engineer 🧑‍💻
      </Typography>
      <Typography align="center" paragraph>
        <a
          target="_blank"
          href="https://github.com/talhaabbasi"
          rel="noopener noreferrer"
        >
          <GitHubIcon className={classes.icon} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/talha-abbasi"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className={classes.icon} />
        </a>
      </Typography>
    </div>
  )
}
