import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './NavComponent.css'

export default function NavComponent() {

    const location = useLocation()

    function setActiveMenuItem(path) {
        return location.pathname === path ? 'Menu-item-active' : 'Menu-item'
    }

    return (

        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#f9f9fb' }}>
            <Toolbar sx={{ justifyContent: 'center', gap: 6 }}>
                <Link
                    to="/"
                    className={setActiveMenuItem("/")}
                >
                    início
                </Link>
                <Link
                    to="/cadastro"
                    className={setActiveMenuItem("/cadastro")}
                >
                    cadastrar livro
                </Link>
                <Link
                    to="/meus-livros"
                    className={setActiveMenuItem("/meus-livros")}
                >
                    meus livros
                </Link>
            </Toolbar>
        </AppBar>
    );
}
