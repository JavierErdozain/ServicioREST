
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
  var paramId = req.params.ultimo;
  var objConexion = new cnx;
  var sSql = "SELECT distinct ";
      sSql +="IdRecepcion, fec_recepcion, des_albaran ";
      sSql +="FROM InfoRecepciones ";
      sSql +="WHERE IdRecepcion > CAST(? AS UNSIGNED) ";
      sSql +="order by IdRecepcion ASC ";
      sSql +="LIMIT 10;";
  objConexion.query(sSql, paramId, function(error, resultados){
    console.log(error);
    objConexion.end();
    res.json(resultados);
  });
};
