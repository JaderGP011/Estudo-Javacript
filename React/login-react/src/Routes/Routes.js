import React from 'react';
import Login from '../Pages/Login/Login';
import Cadastro from '../Components/Cadastro/Cadastro';
import ProtectedRoutes from './ProtectedRoutes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
    return (
        <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/Home" element={
            <ProtectedRoutes>
                <h1>oi pagina inicial</h1>

            </ProtectedRoutes>
        } />
      </Routes>
    </Router>
    )
}

export default Routering;