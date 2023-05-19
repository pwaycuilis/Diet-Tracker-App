const express = require('express');

const { sortNutrientsButton } = require('../controllers/nutrientController');

const router = express.Router()

router.post('/sort', sortNutrientsButton, async (req, res) => {

});

module.exports = router