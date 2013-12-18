
/*
 * GET users listing.
 */
 
var cnx = require('../mod/bd').conexion;

exports.RecuperarInfoRecepcion = function(id, req){
  var objConexion = new cnx;
  objConexion.query('SELECT * FROM InfoRecepciones where IdRecepcion = ' +  +'', function(error, resultados){
    objConexion.end();
    console.log(resultados);
    res.json({resultado: resultados });
  });
};
