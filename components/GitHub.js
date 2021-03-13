import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Container } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import GitHubIcon from "@material-ui/icons/GitHub"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const useStyles = makeStyles(() => ({
  root: { marginTop: 20 },
  media: {
    height: 85,
    width: 540,
    marginTop: 5,
    marginLeft: 5,
  },
  countUp: {
    color: "#389a3b",
    fontSize: "1.25rem",
  },
  gitHubLogo: {
    marginLeft: 10,
  },
}))

async function getContributions(token, username) {
  const headers = {
    Authorization: `bearer ${token}`,
  }
  const body = {
    query: `query {
      user(login: "${username}") {
        name
        contributionsCollection {
          contributionCalendar {
            colors
            totalContributions
            weeks {
              contributionDays {
                color
                contributionCount
                date
                weekday
              }
              firstDay
            }
          }
        }
      }
    }`,
  }
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  })
  const data = await response.json()
  return data
}

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

export default function GitHub() {
  const classes = useStyles()
  const [user, setUser] = useState(null),
    [totalContributions, setTotalContributions] = useState(null),
    [startingDate, setStartingDate] = useState(null),
    [viewPortEntered, setViewPortEntered] = useState(false)
  useEffect(async () => {
    const response = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
    )
    response.json().then((data) => {
      setUser(data)
    })
    const contributions = await getContributions(
      process.env.NEXT_PUBLIC_GITHUB_TOKEN,
      process.env.NEXT_PUBLIC_GITHUB_USERNAME
    )
    setTotalContributions(
      contributions?.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions
    )
    var date = new Date(
      contributions?.data?.user?.contributionsCollection?.contributionCalendar?.weeks[0].firstDay
    )
    setStartingDate(date.toLocaleDateString("en-US", options))
  }, [
    process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    process.env.NEXT_PUBLIC_GITHUB_USERNAME,
  ])

  return (
    <div>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`http://ghchart.rshah.org/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
              title="GitHub commit chart"
            />
            <CardContent>
              <p>
                <span className={classes.countUp}>
                  <CountUp
                    end={totalContributions}
                    duration={10}
                    redraw={true}
                  />
                </span>{" "}
                commits since {startingDate}
              </p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              target="_blank"
              href="https://github.com/talhaabbasi"
              rel="noopener noreferrer"
              className={classes.gitHubLogo}
            >
              <GitHubIcon />
            </a>
          </CardActions>
        </Card>
      </Container>
    </div>
  )
}
