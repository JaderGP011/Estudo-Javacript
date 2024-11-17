import React, { Children } from 'react';
import Routering from './Routes';
import UserServices from '../Services/userServices';

const userService = new UserServices();

const ProtectedRoutes = ({children}) => {
    
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : <Routering/>
}

export default ProtectedRoutes;