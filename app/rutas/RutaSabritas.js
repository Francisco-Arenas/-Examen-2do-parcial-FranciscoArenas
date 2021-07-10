const { Router } = require('express');
const router = Router();
const ControladorSabritas = require('../controlador/ControladorSabritas');

router.get('/',ControladorSabritas.index2 )
       .post('/',ControladorSabritas.agregar2)
       .get('/:key/:value',ControladorSabritas.buscar2, ControladorSabritas.mostrar2)
       .put('/:key/:value',ControladorSabritas.buscar2,ControladorSabritas.actualizar2)
       .delete('/:key/:value',ControladorSabritas.buscar2,ControladorSabritas.eliminar2);

module.exports=router;