const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(session({
    secret:'dsdvsdfvsva',
    resave:true,
    saveUninitialized:true,
    cookie: {
        maxAge: 6000000
    }
}))

let id = 0;

app.post('/api/login', (req, res) => {

    const {name, password} = req.params;

    req.sesssion.user = {
        id: id,
        name: name,
        password: password
    }
    id++
    res.status(200).send('Success!');    
});

app.get('/api/get_user', (req, res) => {
    console.log(req.session.user);
    res.status(200).send(req.session.user);
})

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Server listening on port ${4000}`));