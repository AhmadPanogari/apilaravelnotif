/**
 * This file contains all the notifications routes
 */

const Router = require('restify-router').Router;
const { InternalServerError, BadRequestError } = require('restify-errors');
const validate = require('restify-api-validation');
const Joi = require('joi');
const _ = require('lodash');
const httpResponse = require('../helpers/httpResponse');
const mailservice = require('../helpers/nodemailer');
const routerInstance = new Router();
const notificationsHandler = require('../handlers/AdminNotification');

routerInstance.post(
    '/send',
    async(req,res,next)=>{
        try {
            let send = await notificationsHandler.send(1);
            httpResponse.send(res,200,"Sucess",send);            
        } catch (e) {
            httpResponse.send(res,400,e,null);
        }
    }
)

routerInstance.post(
    '/resend/:Id',
    validate(
        {
            params:{
                Id : Joi.number().min(0).required()
            }
        }
    ),
    async(req,res,next)=>{
        let send = await notificationsHandler.resend(req.params.Id);
        httpResponse.send(res,200,"Sucess",send);
    }
)

routerInstance.post(
    '/resendall',
    async(req,res,next)=>{
        let send = await notificationsHandler.resendall();
        httpResponse.send(res,200,"Sucess",send);
    }
)

module.exports = routerInstance;