

const validaCampos = require('../middlewares/validar-campos');
const validaRoles = require('../middlewares/validar-roles');

module.exports = {
    ...validaCampos,
    ...validaRoles,
}