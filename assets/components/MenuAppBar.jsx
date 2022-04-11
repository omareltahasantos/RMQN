import * as React from 'react'
import { Fragment, useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
export function MenuAppBar({ currentLanguage }) {
    const [auth, setAuth] = React.useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [language, setLanguage] = useState('Catalan')

    useEffect(() => {
        currentLanguage(language)
    }, [])

    const handleChange = (event) => {
        setAuth(event.target.checked)
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLanguage = (language) => {
        setLanguage(language)
        handleClose()
        currentLanguage(language)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                style={{
                    background: '#ffffff',
                    borderBottom: '1px solid #ffffff',
                    shadow: 'none',
                    color: 'black',
                }}
            >
                <Toolbar>
                    <img
                        src="/images/composer.png"
                        width="220px"
                        height="30px"
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <div>
                        {language}
                        <IconButton
                            size="medium"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            style={{ marginLeft: '10px' }}
                        >
                            <ArrowDropDownIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleLanguage('Catalan')}>
                                Catalan
                            </MenuItem>
                            <MenuItem onClick={() => handleLanguage('Español')}>
                                Español
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
