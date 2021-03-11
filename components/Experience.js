import React from "react"
import PropTypes from "prop-types"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import ScrollableAnchor from "react-scrollable-anchor"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#3c806f",
  },
})(Tabs)

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#3c806f",
      opacity: 1,
    },
    "&$selected": {
      color: "#3c806f",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#3c806f",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />)

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    width: "80%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  companyLink: {
    color: "#3c806f",
  },
  list: {
    color: "green",
    background: "white",
    fontSize: "30px",
  },
  listElement: {
    listStyle: "none",
    content: "00BB",
  },
  experience: {
    marginTop: "5rem",
    marginBottom: "2rem",
  },
}))

export default function Experience() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <ScrollableAnchor id="experience">
        <Container maxWidth="sm" className={classes.experience}>
          <Typography variant="h5" align="center">
            Experience
          </Typography>
        </Container>
      </ScrollableAnchor>
      <div className={classes.root}>
        <AntTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <AntTab label="Foretheta LLC." {...a11yProps(0)} />
          <AntTab label="Raawee K12 Solutions Inc." {...a11yProps(1)} />
          <AntTab label="Systems Limited." {...a11yProps(2)} />
          <AntTab label="Raawee K12 Solutions Inc." {...a11yProps(3)} />
        </AntTabs>
        <TabPanel value={value} index={0}>
          <h3>
            Software Engineer - I{" "}
            <span className={classes.companyLink}>
              @{" "}
              <a
                target="_blank"
                href="https://www.foretheta.com"
                rel="noopener noreferrer"
              >
                Foretheta
              </a>
            </span>
          </h3>
          <Grid item xs={12} md={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Worked on front-end related feature requests and resolved
                  design bugs of products using React JS.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Maintained blogs for multiple projects powered by Gatsby
                  framework.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Deployed and maintained applications using AWS Services like
                  AWS Lambda, Amazon DynamoDb, AWS Cognito and Chalice.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Created various API routes (using Python) and consumed them in
                  our applications.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Wrote Cron Jobs (using AWS Lambda functions) and use GitHub
                  Actions to automate our workflows.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Wrote multiple test cases for our application's frontend and
                  backend.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3>
            Intern{" "}
            <span className={classes.companyLink}>
              @{" "}
              <a
                target="_blank"
                href="https://www.raaweek12.com/"
                rel="noopener noreferrer"
              >
                Raawee K12 Solutions Inc.
              </a>
            </span>
          </h3>
          <Grid item xs={12} md={8}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Generated ReactJS Components including a Data Grid.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  The Data Grid was tested on a large amount of data (5000 rows)
                  and helped reduce the load-time significantly.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Learned the working of ASP.Net Core applications.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3>
            Intern{" "}
            <span className={classes.companyLink}>
              @{" "}
              <a
                target="_blank"
                href="https://www.systemsltd.com/"
                rel="noopener noreferrer"
              >
                Systems Ltd.
              </a>
            </span>
          </h3>
          <Grid item xs={12} md={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Learned the working of PHP and the Laravel Framework.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Learned the use of Design Patterns in Enterprise software.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Implement Cart, Blog and multiple basic functionalities.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h3>
            Intern{" "}
            <span className={classes.companyLink}>
              @{" "}
              <a
                target="_blank"
                href="https://www.raaweek12.com/"
                rel="noopener noreferrer"
              >
                Raawee K12 Solutions Inc.
              </a>
            </span>
          </h3>
          <Grid item xs={12} md={12}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Learned the working of MVC Design Pattern.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Implemented a School Management System under the supervision
                  of a Senior Developer.
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </TabPanel>
      </div>
    </>
  )
}
