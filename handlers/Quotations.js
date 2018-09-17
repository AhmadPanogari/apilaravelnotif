const Quotations = require('../db/models/Quotations');

const getAllQuotations =  async() => {
    return await Quotations.query();
};

const addQuotations = async(ProductId,MemberId,QuotationDate,Subject,GeoTaggingLat,GeoTagiingLng,StatusQuotations)=>{
    let insert = await Quotations.query().insert({productids:ProductId,memberids:MemberId,quotationdate:QuotationDate,subject:Subject,geotagginglat:GeoTaggingLat,geotagiinglng:GeoTagiingLng,statusquotations:StatusQuotations});

    return insert;
}

const editQuotations = async(Id,data)=>{
    try {
        let update = JSON.parse(data);    
        let edit = await Quotations.query().updateAndFetchById(Id,update);
        return edit;
    } catch (e) {
        return e;
    }
}

const deleteQuotations = async(Id)=>{
    let deleteById = await Quotations.query().deleteById(Id);

    return deleteById;
}

module.exports = {
    getAllQuotations,
    addQuotations,
    editQuotations,
    deleteQuotations
}