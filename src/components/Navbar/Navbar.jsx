import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import  { shoppingCart } from '@material-ui/core';

import logo from '../../assets/cart.png'

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />

                    </Typography>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
