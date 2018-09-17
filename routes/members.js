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
const membersHandler = require('../handlers/Members');

routerInstance.get(
    '/list',
    async(req,res,next)=>{
        let membersData = await membersHandler.getAllMembers()
        res.json({code:200,message:"Sucess",data:membersData});   
    }
)

routerInstance.post(
    '/create',
    validate(
        {
            data : {
                ComplateName : Joi.string().required(),
                UserName : Joi.string().required(),
                Email : Joi.string().email().required(),
                Password : Joi.string().required()
            }
        }
    ),
    async(req,res,next)=>{
        const {ComplateName,UserName,Email,Password,CompanyName,CompanyAddress,PhoneCompany,ProfileImageId} = req.body; 
        req.log.info("Add New Memebrs");
        try {
            let member = await membersHandler.addMembers(ComplateName,UserName,Email,Password,CompanyName,CompanyAddress,PhoneCompany,ProfileImageId);
            httpResponse.send(res,200,"Sucess",member);
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
                let member = await membersHandler.editMembers(req.params.Id,req.body.data);
                req.log.info(member);
                httpResponse.send(res,200,"Sucess",member);
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
            let member = membersHandler.deleteMemebers(req.params.Id);
            req.log.info(member);
            httpResponse.send(res,200,"Sucess",member);
        } catch (e) {
            httpResponse.send(res,400,"Error while delete data",e);
        }
    }   
)

routerInstance.get(
    '/:Id/profiles',
    validate(
        {
            params:{
                Id : Joi.number().min(0).required()
            }
        }
    ),
    async(req,res,next)=>{
        let membersData = await membersHandler.profileMember(req.params.Id);
        res.json({code:200,message:"Sucess",data:membersData});   
    }
)

module.exports = routerInstance;