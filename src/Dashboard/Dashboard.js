import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { mainListItems, secondaryListItems } from '../Components/ListItems'
import Chart from '../Components/Chart'
import Deposits from '../Components/Deposits'
import Orders from '../Components/Orders'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import useStyles from './useStyles'
import { doLogout } from '../Services/utils'

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright © '}
         <Link color="inherit" href="https://material-ui.com/">
            Your Website
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   )
}

export default function Dashboard({ history }) {
   const classes = useStyles()
   const [open, setOpen] = React.useState(false)

   const handleDrawerOpen = () => {
      setOpen(true)
   }

   const handleDrawerClose = () => {
      setOpen(false)
   }

   const handleExitApp = () => {
      doLogout()
      history.push('/')
   }

   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

   return (
      <div className={classes.root}>
         <CssBaseline />
         <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
               <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
               >
                  <MenuIcon />
               </IconButton>
               <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  Dashboard
               </Typography>
               <IconButton color="inherit" onClick={handleExitApp}>
                  <ExitToAppIcon />
               </IconButton>
            </Toolbar>
         </AppBar>
         <Drawer
            variant="permanent"
            classes={{
               paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
            open={open}
         >
            <div className={classes.toolbarIcon}>
               <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
               </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
         </Drawer>
         <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
               <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12} md={8} lg={9}>
                     <Paper className={fixedHeightPaper}>
                        <Chart />
                     </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                     <Paper className={fixedHeightPaper}>
                        <Deposits />
                     </Paper>
                  </Grid>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                     <Paper className={classes.paper}>
                        <Orders />
                     </Paper>
                  </Grid>
               </Grid>
            </Container>
            <Copyright />
         </main>
      </div>
   )
}
