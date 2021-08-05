const sql = require("../config/db");

exports.obtenerProductos = async (req, res) => {
  sql.query("SELECT * FROM productos", (err, data) => {
    if (err) {
      console.log("error: ", err);
    } else {
      res.send(data);
      console.log("productos: ", res);
    }
  });
};
exports.obtenerProductoID = async (req, res) => {
  sql.query(
    `SELECT * FROM productos WHERE id = ${req.params.id}`,
    (err, data) => {
      if (err) {
        console.log("error: ", err);
      } else {
        console.log(data);
        res.send(data);
      }
    }
  );
};

exports.crearProducto = async (req, res) => {
  const newP = {
    id: req.body.id,
    precio: req.body.precio,
    nombre: req.body.nombre,
    provedor: req.body.provedor,
  };

  sql.query("INSERT INTO productos SET ?", newP, (err, data) => {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("Producto  Creado");
      res.send(data);
    }
  });
};

exports.actualizarProducto = async (req, res) => {
  sql.query(
    "UPDATE productos SET nombre = ?, precio = ?, provedor = ? WHERE id = ?",
    [req.body.nombre, req.body.precio, req.body.provedor, req.params.id],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Producto actualzado");
        res.send(data);
      }
    }
  );
};

exports.eliminarProducto = async (req, res) => {
  sql.query(
    "DELETE FROM productos WHERE id = ?",
    req.params.id,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Se elimino correctamente')
      }
    }
  );
};
