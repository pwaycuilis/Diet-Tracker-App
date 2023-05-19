

//EX:
// let searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchTerm}&api_key=${API_KEY}`
//for retrieving food item by search query
// {
//     "totalHits": 33772,
//     "currentPage": 1,
//     "totalPages": 676,
//     "pageList": [
//         1,
//         2,
//         3,
//         4,
//         5,
//         6,
//         7,
//         8,
//         9,
//         10
//     ],
//     "foodSearchCriteria": {
//         "query": "peanuts",
//         "generalSearchInput": "peanuts",
//         "pageNumber": 1,
//         "numberOfResultsPerPage": 50,
//         "pageSize": 50,
//         "requireAllWords": false
//     },
//     "foods": [
//         {
//             "fdcId": 2027332,
//             "description": "PEANUTS",
//             "dataType": "Branded",
//             "gtinUpc": "041318221565",
//             "publishedDate": "2021-10-28",
//             "brandOwner": "Schnuck Markets, Inc.",
//             "brandName": "SCHNUCKS",
//             "ingredients": "PEANUTS, SEA SALT, CORNSTARCH, SUGAR, MALTODEXTRIN, MONOSODIUM GLUTAMATE (FLAVOR ENHANCER), YEAST, CORN SYRUP SOLIDS, PAPRIKA AND OTHER SPICES, EXTRACTIVES OF PAPRIKA, HYDROLYZED SOY PROTEIN, NATURAL FLAVOR, GARLIC AND ONION POWDER.",
//             "marketCountry": "United States",
//             "foodCategory": "Popcorn, Peanuts, Seeds & Related Snacks",
//             "modifiedDate": "2017-06-25",
//             "dataSource": "LI",
//             "packageWeight": "907 g/2 lbs/32 oz",
//             "servingSizeUnit": "g",
//             "servingSize": 28.0,
//             "tradeChannels": [
//                 "NO_TRADE_CHANNEL"
//             ],
//             "allHighlightFields": "<b>Ingredients</b>: <em>PEANUTS</em>, SEA SALT, CORNSTARCH, SUGAR, MALTODEXTRIN, MONOSODIUM GLUTAMATE (FLAVOR ENHANCER), YEAST",
//             "score": 857.3218,
//             "microbes": [],
//             "foodNutrients": [
//                 {
//                     "nutrientId": 1003,
//                     "nutrientName": "Protein",
//                     "nutrientNumber": "203",
//                     "unitName": "G",
//                     "derivationCode": "LCCS",
//                     "derivationDescription": "Calculated from value per serving size measure",
//                     "derivationId": 70,
//                     "value": 21.4,
//                     "foodNutrientSourceId": 9,
//                     "foodNutrientSourceCode": "12",
//                     "foodNutrientSourceDescription": "Manufacturer's analytical; partial documentation",
//                     "rank": 600,
//                     "indentLevel": 1,
//                     "foodNutrientId": 25742846
//                 },




// let fullUrl = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}`
//Format for searching by fdcId
// {
//     "fdcId": 330137,
//     "description": "Yogurt, Greek, plain, nonfat",
//     "publicationDate": "4/1/2019",
//     "foodNutrients": [
//         {
//             "nutrient": {
//                 "id": 2045,
//                 "number": "951",
//                 "name": "Proximates",
//                 "rank": 50,
//                 "unitName": "g"
//             },
//             "type": "FoodNutrient"
//         },