import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.scss'

const HeaderComp = () => (
    <div className="header-class">
        <div className="logo">
        </div>

        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/reports">Reportes</NavLink></li>
            <li><NavLink to="/site">Diseño de Sitio</NavLink></li>
            <li><NavLink to="/student">Repositorios</NavLink></li>
        </ul>
    </div>
)

export default HeaderComp