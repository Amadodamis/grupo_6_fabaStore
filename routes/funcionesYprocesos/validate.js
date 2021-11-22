const { check } = require('express-validator');

const validate=[
    check('usuario')
    .notEmpty().withMessage('Debes completar el nombre de usuario').bail()
    .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres'),
    
    check("email")
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail().withMessage('Debes ingresar un email válido'),

    check('password')
    .notEmpty().withMessage('Debes completar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

    check('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

    check('apellido')
    .notEmpty().withMessage('Debes completar el apellido').bail()
    .isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres'),
]
module.exports=validate;