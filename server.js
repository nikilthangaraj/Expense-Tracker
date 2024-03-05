const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

app.get('/', function(request, response) {
    
    const data = {
        "content" : "Home Page",
        "text" : "Welcome ;)"
    }
    response.status(200).json(data)
})

app.get('/java', function(request, response) {
    
    const data = {
        "content" : "About Java",
        "text" : "Java is an Object Oriented Programming Language"
    }
    response.status(200).json(data)
})

app.get('/javascript', function(request, response) {
    response.status(200).json({
        "content" : "About JavaScript",
        "text" : "JavaScript is a client-side language"
    })
})

app.post('/login', function(request, response) {
    if(request.body.username === 'Nikil' && request.body.password === '9894') {
        response.json({
            "status" : "valid user"
        })
    } else {
        response.json({
            "status" : "invalid user"
        })
    }
})

app.post('/create-user', function(request, response) {
   response.status(200).json({})
})

const port = 8000
app.listen(port, function() {
    console.log(`Listening on port ${port}...`)
})