//Dependencies
const express = require('express')
const app     = express()
const PORT    = process.env.PORT || 3000
const bodyParser = require('body-parser')

//Middlewares
app.use(express.json({extended: false}))
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

//Home routes
app.get('/', (req, res)=>{
    res.render('index.ejs')
})
//Routes
// app.use('/api/search', require('./routes/api/search'))
// app.use('/api/user', require('./routes/api/user'))
app.use('/admin', require('./routes/api/admin'))

//Server Start
app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))