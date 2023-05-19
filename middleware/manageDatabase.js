const Meal = require('../models/meal');

const createDbFoodObject = (data, nutrients, amountInGrams) => {




    let food = new Object({
        fdcId: data.fdcId,
        description: data.description,
        amountInGrams: amountInGrams ? amountInGrams : 100,
        // foodNutrients: data.foodNutrients
        // foodNutrients: data.foodNutrients.map(nutrient => new Object({
        //     number: nutrient.number,
        //     name: nutrient.name,
        //     amount: (nutrient.amount * (amountInGrams/100)).toFixed(2),
        //     unitName: nutrient.unitName
        // }))
        foodNutrients: nutrients
    })



    return food;
}

async function db_getMealObject (mealId) {

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

// async function db_deleteMeal (req, res, next) {

//     let mealId = req.params.mealId
//     console.log({mealId});

//     try {
//         meal = await Meal.findByIdAndDelete(mealId);
//         return meal;
//     } catch (err) {
//         return ({err: err.message});
//     }

//     next();




// }

async function db_deleteMealObject (mealId) {


    let meal
    try {
       meal = await Meal.findByIdAndDelete(mealId);
       return meal;
    } catch (err) {
        return ({err: err.message});
    }
}


module.exports = {
    createDbFoodObject,
    db_getMealObject,
    db_deleteMealObject
}