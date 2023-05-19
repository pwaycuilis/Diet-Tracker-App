
const API_KEY = process.env.API_KEY;

const DailyValues = require('../models/dailyValues');
const fetch = require('node-fetch');
const { getMealObject } = require('../controllers/mealController');
const { getDailyValues, getNutrientCategoriesMap } = require('../middleware/helpers');
const { nutrientCategories } = require('../models/nutrientCategories');


const generalNumbersList = ''

async function getData (url) {
    try {
        const response = await fetch(url);
        // response = await fetch(url);
        return response.json();
    } catch(err) {
        return ({message: err.message});
    }
}

const calculatePercentOfDV = (amount, dailyAmount) => {
    return ((amount/dailyAmount)*100).toFixed(1);
}


async function getSearchResults (req, res, next) {
    const DailyValuesMap = new Map();

    DailyValues.forEach(item => {
        DailyValuesMap.set(item.number, item.dailyAmount);
    })


    let searchTerm = req.body.searchTerm ? req.body.searchTerm : 0;
    

    /////test block
    // const pageNumber = 1;
    // let brandSearch = req.body.searchType ? 1 : 0;
    let pageNumber = req.body.pageNumber ? req.body.pageNumber : 1;

    let searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&api_key=${API_KEY}&pageNumber=${pageNumber}`

    console.log({searchTerm})

    let data = await getData(searchUrl);
    // console.log({data});

    let pageInfo = new Object({
        searchTerm: searchTerm,
        totalHits: data.totalHits,
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        pageList: data.pageList,

        pageSize: data.foodSearchCriteria.pageSize,
        numberOfResultsPerPage: data.foodSearchCriteria.numberOfResultsPerPage,
        dataType: data.foodSearchCriteria.dataType,
        query: data.foodSearchCriteria.query,
        generalSearchInput: data.foodSearchCriteria.generalSearchInput
    })


    let foods = data.foods.map(food => new Object({
        fdcId: food.fdcId,
        description: food.description,


        foodNutrients: food.foodNutrients.map(item => new Object({
            nutrientId: item.nutrientId,
            nutrientNumber: item.nutrientNumber,
            nutrientName: item.nutrientName,
            // amount: +item.amount.toFixed(2),
            value: item.value,
            unitName: item.unitName,

            dailyValue: DailyValuesMap.get(item.nutrientNumber),
            percentOfDV: calculatePercentOfDV(item.value, DailyValuesMap.get(item.nutrientNumber))
        })),
        brandOwner: food.brandOwner,
        brandName: food.brandName,
        ingredients: food.ingredients,
        marketCountry: food.marketCountry,
        foodCategory: food.foodCategory,
        servingSize: food.servingSize,
        servingSizeUnit: food.servingSizeUnit
    }))

    // let portionSizes
    // if (data.foodPortions) {
    //     portionSizes = data.foodPortions.map(ele => new Object({
    //         portionDescription: ele.portionDescription,
    //         gramWeight: ele.gramWeight
    //     })) 
    // } else {
    //     portionSizes = "No portion sizes available"
    // }

    let meals = await getMealObject();

    req.meals = meals;
    req.foods = foods;
    req.pageInfo = pageInfo;
    // req.portionSizes = portionSizes;
    // let meals = await getMealObject();
    // req.meals = meals;

    next();
}


async function fetchFoodObjectDataAbridged (req, res, next) {

    const fdcId = req.body.fdcId;
    const amountInGrams = req.body.amountInGrams ? req.body.amountInGrams : 100;
    let abridgedUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}&format=abridged`;

    let data = await getData(abridgedUrl);
    req.data = data;

    next();
    
}

//used to select a food on searchResults page
async function fetchFoodByFdcIdUnabridged (req, res, next) {
    // console.log('in show');

    
    const fdcId = req.params.fdcId;

    console.log({fdcId});

    const amountInGrams = req.body.amountInGrams ? req.body.amountInGrams : 100;
    let fullUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}`;

    let data = await getData(fullUrl);


    let food = new Object({
        fdcId: fdcId,
        description: data.description
    })


    const DailyValuesMap = getDailyValues();
    // const DailyValuesMap = new Map();

    // DailyValues.forEach(item => {
    //     DailyValuesMap.set(item.number, item.dailyAmount);
    // })

    // console.log({data})
    // console.log(data.foodNutrients);

    let nutrientCategoriesMap = getNutrientCategoriesMap();

    // console.log({nutrientCategoriesMap});

    console.log('data.foodNutrients[1].nutrient.number: ', data.foodNutrients[1].nutrient.number);

    console.log('typeof data.foodNutr...', typeof data.foodNutrients[1].nutrient.number)
    let testMap = nutrientCategoriesMap.get(data.foodNutrients[1].nutrient.number);
    // console.log({testMap});


    let nutrients = data.foodNutrients.map(item => new Object({
        id: item.nutrient.id,
        number: item.nutrient.number,
        name: item.nutrient.name,
        // amount: +item.amount.toFixed(2),
        amount: item.amount,
        unitName: item.nutrient.unitName,

        dailyValue: DailyValuesMap.get(item.nutrient.number),
        ///
        nutrientCategory: nutrientCategoriesMap.get(parseInt(item.nutrient.number)),
        ///
        percentOfDV: calculatePercentOfDV(item.amount, DailyValuesMap.get(item.nutrient.number))

    }))
    // req.data = data;

    console.log(' in foodController/fetchFoodByFdcIdnutrients[1]: ', nutrients[1]);


    let portionSizes
    if (data.foodPortions) {
        portionSizes = data.foodPortions.map(ele => new Object({
            portionDescription: ele.portionDescription,
            gramWeight: ele.gramWeight
        })) 
    } else {
        portionSizes = "No portion sizes available"
    }

    // let nutrientsByCategory = nutrients.map(nutrient => {
        
    // })

    


    let meals = await getMealObject();

    return res.render('foods/showFoodSearchItem', {food: food, nutrients: nutrients, direction: "", meals: meals, portionSizes: portionSizes});
}

async function fetchFoodByFdcIdAbridged (req, res, next) {

    
    const fdcId = req.params.fdcId;

    console.log({fdcId});

    const amountInGrams = req.body.amountInGrams ? req.body.amountInGrams : 100;
    let abridgedUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}&format=abridged`;

    let data = await getData(abridgedUrl);


    let food = new Object({
        fdcId: fdcId,
        description: data.description
    })


    const DailyValuesMap = getDailyValues();


    let nutrientCategoriesMap = getNutrientCategoriesMap();


    let testMap = nutrientCategoriesMap.get(data.foodNutrients[1].number);



    let nutrients = data.foodNutrients.map(item => new Object({
        // id: item.nutrient.id,
        number: item.number,
        name: item.name,
        amount: item.amount,
        unitName: item.unitName,

        dailyValue: DailyValuesMap.get(item.number),
        
        nutrientCategory: nutrientCategoriesMap.get(parseInt(item.number)),
        
        percentOfDV: calculatePercentOfDV(item.amount, DailyValuesMap.get(item.number))

    }))

    let meals = await getMealObject();

    return res.render('foods/showFoodSearchItem', {food: food, nutrients: nutrients, direction: "", meals: meals});
}

const createFoodObject = (data, nutrients, amountInGrams) => {


    // let nutrients = processNutrients(data, amountInGrams)

    // const dailyValues = getDailyValues();

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

module.exports = {
    getData,
    getSearchResults,
    fetchFoodObjectDataAbridged,
    createFoodObject,
    fetchFoodByFdcIdUnabridged
}