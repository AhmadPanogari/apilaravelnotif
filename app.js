const restify = require('restify');
const md5 = require('md5'); // MD5 Encrypt
const deviceType = "mobile";
const username = "admin";
const password = "test";
const resToken = md5(deviceType+username+password);
const addRoutes = require('./routes');
const passport = require('./auth');
/**
 * Function Check Token
 * @param {*} token 
 * @param {*} callback 
 */
function checkToken(token,res,callback){
    if(token != resToken){
      err = "InvalidCredentialsError";
      auth = false;
      res = res;
      callback(res,err,auth);
    }else{
      err = "";
      auth = true;
      res = res;
      callback(res,err,auth);
    };
};

/**
 * Function Authorization
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var basicAuth = function(req, res, next){                                       
    if (                                                                          
      !req.authorization||
      !req.authorization.scheme||
      !req.authorization.credentials                                         
    ){                   
        res.send(401,{code:401,message:"UnauthorizedError",data:null})                                        
        return next(false);                                                         
    }                                                                             
  
    checkToken(req.authorization.credentials,res, function(res,err,auth){        
      if (auth){
          return next();
        }                                                                           
      else {
          res.send(403,{code:403,message:err,data:null});
          return next(false);
        }                                                         
    });                                                                           
  };
/**
 * This adds parsers and routes to the server.
 * Basically bootstraps te app
 * @param {Restify Server Instance} server 
 */
module.exports = (server) => {
    // Add all the frigging parsers
    server.use(restify.plugins.acceptParser(server.acceptable));
    server.use(restify.plugins.queryParser());
    server.use(restify.plugins.bodyParser());
    server.use(restify.plugins.authorizationParser());
    server.use(passport.initialize());
    server.use(basicAuth);
    server.on('restifyError', function (req, res, err, next) {
        // handle all errors passed to next here, whether it's Error or NotFoundError or anything that is an instance of Error
        res.status(err.status || err.statusCode || 500);
        res.json(err.errors); 
    });

    // Add all the routes
    addRoutes(server);
};