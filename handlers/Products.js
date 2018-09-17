const Products = require('../db/models/Products');

const getAllProducts =  async() => {
    return await Products.query();
};

const addProducts = async(Title,ShortSpecs,LongSpecs,ProductsImageId,IsSlider,CategoryId)=>{
    
    let insert = await Products.query().insert({
        title:Title,shortspecs:ShortSpecs,longspecs:LongSpecs,productimageids:ProductsImageId,isslider:IsSlider,Categoryids:CategoryId
    });

    return insert;
};

const editProduct = async(Id,data)=>{
    try {
        let update = JSON.parse(data);    
        let edit = await Products.query().updateAndFetchById(Id,update);
        return edit;
    } catch (e) {
        return e;
    }
}

const deleteProduct = async(Id)=>{

    let deleteById = await Products.query().deleteById(Id);

    return deleteById;
}

const byCategories = async(Id)=>{
    let byIdCategories = await Products.query().where('Products.CategoryIds','=',Id);
    return byIdCategories;
}

const isslider = async()=>{
    let issliders = await Products.query().where('id','=',2);

    return issliders
}

module.exports = {
    getAllProducts,
    addProducts,
    editProduct,
    deleteProduct,
    byCategories,
    isslider
}