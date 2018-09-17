const Categories = require('../db/models/Categories');

const getAllCategories =  async() => {
    return await Categories.query();
};

const addCategories = async(Title,Description,CategoryImageIds)=>{
    let insert = await Categories.query().insert({title:Title,description:Description,categoryimageids:CategoryImageIds});

    return insert;
}

const editCategories = async(Id,data)=>{
    try {
        let update = JSON.parse(data);    
        let edit = await Categories.query().updateAndFetchById(Id,update);
        return edit;
    } catch (e) {
        return e;
    }
}

const deleteCategories = async(Id)=>{
    let deleteById = await Categories.query().deleteById(Id);

    return deleteById;
}

module.exports = {
    getAllCategories,
    addCategories,
    editCategories,
    deleteCategories
}