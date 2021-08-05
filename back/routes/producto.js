const express = require('express')
const router = express.Router();
const productos = require('../controllers/productosController');

router.get('/',productos.obtenerProductos);
router.get('/:id',productos.obtenerProductoID);
router.post('/',productos.crearProducto);
router.put('/:id',productos.actualizarProducto);
router.delete('/:id',productos.eliminarProducto);

module.exports = router