import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Container } from "@material-ui/core"
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
  universityLink: {
    color: "#0087cb",
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <ScrollableAnchor id="about">
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Typography align="center">
            <img alt="Avatar" src="/talha.jpeg" className={classes.avatar} />
          </Typography>
          <Typography align="center" variant="h5" gutterBottom>
            Hi, I'm Talha Abbasi
          </Typography>
          <Typography align="center" paragraph>
            A software engineer based in Karachi, Pakistan 🇵🇰
          </Typography>
          <br />
          <Typography align="center" paragraph>
            I went to{" "}
            <a
              target="_blank"
              href="http://nu.edu.pk/"
              rel="noopener noreferrer"
              className={classes.universityLink}
            >
              FAST National University
            </a>
            , Karachi for my Bachelor's in Computer Science and have been on a
            journey to get better at programming ever since.
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
