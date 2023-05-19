require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

// console.log(process.env)

mongoose.connect('mongodb://localhost/Diet-Tracker-App');


app.set('view engine', 'ejs')
const foodRouter = require('./routes/foods')
const mealRouter = require('./routes/meals');
const nutrientRouter = require('./routes/nutrients');
const Meal = require('./models/meal');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))
app.use('/foods', foodRouter)
app.use('/meals', mealRouter)
app.use('/nutrients', nutrientRouter)

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})



app.get('/', async (req, res) => {
    const meals = await Meal.find();
    res.render('index', {meals: meals});
})