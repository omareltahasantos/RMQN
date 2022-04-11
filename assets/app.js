import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
    Switch,
    useNavigate,
    NavLink,
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import './styles/app.css';
import { Taller } from './components/Taller';
import { InitializedComponent } from './components/InitializedComponent';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<InitializedComponent />} />
            <Route path="/taller" element={<InitializedComponent />} />
            <Route path="/taller/:nombreTaller" element={<InitializedComponent />} />
            <Route path="/taller/:nombreTaller/plani" element={<InitializedComponent />} />
            <Route path="/taller/:nombreTaller/plani/:idPlanificacion" element={<Taller />} />

            
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
