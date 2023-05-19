const fetch = require('node-fetch');
const dailyValues = require('../models/dailyValues');
const { nutrientCategories }= require('../models/nutrientCategories');


async function getData (url) {
    // console.log('in getData');
    // console.log({url});
    try {
        const response = await fetch(url);
        // response = await fetch(url);
        return response.json();
    } catch(err) {
        return ({message: err.message});
    }
}

const getDailyValues = () => {
    const dailyValuesMap = new Map();

    dailyValues.forEach(item => {
        dailyValuesMap.set(item.number, item.dailyAmount );
    })

    return dailyValuesMap;

}

const getNutrientCategoriesMap = () => {

    // console.log('in helpers/getNutCatMap, nutCategories: ', nutrientCategories);
    // console.log( typeof nutrientCategories);
    const nutrientCategoriesMap = new Map();

    nutrientCategories.forEach(category => {
        // console.log('category: ', category);
        let catName = category.categoryName;
        // category.forEach(nutrient => {
        //     nutrientCategoriesMap.set(nutrient.number, category);
        // })
        category.nutrients.forEach(nutrient => {
            nutrientCategoriesMap.set(nutrient.number, catName);
        })
    })

    return nutrientCategoriesMap;
}

const addNutrientCategoriesToNutrientsObj = (nutrients) => {

    const nutrientCategoriesMap = getNutrientCategoriesMap();

    nutrients.forEach(nutrient => {
        // nutrient.nutrientCategory = nutrientCategoriesMap.get(parseInt(item.nutrient.number))
        nutrient.nutrientCategory = nutrientCategoriesMap.get(parseInt(nutrient.number))
    })
    // console.log(nutrientCategoriesMap.get(parseInt('429')));
    // console.log('in helpers/addNutrientCat..., nutrients[1]: ', nutrients[1]);

    // return nutrients;
    

}

const calculatePercentOfDV = (amount, dailyAmount) => {

    // console.log({amount, dailyAmount});

    // if (dailyAmount)

    return ((amount/dailyAmount)*100).toFixed(1);
}

const nutrientSort = (nutrients, sortBy, dir) => {
    const sorter = sortBy ? sortBy : "number";
    const direction = dir ? dir : "asc";

    // console.log('sorter: ' + sorter)


    if (direction == "desc") {
        // console.log('desc sort')
        // nutrients.sort((a, b) => (b[sorter] > a[sorter]) ? 1 : -1)
        // nutrients.sort((a, b) => (a[sorter] > b[sorter]) ? -1 : 1)
        nutrients.sort((a, b) => b[sorter] - a[sorter]);
    } else if (direction == "asc") {
        // console.log('asc sort')
        nutrients.sort((a,b) => a[sorter] - b[sorter]);
        // nutrients.sort((a, b) => (a[sorter] > b[sorter]) ? 1 : -1)
    } else {
        console.log(`${direction} is not a valid direction`);
    }

    return nutrients;

}

const addDailyValuePercentToMealObj = (meal, dailyValues) => {
    // console.log({meal});

    meal.nutrientTotals.forEach(nutrientTotal => {
        if (dailyValues.has(nutrientTotal.number)) {
            const dailyAmount = dailyValues.get(nutrientTotal.number);
            const dvPercent = calculatePercentOfDV(nutrientTotal.amount, dailyAmount);
            
            // dvPercentMap.set(nutrientTotal.number, dvPercent);
            nutrientTotal["percentOfDV"] = dvPercent ? parseFloat(dvPercent) : 'N/A';
            // nutrientTotal["percentOfDV"] = dvPercent;
        } else {
            nutrientTotal["percentOfDV"] = 0;
        }

    })

    // return meal.nutrientTotals;
}

const addDailyValuePercentToFoodObj = (food, dailyValues) => {
    // console.log({meal});

   food.foodNutrients.forEach(nutrient => {
        if (dailyValues.has(nutrient.number)) {
            const dailyAmount = dailyValues.get(nutrient.number);
            const dvPercent = calculatePercentOfDV(nutrient.amount, dailyAmount);
            
            // dvPercentMap.set(nutrientTotal.number, dvPercent);
            nutrient["percentOfDV"] = dvPercent ? parseFloat(dvPercent) : 'N/A';
            // nutrientTotal["percentOfDV"] = dvPercent;
        } else {
            nutrient["percentOfDV"] = 0;
        }

    })

    // return meal.nutrientTotals;
}


const getSortOrder = (sortOrder, sortBy, direction) => {

    switch (sortOrder) {
        case "":
            direction = "asc";
            sortOrder = sortBy + '_' + direction;
            break;

        case "number_asc":
            if(sortBy === "number"){
                direction = "desc"
            } else {
                direction = "asc"
            }
            sortOrder = sortBy + '_' + direction; 
            break;
        
        case "number_desc":
            if(sortBy === "number"){
                direction = "asc"
            } else {
                direction = "desc"
            }
            sortOrder = sortBy + '_' + direction;
            break;

        case "name_asc":
            if(sortBy === "name"){
                direction = "desc"
            } else {
                direction = "asc"
            }
            sortOrder = sortBy + '_' + direction; 
            break;
        
        case "name_desc":
            if(sortBy === "name"){
                direction = "asc"
            } else {
                direction = "desc"
            }
            sortOrder = sortBy + '_' + direction;
            break;

        case "amount_asc":
            if(sortBy === "amount"){
                direction = "desc"
            } else {
                direction = "asc"
            }
            sortOrder = sortBy + '_' + direction; 
            break;
        
        case "amount_desc":
            if(sortBy === "amount"){
                direction = "asc"
            } else {
                direction = "desc"
            }
            sortOrder = sortBy + '_' + direction;
            break;

        case "unitName_asc":
            if(sortBy === "unitName"){
                direction = "desc"
            } else {
                direction = "asc"
            }
            sortOrder = sortBy + '_' + direction; 
            break;
        
        case "unitName_desc":
            if(sortBy === "unitName"){
                direction = "asc"
            } else {
                direction = "desc"
            }
            sortOrder = sortBy + '_' + direction;
            break;

        case "mealAmount_asc":
            if(sortBy === "mealAmount"){
                direction = "desc"
            } else {
                direction = "asc"
            }
            sortOrder = sortBy + '_' + direction; 
            break;
        
        case "mealAmount_desc":
            if(sortBy === "mealAmount"){
                direction = "asc"
            } else {
                direction = "desc"
            }
            sortOrder = sortBy + '_' + direction;
            break;

        case "dailyAmount_asc":
            if(sortBy === "dailyAmount"){
                direction = "desc"
            } else {
                direction = "asc"
            }
            sortOrder = sortBy + '_' + direction; 
            break;
        
        case "dailyAmount_desc":
            if(sortBy === "dailyAmount"){
                direction = "asc"
            } else {
                direction = "desc"
            }
            sortOrder = sortBy + '_' + direction;
            break;

        case "percentOfDV_asc":
            if(sortBy === "percentOfDV"){
                direction = "desc"
            } else {
                direction = "asc"
            }
            sortOrder = sortBy + '_' + direction; 
            break;
        
        case "percentOfDV_desc":
            if(sortBy === "percentOfDV"){
                direction = "asc"
            } else {
                direction = "desc"
            }
            sortOrder = sortBy + '_' + direction;
            break;
    }

    return { sortOrder, direction }

}

const unitConverter = (amount, unitName) => {


    if (unitName == "UG") {
        return amount * .000001
    }

    if (unitName == "MG") {
        return amount * .001;
    }

    
    // if (unitName == "UG") {
    //     return amount;
    // }

    // if (unitName == "MG") {
    //     return amount * 1000;
    // }

    // if (unitName == "G") {
    //     return amount * 1000000;
    // }

    return amount;
}


module.exports = {
    getData,
    getDailyValues,
    getNutrientCategoriesMap,
    addNutrientCategoriesToNutrientsObj,
    calculatePercentOfDV,
    nutrientSort,
    addDailyValuePercentToMealObj,
    addDailyValuePercentToFoodObj,
    getSortOrder,
    unitConverter
}