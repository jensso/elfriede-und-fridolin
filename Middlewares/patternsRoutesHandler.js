const patternsModel = require('../models/patternsModel');


const addPatterns = async (req, res, next) => {
  try {
    await patternsModel.create(req.body)
    res.status(200).json({'message': 'pattern was added successfully!'});
  } catch(error) {
    next(error);
  }
}

const getAllPatterns = async (req, res, next) => {
  try {
    const allPatterns = await patternsModel.find();
    res.status(200).json(allPatterns);
  } catch(error) {
    next(error);
  }
}

const deletePatterns = async (req, res, next) => {
  try {
    const patternToDelete = await patternsModel.findOneAndDelete({produktnummer: req.params.patternnummer});
    patternToDelete ? res.status(202).json({'message': `The pattern with the ID: ${req.params.patternnummer} was deleted successfully.`}) : res.status(404).json({'message': `The pattern with the ID: ${req.params.patternnummer} does not exist!`})
  } catch(error) {
    next(error);
  }
}

const updatePatterns = async (req, res, next) => {
  try {
    patternToUpdate = await patternsModel.findOneAndUpdate({produktnummer: req.params.patternnummer}, req.body);
    patternToUpdate ? res.status(200).json({'message': `The pattern with the ID: ${req.params.patternnummer} was updated successfully.`}) : res.status(404).json({'message': `The pattern with the ID: ${req.params.patternnummer} does not exist!`})
  } catch(error) {
    next(error);
  }
}

module.exports = { addPatterns, getAllPatterns, deletePatterns, updatePatterns };
