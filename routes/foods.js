const express = require('express');

const router = express.Router()
// const fetch = require('node-fetch');
// const API_KEY= 'mDxmvhitceBL7z0dotECKMGuvpUJHfXuysOWCBL9'
const API_KEY = process.env.API_KEY;

const { getSearchResults, fetchFoodByFdcIdUnabridged } = require('../controllers/foodController');
// const { getMealObject } = require('../controllers/mealController');
// const { getData, getDailyValues, calculatePercentOfDV } = require('../middleware/helpers');

const DailyValues = require('../models/dailyValues');


// const URL_BASE= ``
// console.log({dailyValues});


// async function getData (url) {
//     try {
//         const response = await fetch(url);
//         // response = await fetch(url);
//         return response.json();
//     } catch(err) {
//         return ({message: err.message});
//     }
// }

router.get('/', (req, res) => {
    res.send('in routes/foods');


    // const searchTerm = req.body.searchTerm;

    const searchQueryUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&dataType=${dataTypes}&api_key=${API_KEY}&pageNumber=${pageNumber}`

    // let data = await getData(searchQueryUrl);
})

// const calculatePercentOfDV = (amount, dailyAmount) => {

//     // console.log({amount, dailyAmount});

//     // if (dailyAmount)

//     return ((amount/dailyAmount)*100).toFixed(1);
// }

// return search results
router.post('/search', getSearchResults, async (req, res) => {



    let foods = req.foods;
    let pageInfo = req.pageInfo;
    let meals = req.meals;
    // let portionSizes = req.portionSizes;
    // let meals = req.meals;
    return res.render('searchResults', {foods: foods, pageInfo: pageInfo, meals: meals});
    // return res.render('searchResults', {foods: foods, pageInfo: pageInfo, meals: meals, portionSizes: portionSizes});
})


//show food // go to food page
router.get('/show/:fdcId', fetchFoodByFdcIdUnabridged, async (req, res) => {

    // console.log('in show');

    


    // const fdcId = req.params.fdcId;

    // console.log({fdcId});

    // const amountInGrams = req.body.amountInGrams ? req.body.amountInGrams : 100;
    // let fullUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}`;

    // let data = await getData(fullUrl);


    // let food = new Object({
    //     fdcId: fdcId,
    //     description: data.description
    // })


    // const DailyValuesMap = getDailyValues();
    // // const DailyValuesMap = new Map();

    // // DailyValues.forEach(item => {
    // //     DailyValuesMap.set(item.number, item.dailyAmount);
    // // })

    // // console.log({data})
    // // console.log(data.foodNutrients);
    // let nutrients = data.foodNutrients.map(item => new Object({
    //     id: item.nutrient.id,
    //     number: item.nutrient.number,
    //     name: item.nutrient.name,
    //     // amount: +item.amount.toFixed(2),
    //     amount: item.amount,
    //     unitName: item.nutrient.unitName,

    //     dailyValue: DailyValuesMap.get(item.nutrient.number),
    //     percentOfDV: calculatePercentOfDV(item.amount, DailyValuesMap.get(item.nutrient.number))

    // }))
    // // req.data = data;

    // let meals = await getMealObject();

    // // console.log(typeof window);
    // // localStorage.setItem("currentNutrients", nutrients);

    // return res.render('foods/showFoodSearchItem', {food: food, nutrients: nutrients, direction: "", meals: meals});
})

router.post('/nutrientSort', async (req, res) => {
    console.log('in nutrientSort');

    let nutrients = localStorage.getItem("currentNutrients");

    console.log({req});
    console.log(req.body.sortBy);

    console.log({nutrients});

    return;
})

module.exports = router;