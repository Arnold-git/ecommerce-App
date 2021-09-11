import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'

export const Cart = () => {
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title}>Your Shopping Cart</Typography>
        </Container>
    )
}
