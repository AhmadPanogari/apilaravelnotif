const Products = require('../db/models/Products');

const getAllProducts =  async() => {
    return await Products.query()
        .select(
        'products.title as ProductTitle','products.id as ProductId','products.*','categories.title as CategoriesTitle','categories.*')
        .joinRelation('categories')
        .joinRelation('imageassets');
};

const editProduct = async(Id)=>{
    let serach = Products.query()
    .select(
    'products.title as ProductTitle','products.id as ProductId','products.*','categories.title as CategoriesTitle','categories.*')
    .joinRelation('categories')
    .joinRelation('imageassets').where('products.Id','=',Id);
    return serach;
}

const addProducts = async(Title,ShortSpecs,LongSpecs,ProductsImageId,IsSlider,CategoryId)=>{
    
    let insert = await Products.query().insert({
        title:Title,shortspecs:ShortSpecs,longspecs:LongSpecs,productimageids:ProductsImageId,isslider:IsSlider,Categoryids:CategoryId
    });

    return insert;
};

const updateProduct = async(Id,data)=>{
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
    let products = await Products.query().select(
        'products.title as ProductTitle','products.id as ProductId','products.*','categories.title as CategoriesTitle','categories.*')
        .joinRelation('categories')
        .joinRelation('imageassets').where('categoryids','=',Id);
    return products;
}

const isslider = async()=>{
    let issliders = await Products.query().select(
        'products.title as ProductTitle','products.id as ProductId','products.*','categories.title as CategoriesTitle','categories.*')
        .joinRelation('categories')
        .joinRelation('imageassets').where('isslider','=',1);
    return issliders
}

const searchProduct = async(name)=>{
    let serach = Products.query()
    .select(
    'products.title as ProductTitle','products.id as ProductId','products.*','categories.title as CategoriesTitle','categories.*')
    .joinRelation('categories')
    .joinRelation('imageassets').where('products.Title','=',name);
    return serach;
}

const searchByCategory = async(name)=>{
    let serach = Products.query()
    .select(
    'products.title as ProductTitle','products.id as ProductId','products.*','categories.title as CategoriesTitle','categories.*')
    .joinRelation('categories')
    .joinRelation('imageassets').where('categories.Title','=',name);
    return serach;
}

const searchAnything = async(name)=>{
    let serach = Products.query()
    .select(
    'products.title as ProductTitle','products.id as ProductId','products.*','categories.title as CategoriesTitle','categories.*')
    .joinRelation('categories')
    .joinRelation('imageassets').where('products.Title','=',name).orWhere('categories.Title','=',name);
    return serach;
}

module.exports = {
    getAllProducts,
    addProducts,
    editProduct,
    updateProduct,
    deleteProduct,
    byCategories,
    isslider,
    searchProduct,
    searchByCategory,
    searchAnything
}