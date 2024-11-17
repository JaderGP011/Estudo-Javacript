function validarEmail(email) {
    return email?.toString().includes('@' && email?.toString().includes('.')); 
}

function validarSenha(senha) {    
    return senha?.toString().length > 6; 
}

export {
    validarEmail,
    validarSenha
}