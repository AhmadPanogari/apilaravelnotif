/**
 * This function imports all the routes and adds them
 * to the server provided.
 * @param {Restify Server Instance} server 
 */

const userRoutes = require('./user');
const productRoutes = require('./product');
const categoriesRoutes = require('./categories');
const membersRoutes = require('./members');
const qoutationRoutes = require('./quotations');
const contactsRoutes = require('./contacts');

const addRoutes = (server) => {
    // Add the user routes
    userRoutes.applyRoutes(server, '/users');
    productRoutes.applyRoutes(server, '/products');
    categoriesRoutes.applyRoutes(server,'/categories');
    membersRoutes.applyRoutes(server,'/members');
    qoutationRoutes.applyRoutes(server,'/quotations');
    contactsRoutes.applyRoutes(server,'/contacts');

}

module.exports = addRoutes;