/**
 * This file contains all the categories routes
 */

const Router = require('restify-router').Router;
const { InternalServerError, BadRequestError } = require('restify-errors');
const validate = require('restify-api-validation');
const Joi = require('joi');
const _ = require('lodash');
const httpResponse = require('../helpers/httpResponse');

const routerInstance = new Router();
const categoriesHandler = require('../handlers/Categories');

routerInstance.get(
    '/list',
    async(req,res,next)=>{
        let categoriesData = await categoriesHandler.getAllCategories();
        res.json({code:200,message:"Sucess",data:categoriesData});
    }   
)

routerInstance.post(
    '/create',
    validate(
        {
            body:{
                Title : Joi.string().required(),
                Description : Joi.string().required(),
                CategoryImageId : Joi.number().min(0).required()
            }
        }
    ),
    async(req,res,next)=>{
        const {Title,Description,CategoryImageId} = req.body; 
        req.log.info("Add New Categories");
        try {
            let categories = await categoriesHandler.addCategories(Title,Description,CategoryImageId);
            httpResponse.send(res,200,"Sucess",categories);
        } catch (e) {
            httpResponse.send(res,409,"Error while insert data",ë);
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
                let categories = await categoriesHandler.editCategories(req.params.Id,req.body.data);
                req.log.info(categories);
                httpResponse.send(res,200,"Sucess",categories);
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
            let categories = categoriesHandler.deleteCategories(req.params.Id);
            req.log.info(categories);
            httpResponse.send(res,200,"Sucess",categories);
        } catch (e) {
            httpResponse.send(res,400,"Error while delete data",e);
        }
    }
)

module.exports = routerInstance;