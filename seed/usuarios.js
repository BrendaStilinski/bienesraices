import bcrypt from "bcrypt";

const usuarios = [
    {
        nombre:'Karla Baez Mariano',
        email:'karl@correo.com',
        password: bcrypt.hashSync('password' , 10),
        confirmado:1
    }
]

export default usuarios;