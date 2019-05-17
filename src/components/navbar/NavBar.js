import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default function NavBar() {
  return (
    <AppBar position="static"  >
      <ToolBar variant="regular">
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Image Finder
        </Typography>
      </ToolBar>
    </AppBar>
  )
}