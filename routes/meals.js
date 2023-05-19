const express = require('express');
const router = express.Router()
const Meal = require('../models/meal');

const { fetchFoodObjectDataAbridged } = require('../controllers/foodController');
const { createMeal, showMeal, addFoodToMeal, deleteMeal, removeFoodFromMeal, showMealFood } = require('../controllers/mealController');


router.get('/', (req, res) => {
    res.send('in meals');
})

//new meal creation page
router.get('/new', async (req, res) => {

    res.render('meals/new', {meal: new Meal()});
})

//create meal
router.post('/', createMeal, async (req, res) => {



})

//add food to meal
router.post('/:mealId', fetchFoodObjectDataAbridged, addFoodToMeal, async (req, res) => {


})

//remove food from meal
router.post('/:mealId/removeFood/:fdcId', removeFoodFromMeal, async (req, res) => {
    
   

})

//show meal
router.get('/:mealId', showMeal, async (req, res) => {



})

//edit meal
router.get('/edit/:id', async (req, res, next) => {
    // req.meal = await Meal.findById(req.params.id);
    const meal = await Meal.findById(req.params.id);
    res.render('meals/edit', {meal: meal});

})

//implement edit
router.put('/:id', async (req, res, next) =>  {
    let meal = await Meal.findById(req.params.id);
    meal.name = req.body.name;
    meal.description = req.body.description

    try {
        meal = await meal.save()
        res.redirect(`/meals/${meal.id}`)
        // res.redirect(`meals/%{meal.slug}`)

    } catch (err) {
        console.log(err);
        res.render(`meals/${path}`, { meal: meal })
        // console.log()
    }

})

//delete
router.delete('/:mealId', deleteMeal, async (req, res) => {
    // await Meal.findByIdAndDelete(req.params.mealId);
    // res.redirect('/');
    res.redirect('/');
})


router.post('/sortNutrients', async (req, res) => {
    
})


//showMealFood
router.get('/:mealId/foods/:foodId', showMealFood, async (req, res) => {
 
})


module.exports = router