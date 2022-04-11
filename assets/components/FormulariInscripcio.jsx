import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export function FormulariInscripcio() {
    return (
        <Fragment>
            {' '}
            <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{
                    color: '#616161',
                    marginTop: '20px',
                    fontWeight: '600',
                }}
            >
                FORMULARI D'INSCRIPCIO
            </Typography>
            <Divider
                style={{
                    paddingBottom: '5px',
                    marginBottom: '10px',
                    color: '#616161',
                    borderBottomWidth: 3,
                }}
            />
            <Typography
                variant="subtitle1"
                component="div"
                gutterBottom
                style={{
                    color: '#616161',
                    marginTop: '20px',
                    fontWeight: 'bold',
                }}
            >
                Recorda que:
            </Typography>
            <Box
                sx={{
                    width: 'auto',
                    borderRadius: '20px',
                    border: 2,
                    borderColor: 'grey.300',
                    height: 'auto',
                    backgroundColor: '#fff',
                    padding: '15px',
                }}
            >
                <ul style={{ color: '#616161', paddingTop: '10px' }}>
                    <li>
                        Una persona no es pot inscriure en més de 8 tallers en
                        un mateix mes.
                    </li>
                    <li>
                        Una persona no pot realitzar més de 2 cops un mateix
                        taller durant el quatrimestre.
                    </li>
                    <li>
                        No presentar-se a un taller sense justificar, suposará
                        la pèrdua del dret d'inscripció durant els primers 10
                        dies del proper període d'obertura a noves activitats.
                    </li>
                </ul>
            </Box>
        </Fragment>
    )
}
