/**
 * This file contains all the Quotations routes
 */

const Router = require('restify-router').Router;
const { InternalServerError, BadRequestError } = require('restify-errors');
const validate = require('restify-api-validation');
const Joi = require('joi');
const _ = require('lodash');
const httpResponse = require('../helpers/httpResponse');

const routerInstance = new Router();
const quotationsHandler = require('../handlers/Quotations');

routerInstance.get(
    '/list',
    async(req,res,next)=>{
        let quotationsData = await quotationsHandler.getAllQuotations()
        res.json({code:200,message:"Sucess",data:quotationsData});   
    }
)

routerInstance.post(
    '/create',
    validate(
        {
            data : {
                ProductId : Joi.string().required(), 
                MemberId : Joi.number().min(0).required(),
                QuotationDate : Joi.string().required(),
                Subject	: Joi.string().required(),
                GeoTaggingLat : Joi.string().required(),
                GeoTagiingLng : Joi.string(),
                StatusQuotation : Joi.string().required(),
            }
        }
    ),
    async(req,res,next)=>{
        const {ProductId,MemberId,QuotationDate,Subject,GeoTaggingLat,GeoTagiingLng,StatusQuotation} = req.body; 
        req.log.info("Add New Quotation");
        try {
            let qotation = await quotationsHandler.addQuotations(ProductId,MemberId,QuotationDate,Subject,GeoTaggingLat,GeoTagiingLng,StatusQuotation)
            httpResponse.send(res,200,"Sucess",qotation);
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
                let qotation = await quotationsHandler.editQuotations(req.params.Id,req.body.data);
                req.log.info(qotation);
                httpResponse.send(res,200,"Sucess",qotation);
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
            let qotation = quotationsHandler.deleteQuotations(req.params.Id);
            req.log.info(qotation);
            httpResponse.send(res,200,"Sucess",qotation);
        } catch (e) {
            httpResponse.send(res,400,"Error while delete data",e);
        }
    }   
)

routerInstance.post(
    '/:Id/post',
    validate(
        {
            params : {
                Id : Joi.number().min(0).required()
            },
            data : {
                ProductId : Joi.string().required(), 
                MemberId : Joi.number().min(0).required(),
                QuotationDate : Joi.string().required(),
                Subject	: Joi.string().required(),
                GeoTaggingLat : Joi.string().required(),
                GeoTagiingLng : Joi.string(),
                StatusQuotation : Joi.string().required(),
            }
        }
    ),
    async(req,res,next)=>{
        const {ProductId,QuotationDate,Subject,GeoTaggingLat,GeoTagiingLng,StatusQuotation} = req.body; 
        req.log.info("Add New Quotation By Member Id "+req.params.Id);
        try {
            let qotation = await quotationsHandler.addQuotations(ProductId,req.params.Id,QuotationDate,Subject,GeoTaggingLat,GeoTagiingLng,StatusQuotation)
            httpResponse.send(res,200,"Sucess",qotation);
        } catch (e) {
            httpResponse.send(res,409,"Error while insert data",e);
        }  
    }
)

module.exports = routerInstance;