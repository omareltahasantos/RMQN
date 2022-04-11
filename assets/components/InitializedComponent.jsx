import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function InitializedComponent() {
    const navigate = useNavigate()

    useEffect(() => {
        window.location.href =
            'https://uniwebsidad.com/libros/symfony-2-3/capitulo-6/creando-rutas'
    }, [])

    return <div>InitializedComponent</div>
}
