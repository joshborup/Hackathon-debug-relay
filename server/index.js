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

    //name and password sent from front end
    const {name, password} = req.body;

    //check you console to see what the session object looks like
    console.log()
    console.log('before setting user property on session',req.session)
    console.log()
    // make a new property called user (can be called anything) and add it to req.session, set the user property = to an object with the name and password sent from the front
    req.session.user = {
        id: id,
        name: name,
        password: password
    }

    console.log('after setting user property on session', req.session);
    // im not using a DB in this example so i am manually applying ID's and incrementing ( dont worry about this part)
    id++

    res.status(200).send('Success!');    
});

//when the user who logged in above clicks the get my info button on the front end, the user object we mader and attached to session is sent.

app.get('/api/get_user', (req, res) => {
    console.log(req.session.user);
    res.status(200).send(req.session.user);
})

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Server listening on port ${4000}`));