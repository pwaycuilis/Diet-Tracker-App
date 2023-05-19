let nutrientCategories = 
[
    {
        categoryName: 'General',
        nutrients: [
            {
                number: 208,
                name: "Energy",
                unitName: "KCAL"
            },
            {
                number: 268,
                name: "Energy",
                unitName: "kJ",
            },
            {
                number: 957,
                name: "Energy (Atwater General Factors)",
                unitName: "kcal",
            },
            {
                number: 958,
                name: "Energy (Atwater Specific Factors)",
                unitName: "kcal",
            },
            {
                number: 207,
                name: "Ash",
                unitName: "G"
            },
            {
                number: 255,
                name: "Water",
                unitName: "G"
            },
            {
                number: 262,
                name: "Caffeine",
                unitName: "MG"
            },
            {
                number: 221,
                name: "Alcohol, ethyl",
                unitName: "G"
            }
        ],
    },

    {
        categoryName: 'Carbohydrates',
        nutrients: [
            {
                number: 205,
                name: "Carbohydrate, by difference",
                unitName: "G"
            },
            {
                number: 291,
                name: "Fiber, total dietary",
                unitName: "G"
            },
            {
                number: 209,
                name: "Starch",
                unitName: "G"
            },
            
        ],
    },
//  Cant find allulose, sugar alcohol
//  Added sugars possibly is sugars total - sugars, total including nlea
    {

        categoryName: "Sugars",
        nutrients: [
            {
                number: 269,
                name: "Sugars, total including NLEA",
                unitName: "G"
            },
            {
                number: 269.3,
                name: "Sugars, Total",
                unitName: "G"
            },
            
            {
                number: 210,
                name: "Sucrose",
                unitName: "G"
            },
            {
                number: 211,
                name: "Glucose",
                unitName: "G"
            },
            {
                number: 212,
                name: "Fructose",
                unitName: "G"
            },
            {
                number: 213,
                name: "Lactose",
                unitName: "G"
            },
            {
                number: 214,
                name: "Maltose",
                unitName: "G"
            },
            {
                number: 287,
                name: "Galactose",
                unitName: "G"
            },
            {
                number: 288,
                name: "Raffinose",
                unitName: "G"
            },
            {
                number: 289,
                name: "Stachyose",
                unitName: "G"
            },

        ],
    },

    {
        categoryName: "Lipids",
        nutrients: [
            {
                number: 204,
                name: "Total Lipid (fat)",
                unitName: "G"
            },
            {
                number: 298,
                name: "Total fat (NLEA)",
                unitName: "G"
            },
            {
                number: 601,
                name: "Cholesterol",
                unitName: "MG"
            },
            {
                number: 605,
                name: "Fatty acids, total trans",
                unitName: "G"
            },
            {
                number: 606,
                name: "Fatty acids, total saturated",
                unitName: "G"
            },
            {
                number: 645,
                name: "Fatty acids, total monounsaturated",
                unitName: "G"
            },
            {
                number: 646,
                name: "Fatty acids, total polyunsaturated",
                unitName: "G"
            },
            {
                number: 693,
                name: "Fatty acids, total trans-monoenoic",
                unitName: "G"
            },
            {
                number: 695,
                name: "Fatty acids, total trans-polyenoic",
                unitName: "G"
            },
            ///SFA numbers range (Seemingly)
            //607-615 , 616?
            //
        ],
    },

    {
        categoryName: "Proteins",
        nutrients: [
            {
                number: 203,
                name: "Protein",
                unitName: "G"
            },
            {
                number: 501,
                name: "Tryptophan",
                unitName: "G"
            },
            {
                number: 502,
                name: "Threonine",
                unitName: "G"
            },
            {
                number: 503,
                name: "Isoleucine",
                unitName: "G"
            },
            {
                number: 504,
                name: "Leucine",
                unitName: "G"
            },
            {
                number: 505,
                name: "Lysine",
                unitName: "G"
            },
            {
                number: 506,
                name: "Methionine",
                unitName: "G"
            },
            {
                number: 507,
                name: "Cystine",
                unitName: "G"
            },
            {
                number: 508,
                name: "Phenylalanine",
                unitName: "G"
            },
            {
                number: 509,
                name: "Tyrosine",
                unitName: "G"
            },
            {
                number: 510,
                name: "Valine",
                unitName: "G"
            },
            {
                number: 511,
                name: "Arginine",
                unitName: "G"
            },
            {
                number: 512,
                name: "Histidine",
                unitName: "G"
            },
            {
                number: 513,
                name: "Alanine",
                unitName: "G"
            },
            
            {
                number: 514,
                name: "Aspartic acid",
                unitName: "G"
            },
            {
                number: 515,
                name: "Glutamic acid",
                unitName: "G"
            }, 
            
            {
                number: 516, 
                name: "Glycine",
                unitName: "G"
            },
            {
                number: 517,
                name: "Proline",
                unitName: "G"
            },
            {
                number: 518,
                name: "Serine",
                unitName: "G",
            },
            {
                number: 521,
                name: "Hydroxyproline",
                unitName: "G"
            },
            {
                number: 526,
                name: "Cysteine",
                unitName: "G",
            }
        ]
    }, 
    {
        categoryName: "Vitamins",
        nutrients: [
            {
                number: 318,
                name: "Vitamin A, IU",
                unitName: "IU"
            },
            {
                number: 319,
                name: "Retinol",
                unitName: "UG"
            },
            {
                number: 320,
                name: "Vitamin A, RAE",
                unitName: "UG"
            },
            {
                number: 321,
                name: "Carotene, beta",
                unitName: "UG"
            },
            {
                number: 322,
                name: "Carotene, alpha",
                unitName: "UG"
            },
            {
                number: 323,
                name: "Vitamin E (alpha-tocopherol)",
                unitName: "MG"
            },
            {
                number: 324,
                name: "Vitamin D (D2 + D3), International Units",
                unitName: "IU"
            },
            {
                number: 325,
                name: "Vitamin D2 (ergocalciferol)",
                unitName: "UG"
            },
            {
                number: 326,
                name: "Vitamin D3 (cholecalciferol)",
                unitName: "UG"
            },
            {
                number: 327,
                name: "25-hydroxycholecalciferol",
                unitName: "UG"
            },
            {
                number: 328,
                name: "Vitamin D (D2 + D3)",
                unitName: "UG"
            },
            // 330
            //
            //
            {
                number: 330,
                name: "Phytoene",
                unitName: "UG"
            },
            {
                number: 331,
                name: "Phytofluene",
                unitName: "UG"
            },
            {
                number: 332,
                name: "Carotene, gamma",
                unitName: "UG"
            },
            {
                number: 334,
                name: "Cryptoxanthin, beta",
                unitName: "UG",
            },
            {
                number: 335,
                name: "Cryptoxanthin, alpha",
                unitName: "UG"
            },
            {
                number: 337,
                name: "Lycopene",
                unitName: "UG"
            },
            {
                number: 338,
                name: "Lutein + zeaxanthin",
                unitName: "UG"
            },
            {
                number: 401,
                name: "Vitamin C, total ascorbic acid",
                unitName: "MG"
            },
            {
                number: 404,
                name: "Thiamin",
                unitName: "MG"
            },
            {
                number: 405,
                name: "Riboflavin",
                unitName: "MG"
            },
            {
                number: 406,
                name: "Niacin",
                unitName: "MG"
            },
            {
                number: 410,
                name: "Pantothenic acid",
                unitName: "MG"
            },
            {
                number: 415,
                name: "Vitamin B-6",
                unitName: "MG"
            },
            {
                number: 416,
                name: "Biotin",
                unitName: "UG"
            },
            {
                number: 417,
                name: "Folate, total",
                unitName: "UG",
            },
            {
                number: 418,
                name: "Vitamin B-12",
                unitName: "UG",
            },
            {
                number: 421,
                name: "Choline, total",
                unitName: "MG"
            },
            { 
                number: 428,
                name: "Vitamin K (Menaquinone-4)",
                unitName: "UG"
            },
            {
                number: 429,
                name: "Vitamin K (Dihydrophylloquinone)",
                unitName: "UG"
            },
            {
                number: 430,
                name: "Vitamin K (phylloquinone)",
                unitName: "UG"
            },
            {
                number: 431,
                name: "Folic acid",
                unitName: "UG"
            },
            {
                number: 432,
                name: "Folate, food",
                unitName: "UG"
            },
            {
                number: 435,
                name: "Folate, DFE",
                unitName: "UG"
            },
            {
                number: 454,
                name: "Betaine",
                unitName: "MG"
            },
            {
                number: 573,
                name: "Vitamin E, added",
                unitName: "MG"
            },
            {
                number: 578,
                name: "Vitamin B-12, added",
                unitName: "UG"
            },

        ]
    },
    {
        categoryName: "Minerals",
        nutrients: [
            {
                number: 301,
                name: "Calcium, Ca",
                unitName: "MG"
            },
            {
                number: 303,
                name: "Iron, Fe",
                unitName: "MG"
            },
            {
                number: 304,
                name: "Magnesium, Mg",
                unitName: "MG"
            },
            {
                number: 305,
                name: "Phosphorus, P",
                unitName: "MG"
            },
            {
                number: 306,
                name: "Potassium, K",
                unitName: "MG"
            },
            {
                number: 307,
                name: "Sodium, Na",
                unitName: "MG"
            },
            {
                number: 308,
                name: "Sulfur, S",
                unitName: "MG"
            },
            {
                number: 309,
                name: "Zinc, Zn",
                unitName: "MG"
            },
            {
                number: 311,
                name: "Cobalt, Co",
                unitName: "UG"
            },
            {
                number: 312,
                name: "Copper, Cu",
                unitName: "MG"
            },
            {
                number: 313,
                name: "Fluoride, F",
                unitName: "UG"
            },
            {
                number: 314,
                name: "Iodine, I",
                unitName: "UG"
            },
            {
                number: 315,
                name: "Manganese, Mn",
                unitName: "MG"
            },
            {
                number: 316,
                name: "Molybdenum, Mo",
                unitName: "UG"
            },
            {
                number: 317,
                name: "Selenium, Se",
                unitName: "UG"
            }
        ]
    }


]




// let nutrientCategories = 
// {
//     general: [
//         {
//             number: 208,
//             name: "Energy",
//             unitName: "KCAL"
//         },
//         {
//             number: 268,
//             name: "Energy",
//             unitName: "kJ",
//         },
//         {
//             number: 207,
//             name: "Ash",
//             unitName: "G"
//         },
//         {
//             number: 225,
//             name: "Water",
//             unitName: "G"
//         },
//         {
//             number: 262,
//             name: "Caffeine",
//             unitName: "MG"
//         },
//         {
//             number: 221,
//             name: "Alcohol, ethyl",
//             unitName: "G"
//         }
//     ],

//     carbohydrates: [
//         {
//             number: 205,
//             name: "Carbohydrate, by difference",
//             unitName: "G"
//         },
//         {
//             number: 291,
//             name: "Fiber, total dietary",
//             unitName: "G"
//         },
//         {
//             number: 209,
//             name: "Starch",
//             unitName: "G"
//         },
        
//     ],
// //  Cant find allulose, sugar alcohol
// //  Added sugars possibly is sugars total - sugars, total including nlea
//     sugars: [
//         {
//             number: 269,
//             name: "Sugars, total including NLEA",
//             unitName: "G"
//         },
//         {
//             number: 269.3,
//             name: "Sugars, Total",
//             unitName: "G"
//         },
        
//         {
//             number: 210,
//             name: "Sucrose",
//             unitName: "G"
//         },
//         {
//             number: 211,
//             name: "Glucose",
//             unitName: "G"
//         },
//         {
//             number: 212,
//             name: "Fructose",
//             unitName: "G"
//         },
//         {
//             number: 213,
//             name: "Lactose",
//             unitName: "G"
//         },
//         {
//             number: 214,
//             name: "Maltose",
//             unitName: "G"
//         },
//         {
//             number: 287,
//             name: "Galactose",
//             unitName: "G"
//         },

//     ],

//     lipids: [
//         {
//             number: 204,
//             name: "Total Lipid (fat)",
//             unitName: "G"
//         },
//         {
//             number: 298,
//             name: "Total fat (NLEA)",
//             unitName: "G"
//         },
//         {
//             number: 605,
//             name: "Fatty acids, total trans",
//             unitName: "G"
//         },
//         {
//             number: 606,
//             name: "Fatty acids, total saturated",
//             unitName: "G"
//         },
//         {
//             number: 645,
//             name: "Fatty acids, total monounsaturated",
//             unitName: "G"
//         },
//         {
//             number: 646,
//             name: "Fatty acids, total polyunsaturated",
//             unitName: "G"
//         },
//         {
//             number: 693,
//             name: "Fatty acids, total trans-monoenoic",
//             unitName: "G"
//         },
//         {
//             number: 695,
//             name: "Fatty acids, total trans-polyenoic",
//             unitName: "G"
//         },
//         ///SFA numbers range (Seemingly)
//         //607-615 , 616?
//         //
//     ],

//     proteins: [
//         {
//             number: 203,
//             name: "Protein",
//             unitName: "G"
//         },
//         {
//             number: 501,
//             name: "Tryptophan",
//             unitName: "G"
//         },
//         {
//             number: 502,
//             name: "Threonine",
//             unitName: "G"
//         },
//         {
//             number: 503,
//             name: "Isoleucine",
//             unitName: "G"
//         },
//         {
//             number: 504,
//             name: "Leucine",
//             unitName: "G"
//         },
//         {
//             number: 505,
//             name: "Lysine",
//             unitName: "G"
//         },
//         {
//             number: 506,
//             name: "Methionine",
//             unitName: "G"
//         },
//         {
//             number: 507,
//             name: "Cystine",
//             unitName: "G"
//         },
//         {
//             number: 508,
//             name: "Phenylalanine",
//             unitName: "G"
//         },
//         {
//             number: 509,
//             name: "Tyrosine",
//             unitName: "G"
//         },
//         {
//             number: 510,
//             name: "Valine",
//             unitName: "G"
//         },
//         {
//             number: 511,
//             name: "Arginine",
//             unitName: "G"
//         },
//         {
//             number: 512,
//             name: "Histidine",
//             unitName: "G"
//         },
//         {
//             number: 513,
//             name: "Alanine",
//             unitName: "G"
//         },
        
//         {
//             number: 514,
//             name: "Aspartic acid",
//             unitName: "G"
//         },
//         {
//             number: 515,
//             name: "Glutamic acid",
//             unitName: "G"
//         }, 
        
//         {
//             number: 516, 
//             name: "Glycine",
//             unitName: "G"
//         },
//         {
//             number: 517,
//             name: "Proline",
//             unitName: "G"
//         },
//         {
//             number: 518,
//             name: "Serine",
//             unitName: "G",
//         },
//         {
//             number: 521,
//             name: "Hydroxyproline",
//             unitName: "G"
//         },
//         {
//             number: 526,
//             name: "Cysteine",
//             unitName: "G",
//         }
//     ],

//     // vitamins: [
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },
//     //     {
//     //         number:
//     //         name:
//     //         unitName:
//     //     },

//     // ]
    
// }

module.exports = {
    nutrientCategories
}
// categoriesMap = [
//     {}
// ]


    // {
    //     macronutrients: [
    //         {
    //             number: "203",
    //             name: "Protein",
    //             mealAmount: 0,
    //             dailyAmount: 50,
    //             percentOfDV: 0,
    //             unitName: "G"
    //         },
    //         {
    //             number: "204",
    //             name: "Total lipid (fat)",
    //             mealAmount: 0,
    //             dailyAmount: 78,
    //             percentOfDV: 0,
    //             unitName: "G"
    //         },
    //         {
    //             number: "205",
    //             name: "Carbohydrate, by difference",
    //             mealAmount: 0,
    //             dailyAmount: 275,
    //             percentOfDV: 0,
    //             unitName: "G"
    //         },
    //         {
    //             number: "208",
    //             name: "Energy",
    //             mealAmount: 0,
    //             dailyAmount: 2000,
    //             percentOfDV: 0,
    //             unitName: "KCAL"
    //         },
    //     ]
    // }