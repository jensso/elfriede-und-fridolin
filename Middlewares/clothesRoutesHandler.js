const clothesModel = require('../models/clothesModel');


const addClothes = async (req, res, next) => {
  try {
    await clothesModel.create(req.body)
    res.status(200).json({'message': 'clothes was added successfully!'});
  } catch(error) {
    next(error);
  }
}

const getAllClothes = async (req, res, next) => {
  try {
    const allClothes = await clothesModel.find();
    res.status(200).send(allClothes);
  } catch(error) {
    next(error);
  }
}

const deleteClothesByID = async (req, res, next) => {
  try {
    const clotheToDelete = await clothesModel.findOneAndDelete({produktnummer: req.params.produktnummer});
    clotheToDelete ? res.status(202).json({'message': `The clothes with the ID: ${req.params.produktnummer} was deleted successfully.`}) : res.status(404).json({'message': `The clothes with the ID: ${req.params.clothesnummer} does not exist!`})
  } catch(error) {
    next(error);
  }
}

const updateClothesByID = async (req, res, next) => {
  try {
    clothesToUpdate = await clothesModel.findOneAndUpdate({produktnummer: req.params.produktnummer}, req.body);
    clothesToUpdate ? res.status(202).json({'message': `The clothes with the ID: ${req.params.produktnummer} was updated successfully.`}) : res.status(404).json({'message': `The clothes with the ID: ${req.params.produktnummer} does not exist!`})
  } catch(error) {
    next(error);
  }
}

module.exports = { addClothes, getAllClothes, deleteClothesByID, updateClothesByID};
