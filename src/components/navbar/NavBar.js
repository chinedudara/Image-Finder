import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Home from '@material-ui/icons/Home'
import Info from '@material-ui/icons/Info'

export default class NavBar extends React.Component {
  state = {open: false}

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }

  render(){
    return (
      <React.Fragment>
        <AppBar position="static"  >
          <ToolBar variant="regular">
            <IconButton color="inherit" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Image Finder
            </Typography>
          </ToolBar>
        </AppBar>
        <Drawer
          open={this.state.open}
          onClose={this.toggleDrawer}
        >
          <div 
            style={{width: "200px"}}
            onClick={this.toggleDrawer}
            tabIndex={0}
          >
            <List>
              <Link 
                to="/" 
                style={{textDecoration: 'none'}}
              >
                <ListItem>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Divider />
              <Link 
                to="/about" 
                style={{textDecoration: 'none'}}
              >
                <ListItem>
                  <ListItemIcon>
                    <Info />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    )
  }
}
