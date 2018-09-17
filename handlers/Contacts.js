const Contacts = require('../db/models/Contacts');

const addContacts = async(Subject,MessageBody,EmailAddress,PostedDate)=>{
    
    let insert = await Contacts.query().insert({subject:Subject,messagebody:MessageBody,emailaddress:EmailAddress,posteddate:PostedDate});

    return insert;
};

module.exports = {
    addContacts,
}