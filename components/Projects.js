import React from "react"
import { Container, Grid, makeStyles } from "@material-ui/core"
import Card from "./Card"
import ScrollableAnchor from "react-scrollable-anchor"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(0),
    marginTop: "5rem",
    marginBottom: "2rem",
  },
}))
const SchedulerTech = ["C#", "Microsoft SQL Server"]
const MedEaseTech = ["React", "Node.js", "Express", "MongoDB"]
const ShareAMealTech = ["C#", "Microsoft SQL Server"]
const LeGavrocheTech = ["Node.js", "Express", "MongoDB", "Stripe"]
const Dashboard = () => {
  const classes = useStyles()
  return (
    <ScrollableAnchor id="projects">
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3} style={{ justifyContent: "center" }}>
            <Grid item lg={6} sm={6} xl={6} xs={11}>
              <Card
                title="Scheduler"
                description="An application to assist in scheduling timetables for our university that will effectively reduce the time, cost, effort and human errors involved in manual scheduling"
                image="/Scheduler.gif"
                tech={SchedulerTech}
              ></Card>
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={11}>
              <Card
                title="MedEase"
                description="A platform that helps reduce the spread of Covid-19 by providing testing facility to patients at the comfort of their homes. The platform helps connect patients with relevant paramedic staff and hospitals hence reducing the load on hospitals for testing."
                image="/MedEase.gif"
                tech={MedEaseTech}
              ></Card>
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={11}>
              <Card
                title="Share A Meal"
                description="A website built to reduce the wastage of left-over food by connecting places where there is leftover food with the places which accommodate the less privileged."
                image="/ShareAMeal.gif"
                tech={ShareAMealTech}
              ></Card>
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={11}>
              <Card
                title="Le Gavroche"
                description="A website for a restaurant which helps connect potential customers with the restaurant. The customer can order food using the website. Payments can be made using Stripe's API which has been integrated within the website that enables the customer to do easy and secure transactions."
                image="/LeGavroche.gif"
                tech={LeGavrocheTech}
              ></Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ScrollableAnchor>
  )
}

export default Dashboard
