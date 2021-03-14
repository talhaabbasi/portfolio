import React from "react"
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardActionArea,
  CardMedia,
  Container,
  CardActions,
} from "@material-ui/core"
import Badge from "react-simple-badges"

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
  responsive: {
    width: "100%",
    height: "70%",
  },
  media: {
    height: 280,
    width: 540,
    marginTop: 5,
    marginLeft: 5,
  },
}))

const SmallCard = (props) => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            onClick={(e) => {
              console.log(e)
            }}
          />
        </CardActionArea>
        <CardContent>
          <Typography color="textSecondary" variant="h6">
            {props.title}
          </Typography>
          <Typography color="textPrimary" paragraph>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          {props.tech.map((technology) => {
            return <Badge name={technology} />
          })}
        </CardActions>
      </Card>
    </Container>
  )
}

export default SmallCard
