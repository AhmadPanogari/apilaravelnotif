/**
 * This file contains all the categories search
 */

const Router = require('restify-router').Router;
const { InternalServerError, BadRequestError } = require('restify-errors');
const validate = require('restify-api-validation');
const Joi = require('joi');
const _ = require('lodash');
const httpResponse = require('../helpers/httpResponse');

const routerInstance = new Router();
const productsHandler = require('../handlers/Products');

routerInstance.post(
    '/by_product',
    validate(
        {
            Body:{
                search: Joi.string().required()
            }
        }
    ),
    async(req,res,next)=>{
        let products = await productsHandler.searchProduct(req.body.search)
        res.json({code:200,message:"Sucess",data:products});
    }   
)

routerInstance.post(
    '/by_categories',
    validate(
        {
            Body:{
                search: Joi.string().required()
            }
        }
    ),
    async(req,res,next)=>{
        let products = await productsHandler.searchByCategory(req.body.search);
        res.json({code:200,message:"Sucess",data:products});
    }
)

routerInstance.post(
    '/by_anything',
    validate(
        {
            Body:{
                search: Joi.string().required()
            }
        }
    ),
    async(req,res,next)=>{
        let products = await productsHandler.searchAnything(req.body.search)
        res.json({code:200,message:"Sucess",data:products});
    }
)

module.exports = routerInstance;