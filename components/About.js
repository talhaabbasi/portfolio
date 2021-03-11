import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Avatar, Container, Box } from "@material-ui/core"
import ScrollableAnchor from "react-scrollable-anchor"

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
    <ScrollableAnchor id="about">
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Typography variant="h5" align="center">
            About me
          </Typography>
          <Typography align="center">
            <img alt="Avatar" src="/talha.jpeg" className={classes.avatar} />
          </Typography>
          <Typography align="center" paragraph>
            A software engineer based in Karachi, Pakistan 🇵🇰
          </Typography>
          <br />
          <Typography align="center" paragraph>
            I went to FAST NUCES, Karachi for my degree in Computer Science and
            have been on a journey to get better at programming ever since.
          </Typography>
          <br />
          <Typography align="center" paragraph>
            When I'm not on the computer, I enjoy Jiu Jitsu 🥋 and Photograpy 📷
          </Typography>
        </Container>
      </div>
    </ScrollableAnchor>
  )
}
