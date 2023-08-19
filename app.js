const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;


app.listen(PORT, function(){
    console.log(`o Express Esta On na porta ${PORT}`)
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));


// db connection
db
   .authenticate()
   .then(() => {
    console.log('Conectou ao banco');
   })
   .catch(err => {
    console.log('Ocorreu um erro', err)
   }); 


// Routes
app.get('/', (req, res) => {
    res.send('Esta OK ');
});

//jobs routs
app.use('/jobs', require('./routes/jobs'));