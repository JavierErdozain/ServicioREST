
/*
 * GET users listing.
 */
 
var cnx = require('../mod/bd').conexion;

exports.RecuperarInfoRecepcion = function(req, res){
  var objConexion = new cnx;
  objConexion.query('SELECT * FROM InfoRecepciones where IdRecepcion = ' +  +'', function(error, resultados){
  	console.log("Error: "+ error);
    objConexion.end();
    console.log(resultados);
    res.json({resultado: resultados });
  });
};
