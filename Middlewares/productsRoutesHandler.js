const productsModel = require('../models/productsModel');


const addProducts = async (req, res, next) => {
  try {
    await productsModel.create(req.body)
    res.status(200).json({'message': 'product was added successfully!'});
  } catch(error) {
    next(error);
  }
}

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await productsModel.find();
    res.status(200).send(allProducts);
  } catch(error) {
    next(error);
  }
}

const deleteProducts = async (req, res, next) => {
  try {
    const productToDelete = await productsModel.findOneAndDelete({produktnummer: req.params.produktnummer});
    productToDelete ? res.status(202).json({'message': `The product with the ID: ${req.params.produktnummer} was deleted successfully.`}) : res.status(404).json({'message': `The product with the ID: ${req.params.pruduktnummer} does not exist!`})
  } catch(error) {
    next(error);
  }
}

const updateProducts = async (req, res, next) => {
  try {
    productToUpdate = await productsModel.findOneAndUpdate({produktnummer: req.params.produktnummer}, req.body);
    productToUpdate ? res.status(200).json({'message': `The product with the ID: ${req.params.produktnummer} was updated successfully.`}) : res.status(404).json({'message': `The product with the ID: ${req.params.pruduktnummer} does not exist!`})
  } catch(error) {
    next(error);
  }
}

module.exports = { addProducts, getAllProducts, deleteProducts, updateProducts };
