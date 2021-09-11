import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import  { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/cart.png';
import useStyles from './styles';

const Navbar = ( { totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography conponent={ Link } to="/" variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        E-commerce Store
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <Link to="/cart">Go to cart</Link>
                        <IconButton conponent={ Link } to="/cart" aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={ totalItems } color="secondary">
                                <ShoppingCart />
                            </Badge>

                        </IconButton>
                    </div> )}
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
