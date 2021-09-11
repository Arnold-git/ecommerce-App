import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'

export const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no item in your cart, start shopping!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{ item.name}</div>

                    </Grid>
                ))}

            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button"></Button>
                </div>

            </div>
        
        </>

    )
        

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart/> : < FilledCart/>}
        </Container>
    )
}
