/**
 * This file contains all the contacts routes
 */

const Router = require('restify-router').Router;
const { InternalServerError, BadRequestError } = require('restify-errors');
const validate = require('restify-api-validation');
const Joi = require('joi');
const _ = require('lodash');
const httpResponse = require('../helpers/httpResponse');

const routerInstance = new Router();
const contactsHandler = require('../handlers/Contacts');

routerInstance.post(
    '/post',
    validate(
        {
            body:{
                Subject : Joi.string().required(),
                MessageBody : Joi.string().required(),
                EmailAddress : Joi.string().email().required(),
                PostedDate : Joi.string().required()
            }
        }
    ),
    async(req,res,next)=>{
        const {Subject,MessageBody,EmailAddress,PostedDate} = req.body; 
        req.log.info("Add New Contact");
        try {
            let contacts = await contactsHandler.addContacts(Subject,MessageBody,EmailAddress,PostedDate);
            httpResponse.send(res,200,"Sucess",contacts);
        } catch (e) {
            httpResponse.send(res,409,"Error while insert data",ë);
        }
    }
)

module.exports = routerInstance;