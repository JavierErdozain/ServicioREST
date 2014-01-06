
/*
 * GET users listing.
 */
 
var cnx = require('../mod/bd').conexion;


exports.RecuperarInfoRecepcion = function(req, res){
  var paramId = req.params.id;
  var objConexion = new cnx;
  objConexion.query('SELECT distinct IdRecepcion, fec_recepcion, des_albaran FROM InfoRecepciones where IdRecepcion=?',paramId, function(error, resultados){
    objConexion.end();
    res.json(resultados);
  });
};


exports.RecuperarListadoRecepciones = function(req, res){
  var paramId = req.params.pagina;
  var objConexion = new cnx;
  objConexion.query('SELECT top ? distinct IdRecepcion, fec_recepcion, des_albaran FROM InfoRecepciones;',pagina, function(error, resultados){
    objConexion.end();
    res.json(resultados);
  });
};
