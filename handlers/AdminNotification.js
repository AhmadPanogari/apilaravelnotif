const AdminNotification = require('../db/models/AdminNotifications');
const Quotations = require('../handlers/Quotations');
const mailService = require('../helpers/nodemailer');

const tempalate = "";

const send = async(Id)=>{
    //Get Quotation
    let quotations = await Quotations.getByIdQuotations(Id);
    let dataqout = JSON.stringify(quotations);
    //Send to all AdminNotification Account
    AdminNotification.query().where('Isactives','=',1).then((data)=>{
        Object.keys(data).forEach(function(key){
            console.log(data[key].EmailAddress);
            let sendmail = mailService.send(data[key].EmailAddress,"Quotations Test",dataqout);
            return sendmail;
        });
    })
}

const resend = async(Id)=>{
    //Get Quotation
    let quotations = await Quotations.getByIdQuotations(Id);
    let dataqout = JSON.stringify(quotations);
    //Send to all AdminNotification Account
    AdminNotification.query().then((data)=>{
        Object.keys(data).forEach(function(key){
            console.log(data[key].EmailAddress);
            let sendmail = mailService.send(data[key].EmailAddress,"Quotations Test",dataqout);
            return sendmail;
        });
    })
}

const resendall = async()=>{
    //Get Quotation
    await Quotations.getOpenQuotations().then((resQuotations)=>{
        Object.keys(resQuotations).forEach(function(key){
            let dataqout = JSON.stringify(resQuotations[key]);
            //Send to all AdminNotification Account
            AdminNotification.query().where('Isactives','=',1).then((data)=>{
                Object.keys(data).forEach(function(key){
                    console.log(data[key].EmailAddress);
                    let sendmail = mailService.send(data[key].EmailAddress,"Quotations Test",dataqout);
                    return sendmail;
                });
            })
        });
    });
}

module.exports ={
    send,
    resend,
    resendall
}