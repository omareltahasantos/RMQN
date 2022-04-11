import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export function BackPage() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            style={{
                paddingTop: '25px',
                paddingBottom: '20px',
            }}
        >
            <Grid item md={2}>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: '#FFFFFF',
                        color: '#616161',
                        borderRadius: '30px',
                        borderColor: '#616161',
                    }}
                    onClick={() => {
                        window.location.href =
                            'https://uniwebsidad.com/libros/symfony-2-3/capitulo-6/creando-rutas'
                    }}
                >
                    Tornar al llistat principal
                </Button>
            </Grid>
        </Grid>
    )
}
