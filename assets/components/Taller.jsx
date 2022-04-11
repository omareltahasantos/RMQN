import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { MenuAppBar } from './MenuAppBar'
import axios from 'axios'
import { BackPage } from './BackPage'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { InfoTaller } from './InfoTaller'
import { FormulariInscripcio } from './FormulariInscripcio'
import { FormulariUsuariRegitrat } from './FormulariUsuariRegitrat'
import { FormulariUsuariNou } from './FormulariUsuariNou'
import { CopyrightAmbCat } from './CopyrightAmbCat'
export function Taller() {
    const taller = useParams()
    const [tallerData, setTallerData] = useState(null)
    const [language, setLanguage] = useState(null)

    useEffect(() => {
        datosTaller()
    }, [])

    const currentLanguage = (language) => {
        console.log(language)
        setLanguage(language)
    }

    const datosTaller = () => {
        //Función para obtener datos del taller en base al id planificacion que hay en la URL
        axios
            .get('http://localhost:8000/api/datosTaller', {
                params: {
                    id_plani: taller.idPlanificacion,
                },
            })
            .then(function (response) {
                if (response) {
                    var fechaTaller = response.data[0].fecha_taller
                    fechaTaller = fechaTaller.split('/')
                    var fechaTallerParse =
                        fechaTaller[1] +
                        '.' +
                        fechaTaller[0] +
                        '.' +
                        fechaTaller[2]
                    setTallerData({
                        nombre_taller: response.data[0].nombre_taller,
                        nombre_usuarios_por_taller:
                            response.data[0].nombre_usuarios_por_taller,
                        fecha_taller: fechaTallerParse,
                        estado_planificacion:
                            response.data[0].estado_planificacion,
                    })
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <>
            <MenuAppBar currentLanguage={currentLanguage} />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl" disableGutters={false}>
                    {language === 'Catalan' ? (
                        <Box sx={{ bgcolor: '#FFFFFF', height: 'auto' }}>
                            <BackPage />
                            {tallerData !== null ? (
                                <Fragment>
                                    <InfoTaller tallerData={tallerData} />
                                    <FormulariInscripcio />
                                    <FormulariUsuariRegitrat
                                        tallerData={tallerData}
                                    />
                                    <FormulariUsuariNou />
                                    <CopyrightAmbCat />
                                </Fragment>
                            ) : (
                                ''
                            )}
                        </Box>
                    ) : (
                        ''
                    )}
                </Container>
            </React.Fragment>
        </>
    )
}
