import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import  { shoppingCart } from '@material-ui/core';

import logo from '../../assets/cart.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        E-commerce Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <shoppingCart />
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
