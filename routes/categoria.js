const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT
} = require('../middlewares');

const {
    categoriaPost,
    categoriaGet
} = require('../controllers/categoria');

const router = Router();

//Guardar categoria
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], categoriaPost);

//Listar categoras
router.get('/',[validarJWT], categoriaGet);
module.exports = router;