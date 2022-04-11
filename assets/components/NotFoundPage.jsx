import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export function NotFoundPage() {
    return (
        <div>
            <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
            <h3>Page Not Found</h3>
        </div>
    )
}
