import React from 'react'
import ActionButton from '../src/components/ActionButton';

import {Grid, Typography} from '@material-ui/core'

const Lease = () => {
    return (
        <>
        {/* Navbar for the main page */}
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <Typography variant="h6" component="h6">Gestion des baux</Typography>
                </Grid>
                <Grid item  display="flex">
                    <ActionButton variant="outlined">Ajouter</ActionButton>
                </Grid>
            </Grid>
        </>
    )
}

export default Lease;