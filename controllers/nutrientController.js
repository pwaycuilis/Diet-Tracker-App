const { getDailyValues, addNutrientCategoriesToNutrientsObj, calculatePercentOfDV, addDailyValuePercentToMealObj, addDailyValuePercentToFoodObj, getSortOrder, unitConverter } = require('../middleware/helpers');
// const { getMealObject } = require('../controllers/mealController');
const { db_getMealObject } = require('../middleware/manageDatabase');

// const path = require('path');

function processNutrients (data, amountInGrams) {

    // const nutrientMap = new Map();

    // console.log({data});

    const dailyValues = getDailyValues();

    let nutrients = data.foodNutrients.map(nutrient => {
        
        const amount = calculateNutrientAmount(nutrient.amount, amountInGrams);
        // console.log('from processNutrients: ' + typeof amount);
        // console.log({amount});
        const percentOfDV = dailyValues.has(nutrient.number) ? calculatePercentOfDV(amount, dailyValues.get(nutrient.number)) : 'N/A';
        if (percentOfDV !== 'N/A') {
            // console.log({percentOfDV});
        }
        return new Object({
            number: nutrient.number,
            name: nutrient.name,
            amount: amount,
            unitName: nutrient.unitName,
            percentOfDV: percentOfDV
        })
    })

    return nutrients;

    
}

const calculateNutrientAmount = (amountPerHundredGrams, amountInGrams) => {
    return (amountPerHundredGrams * (amountInGrams/100)).toFixed(2);
}

async function sortNutrientsButton (req, res, next) {
    const sortBy = req.body.sortBy;
    let sortOrder = req.body.direction;
    let pathName = req.body.pathName;

    // console.log('in sortNutrientsButton, req.body.mealId: ', req.body.mealId)

    // console.log({pathName});
    const meal = await db_getMealObject(req.body.mealId);

    let direction
    ({ sortOrder, direction } = getSortOrder(sortOrder, sortBy, direction))

    // console.log('in sortNutrientsButton, sortOrder: ', sortOrder, ' direction: ', direction)
    let dailyValues = getDailyValues();
    addDailyValuePercentToMealObj(meal, dailyValues);



    meal.nutrientTotals = await nutrientSort(meal.nutrientTotals, sortBy, direction)

    //  add categories
    addNutrientCategoriesToNutrientsObj(meal.nutrientTotals);

    // direction = sortOrder;

    // for sort with showFood ****
    let food
    if (pathName == 'meals/showFood') {
        // let foodId = req.body.foodId;
        food = meal.foods.find(foodObj => foodObj.id === req.body.foodId);
        // console.log('foodId: ', food.id);

        addDailyValuePercentToFoodObj(food, dailyValues);
        food.foodNutrients = await nutrientSort(food.foodNutrients, sortBy, direction)
        // console.log('foodNutrient[1] percentOfDV: ', food.foodNutrients[1].percentOfDV);
    }
    // for sort with showFood ***
    direction = sortOrder;

    // res.render('meals/show', { meal: meal, direction: direction })
    res.render(`${pathName}`, { meal: meal, direction: direction, food: food })
    next();
}

const nutrientSort = (nutrients, sortBy, dir) => {
    const sorter = sortBy ? sortBy : "number";
    const direction = dir ? dir : "asc";

    console.log('sorter: ' + sorter)
    // 
    // console.log({nutrients});

    if (direction == "desc") {
        console.log('desc sort')
        if (sorter == "amount") {
            nutrients.sort((a,b) => (unitConverter(b.amount, b.unitName) > unitConverter(a.amount, a.unitName)) ? 1 : -1)
        } else {
            nutrients.sort((a, b) => (b[sorter] > a[sorter]) ? 1 : -1)
        }

       
        // nutrients.sort((a, b) => (a[sorter] > b[sorter]) ? -1 : 1)
        // nutrients.sort((a, b) => b[sorter] - a[sorter]);
    } else if (direction == "asc") {
        console.log('asc sort')
        if (sorter == "amount") {
            nutrients.sort((a,b) => (unitConverter(b.amount, b.unitName) < unitConverter(a.amount, a.unitName)) ? 1 : -1)
        } else {
            nutrients.sort((a, b) => (b[sorter] < a[sorter]) ? 1 : -1)
        }

        // nutrients.sort((a,b) => a[sorter] - b[sorter]);
        // nutrients.sort((a, b) => (a[sorter] > b[sorter]) ? 1 : -1)
    } else {
        console.log(`${direction} is not a valid direction`);
    }
    console.log('after sorting');
    // console.log({nutrients});

    return nutrients;

}

module.exports = {
    processNutrients,
    calculateNutrientAmount,
    sortNutrientsButton,
    nutrientSort
}