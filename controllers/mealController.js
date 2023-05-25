const Meal = require('../models/meal')
const Food = require('../models/food')

// const { createFoodObject } = require('../controllers/foodController');
const { createDbFoodObject, db_deleteMealObject } = require('../middleware/manageDatabase');
const { processNutrients } = require('../controllers/nutrientController');
const { getDailyValues, addNutrientCategoriesToNutrientsObj, addDailyValuePercentToMealObj, addDailyValuePercentToFoodObj } = require('../middleware/helpers');


async function getMealObject (mealId) {

    let meal
    try {
        if (mealId) {
            meal = await Meal.findById(mealId);
            return meal;
        }
        meal = await Meal.find();
        return meal;

    } catch (err) {
        return ({err: err.message});

    }

}


async function createMeal (req, res, next) {
    let meal = new Meal();
    meal.name = req.body.name;
    meal.description = req.body.description;

    try {
        meal = await meal.save();
        res.redirect(`meals/${meal.id}`);
    } catch (err) {
        console.log(err);
        res.render(`meals/${path}`, { meal: meal });
    }
}

async function showMeal (req, res, next) {
    const meal = await getMealObject(req.params.mealId);

    let dailyValues = getDailyValues();
    addDailyValuePercentToMealObj(meal, dailyValues);

    addNutrientCategoriesToNutrientsObj(meal.nutrientTotals);

    // console.log('mealController/showMeal meal.nutrientTotals[1]: ', meal.nutrientTotals[1])
    // console.log(meal.nutrientTotals[1].nutrientCategory);

    let direction = "";
    res.render('meals/show', {meal: meal, direction: direction});
}

async function addFoodToMeal (req, res, next) {

    // console.log('in addFoodToMeal, req.body.mealId = ', req.body.mealId);

    let meal
    if (req.body.mealId == 0 ) {

        meal = new Meal({
            name: "Untitled Meal",
            description: ""
        });
    } else {
        meal = await getMealObject(req.body.mealId);
    }

    const fdcId = req.body.fdcId;
    const amountInGrams = req.body.amountInGrams ? req.body.amountInGrams : 100;


    // console.log({amountInGrams});


    //routes/meals/:mealId -> fetchFoodObjectDataAbridged -> addFoodToMeal(this) ->

    // let url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}&format=abridged`;


    let data = req.data;

    //get Food Object
    let nutrients = processNutrients(data, amountInGrams);

    let food = createDbFoodObject(data, nutrients, amountInGrams);

    meal.foods.push(food);

    //////push these to separate funcs

    const nutrientMap = new Map();

    meal.nutrientTotals.forEach( (nutrient, index) => {
     
        nutrientMap.set(nutrient.number, [nutrient, index]);
    })

    nutrients.forEach(nutrient => {
        if (nutrientMap.has(nutrient.number)) {
            let [nutrientTotalObj, index] = nutrientMap.get(nutrient.number);
            let prevTotal = nutrientTotalObj.amount;
            let newTotal = parseFloat(nutrient.amount) + prevTotal;
           

            meal.nutrientTotals[index].amount = newTotal.toFixed(2);

        }
        else {

            meal.nutrientTotals.push(nutrient);

        }
    })


    ////////


    meal = await meal.save();



    req.food = food;
    req.nutrients = nutrients;
    req.meal = meal;

    
    //calculate food nutrient values based on amountInGrams
    //add food/nutrients to meal.foods,
    //add nutrients to meal.nutrientTotals

    //
    let dailyValues = getDailyValues();
    addDailyValuePercentToMealObj(meal, dailyValues);
    addNutrientCategoriesToNutrientsObj(meal.nutrientTotals);
    
    let direction = '';

    res.render('meals/show', {meal: meal, direction: direction});

    next();
}

async function deleteMeal (req, res, next) {


    await db_deleteMealObject(req.params.mealId);

    next();


}


async function removeFoodFromMeal (req, res, next) {

    // let meal = await getMealObject(req.body.mealId);
    let meal = await getMealObject(req.params.mealId);

    // console.log('req.params.fdcId(removeFoodFromMeal): ' + req.params.fdcId);
    const fdcId = req.params.fdcId;

    const nutrientAmountsMap = new Map();


    // console.log('meal, from removeFoodFromMeal: ' + meal.description);
    let foodToRemoveIndex = meal.foods.findIndex(food => food.fdcId == fdcId);

    // console.log({foodToRemoveIndex});

    // console.log('foodToRemove fdcId: ' + meal.foods[foodToRemoveIndex].fdcId)

    meal.foods[foodToRemoveIndex].foodNutrients.forEach(nutrient => {
        nutrientAmountsMap.set(nutrient.number, nutrient.amount);
    })

    meal.nutrientTotals.forEach(total => {
        if (nutrientAmountsMap.has(total.number)) {
            let amountToRemove = nutrientAmountsMap.get(total.number);

            // console.log('total.number: ' + total.number);
            // console.log('total.amount: '+ total.amount);
            // console.log('amountToRemove: ' + amountToRemove);

            total.amount -= amountToRemove;
            total.amount = +total.amount.toFixed(2);

        }
    })


    meal.foods.splice(foodToRemoveIndex, 1);
    await meal.save();

    ////for sort feature
    addNutrientCategoriesToNutrientsObj(meal.nutrientTotals);
    let direction = "";

    ///

    res.render('meals/show', {meal: meal, direction: direction});

    next();

}

async function showMealFood (req, res, next) {

    let meal = await Meal.findById(req.params.mealId)
    let food = meal.foods.find(foodObj => foodObj.id === req.params.foodId)
    
    let dailyValues = getDailyValues();
    addDailyValuePercentToFoodObj(food, dailyValues);
    addNutrientCategoriesToNutrientsObj(food.foodNutrients);

    let direction = "";
    res.render('meals/showFood', { food: food, meal: meal, direction: direction})
}



module.exports = {
    getMealObject,
    createMeal,
    showMeal,
    addFoodToMeal,
    deleteMeal,
    removeFoodFromMeal,
    showMealFood
    
}