import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Avatar, Container, Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
    paddingTop: "80px",
  },
  avatar: {
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    margin: "15px 0",
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottomn align="center">
          About me
        </Typography>
        <Typography align="center">
          <img alt="Remy Sharp" src="/talha.jpeg" className={classes.avatar} />
        </Typography>
        <Typography variant="p" align="center" gutterBottom paragraph>
          A software engineer based in Karachi, Pakistan 🇵🇰
        </Typography>
        <br />
        <Typography variant="p" align="center" gutterBottom paragraph>
          I went to FAST NUCES, Karachi for my degree in Computer Science and
          have been on a journey to get better at programming ever since.
        </Typography>
        <br />
        <Typography variant="p" align="center" gutterBottom paragraph>
          When I'm not on the computer, I enjoy Jiu Jitsu 🥋 and Photograpy 📷
        </Typography>
      </Container>
    </div>
  )
}
