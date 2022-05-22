const express = require('express');
const app = express();
app.use(express.urlencoded());

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
})

app.get('/bmicalculator', (req,res) => {
    res.sendfile(__dirname + "/bmiCalculator.html");
})

app.post('/bmicalculator', (req,res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height)/100;
    result = weight / Math.pow(height,2);

    res.send("Your height is: " + height + "m---Your weight is: " + weight + "kg---Your BMI is: " + result)
})

app.listen(port, function(){
    console.log('Server has started on port 3000')
})