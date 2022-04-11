import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'

export function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 250, maxHeight: 200 }}>
            <CardContent style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    style={{ textAlign: 'center' }}
                >
                    Tallers y acivitats
                </Typography>
                <Divider variant="fullWidth" />
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt=""
                    style={{ backgroundColor: '#29b6f6' }}
                ></CardMedia>
            </CardContent>
        </Card>
    )
}
