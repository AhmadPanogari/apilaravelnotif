/**
 * This file contains all the product routes
 */

const Router = require('restify-router').Router;
const { InternalServerError, BadRequestError } = require('restify-errors');
const validate = require('restify-api-validation');
const Joi = require('joi');
const _ = require('lodash');
const httpResponse = require('../helpers/httpResponse');

const routerInstance = new Router();
const productHandler = require('../handlers/Products');


routerInstance.get('/list',
async(req,res,next)=>{
    let productData = await productHandler.getAllProducts();
    res.json({code:200,message:"Sucess",data:productData});
});

routerInstance.get('/list/:Id',
    validate({
        body : {
            Id : Joi.number().min(0).required(),
        }
    }),async(req,res,next)=>{
        try {
            let product = await productHandler.editProduct(req.params.Id);
            httpResponse.send(res,200,"Sucess",product);
        } catch (e) {
            httpResponse.send(res,400,"Error while delete data",e);
        }
    }
);

routerInstance.post(
    '/create',
    validate({
        body : {
            Title : Joi.string().required(),
            ShortSpaces : Joi.string().required(),
            LongSpaces : Joi.string().required(),
            ProductImageId : Joi.number().min(0).required(),
            IsSlider : Joi.bool().required(),
            CategoryId : Joi.number().min(0).required()
        }
    }),
    async(req,res,next)=>{
        const {Title,ShortSpaces,LongSpaces,ProductImageId,IsSlider,CategoryId} = req.body; 
        req.log.info("Add New Product");
        try {
            let product = await productHandler.addProducts(Title,ShortSpaces,LongSpaces,ProductImageId,IsSlider,CategoryId);
            httpResponse.send(res,200,"Sucess",product);
        } catch (e) {
            httpResponse.send(res,409,"Error while insert data",e);
        }
    }    
)

routerInstance.post(
    '/edit/:Id',
    validate(
        {
            params:{
                Id : Joi.number().min(0).required()
            },
            body:{
                data : Joi.string().required()
            }
        }
    ),
    async(req,res,next)=>{
        if(req.params.Id == ''){
            httpResponse.send(res,400,"Id is Required",null);
        }else{
            try {
                let product = await productHandler.updateProducts(req.params.Id,req.body.data);
                req.log.info(product);
                httpResponse.send(res,200,"Sucess",product);
            } catch (e) {
                httpResponse.send(res,400,"Error while update data",e);
            }
        }
    }
)

routerInstance.post(
    '/delete/:Id',
    validate(
        {
            params:{
                Id : Joi.number().min(0).required()
            }
        }
    ),
    async(req,res,next)=>{
        try {
            let product = await productHandler.deleteProduct(req.params.Id);
            req.log.info(product);
            httpResponse.send(res,200,"Sucess",product);
        } catch (e) {
            httpResponse.send(res,400,"Error while delete data",e);
        }
    }
)

routerInstance.get(
    '/bycategories/:Id',
    validate(
        {
            params:{
                Id : Joi.number().min(0).required()
            }
        }
    ),
    async(req,res,next)=>{
        try {
            let product = await productHandler.byCategories(req.params.Id);
            req.log.info(product);
            httpResponse.send(res,200,"Sucess",product);
        } catch (e) {
            httpResponse.send(res,400,"Error while delete data",e);
        }
    }
)

routerInstance.get(
    '/issliders',
    async(req,res,next)=>{
        try {
            let product = await productHandler.isslider();
            req.log.info(product);
            httpResponse.send(res,200,"Sucess",product);
        } catch (e) {
            httpResponse.send(res,400,"Error while delete data",e);
        }
    }
)

routerInstance.post(
    '/search',
    validate(
        {
            Body:{
                name : Joi.string().required()
            }
        }
    ),
    async(req,res,next)=>{
        try {
            let product = await productHandler.searchProduct(req.body.name)
            req.log.info(product);
            httpResponse.send(res,200,"Sucess",product);
        } catch (e) {
            httpResponse.send(res,400,"Error while getting data",e);
        }
    }
)

module.exports = routerInstance;