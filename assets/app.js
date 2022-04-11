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

import './styles/app.css';
import { Taller } from './components/Taller';
import { NotFoundPage} from './components/NotFoundPage'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/:idPlanificacion" element={<Taller/>} />
            {/*
            <Route path="/taller/:nombreTaller/plani/:idPlanificacion" element={<Taller />} />          
            */}
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
