import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { BackPage } from './BackPage'
export function CopyrightAmbCat() {
    return (
        <Fragment>
            <Typography
                variant="body1"
                paragraph={true}
                gutterBottom
                style={{
                    color: '#616161',
                    marginTop: '20px',
                }}
            >
                D’acord amb la Llei orgànica de protecció de dades de caràcter
                personal, l’informem que les seves dades seran incorporades en
                un fitxer responsabilitat de l’Àrea Metropolitana de Barcelona
                (AMB) per a la gestió i comunicació dels tallers, cursos i
                serveis de Reparat Millor que nou que ha sol•licitat. Pot
                exercir els seus drets adreçant-se als Serveis Jurídics de l'ÀMB
                amb seu social al Carrer 62, núms. 16-18 edifici A -Zona Franca
                08040 Barcelona.
            </Typography>
            <Divider
                style={{
                    paddingBottom: '5px',
                    marginBottom: '10px',
                    color: '#616161',
                    borderBottomWidth: 3,
                }}
            />
            <BackPage />
            <Divider
                style={{
                    paddingBottom: '5px',
                    marginBottom: '30px',
                    color: '#616161',
                    borderBottomWidth: 2,
                }}
            />
            <Grid container spacing={0} style={{ marginBottom: '30px' }}>
                <Grid item md={2}>
                    <img
                        src="/images/composer.png"
                        width="200px"
                        height="30px"
                    />
                </Grid>
                <Grid item md={2}>
                    <img src="/images/ue.png" width="200px" height="30px" />
                </Grid>
            </Grid>
        </Fragment>
    )
}
