
/*
 * GET users listing.
 */
 
var cnx = require('../mod/bd').conexion;

exports.RecuperarInfoRecepcion = function(req, res){
  var objConexion = new cnx;
  objConexion.query('SELECT * FROM InfoRecepciones', function(error, resultados){
    objConexion.end();
    res.json({'resultado': resultados });
  });
};
