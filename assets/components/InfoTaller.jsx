import React from 'react'
import { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import { ImgMediaCard } from './ImgMediaCard'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

export function InfoTaller({ tallerData }) {
    return (
        <Fragment>
            <Grid container spacing={0}>
                <Grid item md={12}>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        gutterBottom
                        style={{
                            color: '#616161',
                        }}
                    >
                        TALLER
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        gutterBottom
                        style={{ color: '#616161', fontWeight: 'bold' }}
                    >
                        {tallerData.nombre_taller}
                    </Typography>
                    <Divider
                        style={{
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            marginBottom: '10px',
                            color: '#616161',
                        }}
                    />
                    <Grid container spacing={0}>
                        <Grid item md={2}>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                style={{ color: '#616161' }}
                            >
                                On:
                            </Typography>
                        </Grid>
                        <Grid item md={10}>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                style={{ color: '#616161' }}
                            >
                                Reparat Millor que nou, Carrer Sepúlveda, 47,
                                08915,Barcelona
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider
                        style={{
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            marginBottom: '10px',
                        }}
                    />
                    <Grid container spacing={0}>
                        <Grid item md={2}>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                style={{
                                    color: '#616161',
                                }}
                            >
                                Quan:
                            </Typography>
                        </Grid>
                        <Grid item md={10}>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                style={{
                                    color: '#616161',
                                }}
                            >
                                {tallerData.fecha_taller}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}
