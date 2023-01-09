import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'

const GridComponent = () => {
  return (
    <>
    <CssBaseline />
    <AppBar position="relative">
        <Toolbar>
            <Typography variant='h6'> Posts </Typography>
        </Toolbar>
     </AppBar>
    
    </>
  )
}

export default GridComponent