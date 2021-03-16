import React from "react"
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  CardActionArea,
  CardMedia,
} from "@material-ui/core"
import Badge from "react-simple-badges"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  media: {
    height: 280,
    marginTop: 5,
    marginLeft: 5,
  },
  badge: {
    marginRight: 5,
  },
}))

const SmallCard = (props) => {
  const classes = useStyles(props)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
      </CardActionArea>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {props.title}
            </Typography>
            <Typography color="textPrimary" paragraph>
              {props.description}
            </Typography>
            {props.tech.map((technology) => {
              return <Badge name={technology} className={classes.badge} />
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SmallCard
