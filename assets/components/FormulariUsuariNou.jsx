import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
export function FormulariUsuariNou() {
    const [nom, setNom] = useState('')
    const [cognoms, setCognoms] = useState('')
    const [sexe, setSexe] = useState('')
    const [anyNaixement, setAnyNaixement] = useState(null)
    const [via, setVia] = useState('')
    const [adreça, setAdreça] = useState('')
    const [num, setNum] = useState('')
    const [pis, setPis] = useState('')
    const [poblacio, setPoblacio] = useState('')
    const [cp, setCP] = useState('')
    const [telefon, setTelefon] = useState('')
    const [mobil, setMobil] = useState('')
    const [nif, setNIF] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const tipus_sexe = [
        {
            id: 1,
            value: 'Home',
        },
        { id: 2, value: 'Dona' },
    ]

    const tipus_via = [
        {
            id: 1,
            value: 'C/',
        },
        {
            id: 2,
            value: 'Pl/',
        },
        {
            id: 3,
            value: 'Av/',
        },
        {
            id: 4,
            value: 'Pg/',
        },
        {
            id: 5,
            value: 'Ptge/',
        },
        {
            id: 6,
            value: 'Rbla/',
        },
        {
            id: 7,
            value: 'Ctra/',
        },
        {
            id: 8,
            value: 'Camí/',
        },
        {
            id: 9,
            value: 'Rda/',
        },
        {
            id: 10,
            value: 'Trav/',
        },
    ]

    const InscripcionNuevoUsuario = (e) => {
        e.preventDefault()
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
                Si es la primera vegada que ets vols inscriure a un dels nostres
                tallers i no disposes de les teves dades d'identificació. Omple
                el següent formulari per donar-te d'alta al TALLER
            </Typography>
            <Box
                component="form"
                onSubmit={InscripcionNuevoUsuario}
                sx={{ mt: 1 }}
            >
                <Grid
                    container
                    spacing={0}
                    style={{ paddingBottom: '30px', paddingTop: '20px' }}
                >
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Nom:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el teu nom"
                            variant="standard"
                            fullWidth
                            value={nom}
                            onChange={(e) => {
                                setNom(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Cognoms:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el teus cognoms"
                            variant="standard"
                            fullWidth
                            value={cognoms}
                            onChange={(e) => {
                                setCognoms(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Sexe:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Selecciona el teu sexe"
                            variant="standard"
                            select
                            fullWidth
                            value={sexe}
                            onChange={(e) => {
                                setSexe(e.target.value)
                            }}
                        >
                            {tipus_sexe.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Any naixement:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={1}
                        style={{ paddingLeft: '10px', paddingRight: '40px' }}
                    >
                        <TextField
                            id="standard-basic"
                            required
                            type="number"
                            label="Any"
                            variant="standard"
                            fullWidth
                            value={anyNaixement}
                            onChange={(e) => {
                                setAnyNaixement(e.target.value)
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0} style={{ paddingBottom: '30px' }}>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Via:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Selecciona la teva via"
                            variant="standard"
                            select
                            fullWidth
                            value={via}
                            onChange={(e) => {
                                setVia(e.target.value)
                            }}
                        >
                            {tipus_via.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Adreça:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix la teva adreça"
                            variant="standard"
                            fullWidth
                            value={adreça}
                            onChange={(e) => {
                                setAdreça(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Num via:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el num via"
                            variant="standard"
                            fullWidth
                            value={num}
                            onChange={(e) => {
                                setNum(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Pis:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        style={{ paddingLeft: '10px', paddingRight: '40px' }}
                    >
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el pis"
                            variant="standard"
                            fullWidth
                            value={pis}
                            onChange={(e) => {
                                setPis(e.target.value)
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0} style={{ paddingBottom: '30px' }}>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Població:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix la teva població"
                            variant="standard"
                            fullWidth
                            value={poblacio}
                            onChange={(e) => {
                                setPoblacio(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            CP:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el teu cp"
                            variant="standard"
                            fullWidth
                            value={cp}
                            onChange={(e) => {
                                setCP(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Tèlf:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el teu tèlf"
                            variant="standard"
                            fullWidth
                            value={telefon}
                            onChange={(e) => {
                                setTelefon(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Mòbil:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        style={{ paddingLeft: '10px', paddingRight: '40px' }}
                    >
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el teu mòbil"
                            variant="standard"
                            fullWidth
                            value={mobil}
                            onChange={(e) => {
                                setMobil(e.target.value)
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0} style={{ paddingBottom: '30px' }}>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            NIF:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix la teu nif"
                            variant="standard"
                            fullWidth
                            value={nif}
                            onChange={(e) => {
                                setNIF(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Email:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix el teu email"
                            variant="standard"
                            fullWidth
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Contrasenya:
                        </Typography>
                    </Grid>
                    <Grid item md={2} style={{ paddingLeft: '10px' }}>
                        <TextField
                            id="standard-basic"
                            required
                            label="Introdueix la teva contrasenya"
                            variant="standard"
                            fullWidth
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item md={1} style={{ paddingLeft: '10px' }}>
                        <Typography
                            variant="body1"
                            type="password"
                            textAlign="center"
                            paragraph={true}
                            gutterBottom
                            style={{
                                color: '#616161',
                                marginTop: '20px',
                            }}
                        >
                            Repetir contrasenya:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={2}
                        style={{ paddingLeft: '10px', paddingRight: '40px' }}
                    >
                        <TextField
                            id="standard-basic"
                            required
                            type="password"
                            label="Introdueix la mateixa contrasenya"
                            variant="standard"
                            fullWidth
                            value={passwordRepeat}
                            onChange={(e) => {
                                setPasswordRepeat(e.target.value)
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ paddingTop: '10px' }}
                >
                    <Grid
                        item
                        md={1}
                        style={{ paddingTop: '10px', paddingBottom: '30px' }}
                    >
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
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}
