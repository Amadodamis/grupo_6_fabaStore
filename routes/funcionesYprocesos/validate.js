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
    check('Confpassword')
    .custom((valor, {req}) => { // Esto recibe las contraseñas del req.body y las compara, si no son iguales manda el mensaje al array de errores.
        if (valor  === req.body.password) {
          return true;
        } else {
          return false;
        }
      })
      .withMessage("Las contraseñas no coinciden"),

    check('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

    check('apellido')
    .notEmpty().withMessage('Debes completar el apellido').bail()
    .isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres'),
]
module.exports=validate;