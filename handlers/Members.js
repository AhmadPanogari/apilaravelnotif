const Members = require('../db/models/Members');

const getAllMembers =  async() => {
    return await Members.query();
};

const addMembers = async(ComplateName,UserName,Email,Password,CompanyName='',CompanyAddress='',PhoneCompany='',ProfileImageIds = 0,IsActives = true,IsAdmin = false)=>{
    let insert = await Members.query().insert({complatename:ComplateName,username:UserName,email:Email,password:Password,companyname:CompanyName,companyaddress:CompanyAddress,phonecompany:PhoneCompany,profileimageids:ProfileImageIds,isactives:IsActives,isadmin:IsAdmin});

    return insert;
}

const editMembers = async(Id,data)=>{
    try {
        let update = JSON.parse(data);    
        let edit = await Members.query().updateAndFetchById(Id,update);
        return edit;
    } catch (e) {
        return e;
    }
}

const deleteMemebers = async(Id)=>{
    let deleteById = await Members.query().deleteById(Id);

    return deleteById;
}

const profileMember = async(Id)=>{
    return await Members.query().where('Id','=',Id)
}

module.exports = {
    getAllMembers,
    addMembers,
    editMembers,
    deleteMemebers,
    profileMember
}