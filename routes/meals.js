const express = require('express');
const router = express.Router()
const Meal = require('../models/meal');

const { fetchFoodObjectDataAbridged } = require('../controllers/foodController');
const { getMealObject, createMeal, showMeal, addFoodToMeal, deleteMeal, removeFoodFromMeal } = require('../controllers/mealController');
const { db_deleteMeal } = require('../middleware/manageDatabase');

router.get('/', (req, res) => {
    res.send('in meals');
})

//new meal creation page
router.get('/new', async (req, res) => {

    res.render('meals/new', {meal: new Meal()});
})

//create meal
router.post('/', createMeal, async (req, res) => {

    // let meal = new Meal();
    // meal.name = req.body.name;
    // meal.description = req.body.description;

    // try {
    //     meal = await meal.save();
    //     res.redirect(`meals/${meal.id}`);
    // } catch (err) {
    //     console.log(err);
    //     res.render(`meals/${path}`, { meal: meal });
    // }

})

//add food to meal
router.post('/:mealId', fetchFoodObjectDataAbridged, addFoodToMeal, async (req, res) => {

    let mealId = req.body.mealId ? req.body.mealId : 0;

    // console.log({mealId});
    // console.log('in post add to meal');
})

//remove food from meal
router.post('/:mealId/removeFood/:fdcId', removeFoodFromMeal, async (req, res) => {
    
    // console.log(req.body.mealId);
   

})

//show meal
router.get('/:mealId', showMeal, async (req, res) => {
    // const meal = await getMealObject(req.params.mealId);

    // res.render('meals/show', {meal: meal});


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


//showFood
router.get('/:mealId/foods/:foodId', async (req, res) => {
    let meal = await Meal.findById(req.params.mealId)
    let food = meal.foods.find(foodObj => foodObj.id === req.params.foodId)

    // console.log('in router.get showfood, food: ', food.fdcId);
    // console.log({food});
    let direction = "";
    res.render('meals/showFood', { food: food, meal: meal, direction: direction})
})


module.exports = router