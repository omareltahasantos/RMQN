import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
export function FormulariUsuariRegitrat({ tallerData }) {
    const [nif, setNIF] = useState('')
    const [password, setPassword] = useState('')

    const inscripcio = (e) => {
        e.preventDefault()

        ///Comprobar que al darle al botón se inscriban si hay plazas o por lo contraria que se pongan en lista de espera
        if (tallerData.estado_planificacion === 0) {
            //api para inscribirse
            console.log('Obert')
        } else if (tallerData.estado_planificacion === 1) {
            //api para meterlo en lista de espera
            console.log(`Llista d'espera`)
        }
    }

    const userIsCreated = (nif, password) => {
        //Funcion para checkear si se ha inscrito más de dos veces en este taller en el quatrimestre, comprobarlo con el id planificación que le paso por url
        //También mirar que no se haya inscrito en 8 talleres en el ultimo mes
        console.log(`NIF: ${nif} y contraseña: ${password}`)
        //Antes de nada, el botón se debe deshabilitar para todos
        //1. Consulta para scar id_usuario con el nif y contraseña que ponga el usuario
    }

    return (
        <Fragment>
            <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{
                    color: '#616161',
                    marginTop: '20px',
                    fontWeight: '700',
                }}
            >
                Usuari/a registrat/da
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
                variant="body1"
                paragraph={true}
                gutterBottom
                style={{
                    color: '#616161',
                    marginTop: '20px',
                }}
            >
                Si ets un usuari/a registrat a l'aplicatiu, omple les teves
                dades d'identificació i fes clic al botó per inscriure't al
                TALLER
            </Typography>
            <Box component="form" onSubmit={inscripcio} sx={{ mt: 1 }}>
                <Grid container spacing={0}>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            paragraph={true}
                            textAlign="center"
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            NIF:
                        </Typography>
                    </Grid>
                    <Grid item md={3} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el teu NIF"
                            variant="standard"
                            fullWidth
                            value={nif}
                            onChange={(e) => {
                                setNIF(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            paragraph={true}
                            gutterBottom
                            textAlign="center"
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Contrasenya:
                        </Typography>
                    </Grid>
                    <Grid item md={3} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix la teva contrasenya"
                            variant="standard"
                            fullWidth
                            value={password}
                            onChange={(e) => {
                                userIsCreated(nif, e.target.value)
                                setPassword(e.target.value)
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        md={1}
                        style={{ paddingTop: '10px', paddingBottom: '30px' }}
                    >
                        {tallerData.estado_planificacion === 0 ? (
                            <Button
                                variant="contained"
                                type="submit"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    color: '#616161',
                                    borderRadius: '30px',
                                    borderColor: '#616161',
                                    boxShadow: '0,0,0,0',
                                    marginLeft: '30px',
                                    paddingLeft: '50px',
                                    paddingRight: '50px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Inscripció
                            </Button>
                        ) : tallerData.estado_planificacion === 1 ? (
                            <Button
                                variant="contained"
                                type="submit"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    color: '#616161',
                                    borderRadius: '30px',
                                    borderColor: '#616161',
                                    boxShadow: '0,0,0,0',
                                    marginLeft: '30px',
                                    paddingLeft: '50px',
                                    paddingRight: '50px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Llista d'espera
                            </Button>
                        ) : tallerData.estado_planificacion !== 0 &&
                          tallerData.estado_planificacion !== 1 ? (
                            <Button
                                disabled={true}
                                variant="contained"
                                type="submit"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    color: '#616161',
                                    borderRadius: '30px',
                                    borderColor: '#616161',
                                    boxShadow: '0,0,0,0',
                                    marginLeft: '30px',
                                    paddingLeft: '50px',
                                    paddingRight: '50px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Tancat/anul·lat
                            </Button>
                        ) : (
                            ''
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}
